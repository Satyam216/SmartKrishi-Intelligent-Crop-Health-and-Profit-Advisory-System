import fs from "fs";
import csv from "csv-parser";
import { db } from "../config/firebaseAdmin.js";

const records = [];

fs.createReadStream("data/crop_disease_solutions.csv")
  .pipe(
    csv({
      mapHeaders: ({ header }) => header.trim()
    })
  )
  .on("data", (row) => {
    try {
      const crop = row.crop?.trim();
      const disease = row.disease?.trim();

      // skip invalid
      if (!crop || !disease) {
        console.log("Skipped:", row);
        return;
      }

      // ID EXACT SAME (NO CHANGE)
      const id = `${crop}_${disease}`
                    .replace(/\//g, "-")
                    .replace(/#/g, "")
                    .trim();

      const clean = (val) => (val ? val : "");

      records.push({
        id,
        crop,
        disease,
        disease_status: clean(row.disease_status),
        causal_agent: clean(row.causal_agent),
        symptoms: clean(row.symptoms),

        chemical_solutions: clean(row.chemical_solutions).split(";"),
        biological_solutions: clean(row.biological_solutions).split(";"),
        cultural_solutions: clean(row.cultural_solutions).split(";"),
        preventive_measures: clean(row.preventive_measures).split(";"),
        organic_solutions: clean(row.organic_solutions).split(";"),

        soil_management: clean(row.soil_management),
        irrigation_advice: clean(row.irrigation_advice),
        nutrition: clean(row.nutrition),
        season_timing: clean(row.season_timing),

        tags: clean(row.firestore_tags).split(",")
      });

    } catch (err) {
      console.error("Row Error:", err);
    }
  })
  .on("end", async () => {

    console.log(`Total records: ${records.length}`);

    const batchSize = 400;

    for (let i = 0; i < records.length; i += batchSize) {

      const batch = db.batch();
      const chunk = records.slice(i, i + batchSize);

      chunk.forEach((item) => {
        const ref = db
          .collection("crop_disease_solution")
          .doc(item.id); // EXACT ID

        batch.set(ref, item);
      });

      await batch.commit();

      console.log(`Uploaded: ${Math.min(i + batchSize, records.length)}`);
    }

    console.log("🔥 Upload Complete 🚀");
  });
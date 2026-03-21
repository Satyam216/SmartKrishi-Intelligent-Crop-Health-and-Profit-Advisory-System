import fs from "fs";
import csv from "csv-parser";
import { db } from "../config/firebaseAdmin.js";

const districts = {};

fs.createReadStream("data/crop_calendar.csv")
  .pipe(
    csv({
      mapHeaders: ({ header }) => header.trim()
    })
  )
  .on("data", (row) => {

    const state = row.State?.trim().toUpperCase();
    const district = row.District?.trim().toUpperCase();
    const crop = row.Crop?.trim();
    const season = row.Season?.trim();

    if (!state || !district || !crop || !season) return;

    const key = `${state}_${district}`;

    if (!districts[key]) {
      districts[key] = {
        state,
        district,
        crops: []
      };
    }

    // duplicate check
    const exists = districts[key].crops.find(
      (c) => c.crop === crop && c.season === season
    );

    if (!exists) {
      districts[key].crops.push({
        crop,
        season
      });
    }

  })
  .on("end", async () => {

    console.log("Districts found:", Object.keys(districts).length);

    const batchSize = 500;
    const entries = Object.values(districts);

    for (let i = 0; i < entries.length; i += batchSize) {

      const batch = db.batch();
      const chunk = entries.slice(i, i + batchSize);

      chunk.forEach((item) => {

        const docId = `${item.state}_${item.district}`;

        const ref = db.collection("crop_calendar").doc(docId);

        batch.set(ref, item);

      });

      await batch.commit();

      console.log(`Uploaded ${Math.min(i + batchSize, entries.length)}`);

    }

    console.log("Upload Completed 🚀");

  });
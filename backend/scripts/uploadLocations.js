import fs from "fs";
import csv from "csv-parser";
import { db } from "../config/firebaseAdmin.js";

const states = {};

fs.createReadStream("data/locations.csv")
  .pipe(
    csv({
      mapHeaders: ({ header }) => header.trim()
    })
  )
  .on("data", (row) => {

    const state = row.State?.trim().toUpperCase();
    const district = row.District?.trim().toUpperCase();
    const pincode = row.Pincode?.trim();

    if (!state || !district) return;

    if (!states[state]) {
      states[state] = {
        state,
        districts: []
      };
    }

    const exists = states[state].districts.find(
      (d) => d.name === district
    );

    if (!exists) {
      states[state].districts.push({
        name: district,
        pincode
      });
    }

  })
  .on("end", async () => {

    const entries = Object.values(states);

    const batchSize = 500;

    for (let i = 0; i < entries.length; i += batchSize) {

      const batch = db.batch();
      const chunk = entries.slice(i, i + batchSize);

      chunk.forEach((state) => {

        const ref = db.collection("locations").doc(state.state);

        batch.set(ref, state);

      });

      await batch.commit();

      console.log(`Uploaded ${Math.min(i + batchSize, entries.length)}`);

    }

    console.log("Locations Upload Complete 🚀");

  });
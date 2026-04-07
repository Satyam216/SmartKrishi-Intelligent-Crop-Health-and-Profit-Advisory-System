import express from "express";
import { db } from "../config/firebaseAdmin.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    let { state, district } = req.query;

    if (!state || !district) {
      return res.status(400).json({ message: "State and district required" });
    }
    state = state.trim().toUpperCase();
    district = district.trim().toUpperCase();
    const docId = `${state}_${district}`;

    console.log("DOC ID:", docId);

    const doc = await db.collection("crop_calendar").doc(docId).get();

    // SAFE CHECK
    if (!doc.exists) {
      console.log("Document not found");
      return res.json([]);
    }

    const data = doc.data();

    if (!data || !data.crops) {
      console.log("No crops field");
      return res.json([]);
    }

    res.json(data.crops);

  } catch (error) {

    console.error("ERROR:", error); // IMPORTANT
    res.status(500).json({ message: "Failed to fetch crops" });

  }

});

export default router;
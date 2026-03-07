import express from "express";
import { db } from "../config/firebaseAdmin.js";

const router = express.Router();

router.get("/states", async (req, res) => {

  const snapshot = await db.collection("locations").get();

  const states = snapshot.docs.map(doc => doc.id);

  res.json(states);

});

router.get("/districts/:state", async (req, res) => {

  const state = req.params.state.toUpperCase();

  const doc = await db.collection("locations").doc(state).get();

  if (!doc.exists) {
    return res.json([]);
  }

  res.json(doc.data().districts);

});

export default router;
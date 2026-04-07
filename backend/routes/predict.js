import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import { db } from "../config/firebaseAdmin.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const formData = new FormData();
    formData.append("file", req.file.buffer, req.file.originalname);

    const ML_URL = process.env.ML_SERVICE_URL || "http://127.0.0.1:5001";
    const mlResponse = await axios.post(
      `${ML_URL}/predict`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    const data = mlResponse.data;

    if (data.error) {
      return res.status(400).json({
        error: data.error,
        predictions: data.predictions || [],
      });
    }

    const predictions = data.top_predictions || [];

    //FETCH FIRESTORE DATA
    const results = await Promise.all(
      predictions.map(async (item) => {
        try {
          // MATCH SAME ID FORMAT
          const id = `${item.crop}_${item.defect}`.replace(/\//g, "-");

          const doc = await db
            .collection("crop_disease_solution")
            .doc(id)
            .get();

          if (doc.exists) {
            return {
              ...item,
              details: doc.data(),
            };
          } else {
            return {
              ...item,
              details: null,
            };
          }
        } catch (err) {
          console.error("Firestore Error:", err.message);
          return {
            ...item,
            details: null,
          };
        }
      })
    );

    // FINAL RESPONSE
    return res.status(200).json({
      success: true,
      results,
    });

  } catch (error) {
    console.error("Prediction Error:", error.message);

    return res.status(500).json({
      error: "Prediction failed",
      details: error.message,
    });
  }
});

export default router;
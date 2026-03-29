import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";

const router = express.Router();

// multer setup
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    // ❌ no file
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 🔥 prepare form data
    const formData = new FormData();
    formData.append("file", req.file.buffer, req.file.originalname);

    // 🔥 call Python ML API
    const response = await axios.post(
      "http://127.0.0.1:5001/predict",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    const data = response.data;

    // 🔥 handle ML error (low confidence / unsupported)
    if (data.error) {
      return res.status(400).json({
        error: data.error,
        predictions: data.predictions || [],
      });
    }

    // ✅ send clean response
    return res.status(200).json({
      success: true,
      predictions: data.top_predictions,
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
import express from "express";
import axios from "axios";

const router = express.Router();

const API_KEY = process.env.MARKETSTACK_API_KEY;

router.get("/", async (req, res) => {
  try {
    const { crop, state, district } = req.query;

    const response = await axios.get(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070",
      {
        params: {
          "api-key": API_KEY,
          format: "json",
          "filters[state.keyword]": state,
          limit: 50
        }
      }
    );

    const records = response.data.records;

    // STEP 1: District filter
    let districtData = records.filter(r =>
      r.district?.toLowerCase() === district?.toLowerCase()
    );

    let isFallback = false;

    //STEP 2: fallback to state
    if (!districtData.length) {
      districtData = records;
      isFallback = true;
    }

    // STEP 3: crop filter
    const filtered = districtData.filter(r =>
      r.commodity?.toLowerCase().includes(crop.toLowerCase())
    );

    if (!filtered.length) {
      return res.json({
        success: false,
        message: "No crop data found",
        sample: records.slice(0, 5)
      });
    }

    // STEP 4: best mandi
    const best = filtered.reduce((a, b) =>
      Number(b.modal_price) > Number(a.modal_price) ? b : a
    );

    return res.json({
      success: true,
      bestMarket: best,
      markets: filtered,
      fallback: isFallback
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Market API failed" });
  }
});

export default router;
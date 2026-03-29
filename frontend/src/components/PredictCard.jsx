import { useState } from "react";
import { apiRequest } from "../services/api";

const PredictCard = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handlePredict = async () => {
    if (!file) return alert("Please select image");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await apiRequest("/predict", {
        method: "POST",
        body: formData,
      });

      // ❌ error handle
      if (res.error) {
        alert(res.error);
        setResult(null);
        return;
      }

      setResult(res);

    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4">
        🤖 Disease Detection
      </h2>

      <input type="file" onChange={handleFileChange} />

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-4 w-full h-40 object-cover rounded-lg"
        />
      )}

      {/* Button */}
      <button
        onClick={handlePredict}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full"
      >
        {loading ? "Analyzing..." : "Predict"}
      </button>
{/* 🔥 RESULT UI */}
{result && result.predictions && (
  <div className="mt-4 p-4 bg-green-100 rounded-lg">

    <h3 className="text-lg font-bold text-green-800">
      ⚠️ Possible Crops and Issues Detected
    </h3>

    {/* 🔥 GROUP BY CROP */}
    {Object.entries(
      result.predictions.reduce((acc, item) => {
        if (!acc[item.crop]) acc[item.crop] = [];
        acc[item.crop].push(item);
        return acc;
      }, {})
    ).map(([crop, items], index) => (
      <div key={index} className="mt-3">

        <p className="font-semibold">
          🌿 Crop: {crop}
        </p>

        <ul className="mt-1 ml-4">
          {items.map((i, idx) => (
            <li key={idx}>
              • {i.defect} ({i.confidence}%)
            </li>
          ))}
        </ul>

      </div>
    ))}

  </div>
)}
    </div>
  );
};

export default PredictCard;
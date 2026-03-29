import { useState } from "react";
import { apiRequest } from "../services/api";

const PredictCard = ({ onResult }) => {
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

      if (res.error) {
        alert(res.error);
        setResult(null);
        return;
      }

      setResult(res);
      onResult && onResult(res); // 🔥 send to dashboard

    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
        🌿 AI Crop Disease Detection
      </h2>

      {/* Upload */}
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full border p-2 rounded-lg"
      />

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-4 w-full h-48 object-cover rounded-xl shadow"
        />
      )}

      {/* Button */}
      <button
        onClick={handlePredict}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl w-full transition"
      >
        {loading ? "Analyzing..." : "🔍 Analyze Crop"}
      </button>

      {/* 🔥 BLOCK 1: AI PREDICTIONS */}
      {result && result.results && (
        <div className="mt-6">

          <h3 className="text-lg font-semibold text-yellow-700 mb-2">
            🤖 AI Predictions
          </h3>

          <div className="grid gap-2">
            {result.results.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  index === 0
                    ? "bg-yellow-200 border-yellow-400"
                    : "bg-yellow-50"
                }`}
              >
                🌿 <b>{item.crop}</b> → {item.defect}
                <span className="float-right font-semibold">
                  {item.confidence}%
                </span>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* 🔥 BLOCK 2: DETAILED RESULTS */}
      {result && result.results && (
        <div className="mt-6">

          <h3 className="text-lg font-semibold text-green-700 mb-2">
            🌿 Detailed Analysis
          </h3>

          {result.results.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 p-4 rounded-xl mb-4 border"
            >

              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-green-800">
                  {item.crop} — {item.defect}
                </h4>
                <span className="text-sm bg-green-200 px-2 py-1 rounded">
                  {item.confidence}%
                </span>
              </div>

              {item.details ? (
                <div className="text-sm space-y-2">

                  <p><b>🧬 Symptoms:</b> {item.details.symptoms}</p>

                  <div>
                    <b>💊 Chemical:</b>
                    <ul className="ml-4 list-disc">
                      {item.details.chemical_solutions?.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <b>🌿 Organic:</b>
                    <ul className="ml-4 list-disc">
                      {item.details.organic_solutions?.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <b>🛡 Prevention:</b>
                    <ul className="ml-4 list-disc">
                      {item.details.preventive_measures?.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              ) : (
                <p className="text-red-500 text-sm">
                  ⚠️ No data found for this disease
                </p>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default PredictCard;
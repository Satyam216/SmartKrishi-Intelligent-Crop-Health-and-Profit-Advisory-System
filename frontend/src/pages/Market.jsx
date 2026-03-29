import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";
import { db } from "../firebase/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const Market = () => {

  const [crop, setCrop] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ FORMAT FUNCTION (FIX CASE ISSUE)
  const formatText = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // 🔥 LOAD STATES
  useEffect(() => {
    const fetchStates = async () => {
      const snapshot = await getDocs(collection(db, "locations"));
      const stateList = snapshot.docs.map(doc => doc.id);
      setStates(stateList);
    };

    fetchStates();
  }, []);

  // 🔥 LOAD DISTRICTS BASED ON STATE
  useEffect(() => {
    if (!state) return;

    const fetchDistricts = async () => {
      const docRef = doc(db, "locations", state);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setDistricts(data.districts || []);
      }
    };

    fetchDistricts();
  }, [state]);

  // 🔥 SEARCH FUNCTION (FINAL FIX)
  const handleSearch = async () => {

    if (!state) {
      return alert("Please select state");
    }

    try {
      setLoading(true);

      // ✅ convert for API
      const formattedState = formatText(state);
      const formattedDistrict = formatText(district);

      const res = await apiRequest(
        `/market?crop=${crop || ""}&state=${formattedState}&district=${formattedDistrict || ""}`
      );

      setResult(res);

    } catch (err) {
      console.error(err);
      alert("Failed to fetch market data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        💰 Market Prices
      </h1>

      {/* 🔍 SEARCH */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">

        <h2 className="text-xl font-semibold mb-4">
          🔍 Find Best Market
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {/* Crop */}
          <input
            type="text"
            placeholder="Enter Crop (optional e.g. Tomato)"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="border p-2 rounded-lg"
          />

          {/* ✅ STATE DROPDOWN */}
          <select
            value={state}
            onChange={(e) => {
              const value = e.target.value.trim();
              setState(value);
              setDistrict("");
            }}
            className="border p-2 rounded-lg"
          >
            <option value="">Select State</option>
            {states.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* ✅ DISTRICT DROPDOWN */}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="border p-2 rounded-lg"
            disabled={!state}
          >
            <option value="">Select District</option>
            {districts.map((d, i) => (
              <option key={i} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>

        </div>

        <button
          onClick={handleSearch}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {/* 📊 RESULT */}
      {result && result.success && (
        <div className="space-y-6">

          {/* 🏆 BEST MARKET */}
          <div className="bg-green-100 p-6 rounded-2xl shadow">

            <h2 className="text-xl font-bold text-green-800 mb-3">
              🏆 Best Market to Sell
            </h2>

            {result.fallback && (
              <p className="text-yellow-700 mb-2">
                ⚠️ Showing nearby markets (district data not available)
              </p>
            )}

            <p><b>📍 Market:</b> {result.bestMarket.market}</p>
            <p><b>📍 District:</b> {result.bestMarket.district}</p>
            <p><b>💰 Price:</b> ₹{result.bestMarket.modal_price}</p>

          </div>

          {/* 📋 ALL MARKETS */}
          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-xl font-semibold mb-4">
              📊 Available Markets
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {result.markets.map((m, i) => (
                <div
                  key={i}
                  className="border p-4 rounded-lg hover:shadow transition"
                >
                  <p><b>📍 {m.market}</b></p>
                  <p>{m.district}</p>
                  <p className="text-green-700 font-semibold">
                    ₹{m.modal_price}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      )}

      {/* ❌ NO DATA */}
      {result && !result.success && (
        <div className="bg-red-100 p-4 rounded-lg text-red-700">
          {result.message}
        </div>
      )}

    </Layout>
  );
};

export default Market;
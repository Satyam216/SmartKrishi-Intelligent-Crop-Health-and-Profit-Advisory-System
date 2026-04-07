import { useState } from "react";
import Layout from "../components/Layout";
import PredictCard from "../components/PredictCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

/* ─────────────────────────── StatCard ──────────────────────── */
const StatCard = ({ title, value, icon, accent, note }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "22px 20px 18px",
        position: "relative",
        overflow: "hidden",
        border: `1.5px solid ${accent}1a`,
        boxShadow: hovered
          ? `0 8px 0 ${accent}20, 0 24px 48px ${accent}14`
          : `0 2px 0 ${accent}14, 0 6px 24px ${accent}0c`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
      }}
    >
      {/* top stripe */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${accent}, ${accent}88)`, borderRadius:"20px 20px 0 0" }} />
      {/* background orb */}
      <div style={{ position:"absolute", top:-28, right:-28, width:100, height:100, borderRadius:"50%", background:`${accent}09`, transition:"transform 0.3s", transform: hovered ? "scale(1.2)" : "scale(1)" }} />

      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", position:"relative" }}>
        <div>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.09em", textTransform:"uppercase", color:"#9ca3af", marginBottom:10 }}>{title}</div>
          <div style={{ fontSize:28, fontWeight:800, color: accent, letterSpacing:"-0.6px", lineHeight:1 }}>{value}</div>
        </div>
        <div style={{ width:46, height:46, borderRadius:13, background:`${accent}12`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{icon}</div>
      </div>

      {note && (
        <div style={{ marginTop:12, fontSize:11, color:"#b0bac4", display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ width:5, height:5, borderRadius:"50%", background:accent, display:"inline-block", opacity:0.5 }} />
          {note}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────── Dashboard ─────────────────────── */
const Dashboard = () => {

  const [analysis, setAnalysis] = useState(null);
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchLocation = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();
        setLocation(
          data.city && data.state && data.country
            ? `${data.city}, ${data.state}, ${data.country}`
            : null
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchLocation();
}, []);

  // receive data from PredictCard
  const handleResult = (data) => {
    setAnalysis(data);
  };

  // total crops count (unique)
  const totalCrops = analysis?.results
    ? new Set(analysis.results.map((r) => r.crop)).size + 1
    : 0;

  // dynamic greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  };

  return (
    <Layout>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .agri-dash { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes agri-fade-up {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes agri-blink {
          0%,100% { opacity:1; } 50% { opacity:0.25; }
        }
        @keyframes agri-float-a {
          0%,100% { transform:translateY(0) rotate(0deg); }
          40%     { transform:translateY(-12px) rotate(3deg); }
          70%     { transform:translateY(-6px) rotate(-2deg); }
        }
        @keyframes agri-float-b {
          0%,100% { transform:translateY(0) rotate(0deg); }
          35%     { transform:translateY(-8px) rotate(-3deg); }
          70%     { transform:translateY(-4px) rotate(2deg); }
        }
        @keyframes agri-shimmer {
          0%   { background-position:-300% center; }
          100% { background-position:300% center; }
        }
        @keyframes agri-bar {
          from { width:0; } to { width:65%; }
        }

        .agri-dash > * {
          animation: agri-fade-up 0.5s cubic-bezier(.4,0,.2,1) both;
        }
        .agri-dash > *:nth-child(1) { animation-delay:0.0s; }
        .agri-dash > *:nth-child(2) { animation-delay:0.08s; }
        .agri-dash > *:nth-child(3) { animation-delay:0.16s; }
        .agri-dash > *:nth-child(4) { animation-delay:0.22s; }

        .hero-banner {
          border-radius: 24px;
          background: linear-gradient(130deg, #0f4023 0%, #14532d 35%, #1a6838 65%, #166534 100%);
          padding: 38px 44px;
          position: relative;
          overflow: hidden;
          margin-bottom: 28px;
        }
        .hero-banner::before {
          content:'';
          position:absolute; inset:0;
          background: repeating-linear-gradient(
            60deg,
            transparent, transparent 40px,
            rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px
          );
        }
        .hero-orb-1 {
          position:absolute; top:-80px; right:-80px;
          width:280px; height:280px; border-radius:50%;
          background: radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%);
        }
        .hero-orb-2 {
          position:absolute; bottom:-60px; left:30%;
          width:200px; height:200px; border-radius:50%;
          background: radial-gradient(circle, rgba(134,239,172,0.08) 0%, transparent 70%);
        }
        .hero-leaf-1 {
          position:absolute; font-size:90px; bottom:-8px; right:48px;
          opacity:0.08; animation: agri-float-a 7s ease-in-out infinite;
          user-select:none; pointer-events:none;
        }
        .hero-leaf-2 {
          position:absolute; font-size:56px; top:14px; right:220px;
          opacity:0.06; animation: agri-float-b 9s ease-in-out infinite 1.5s;
          user-select:none; pointer-events:none;
        }
        .hero-leaf-3 {
          position:absolute; font-size:38px; bottom:18px; right:180px;
          opacity:0.05; animation: agri-float-a 11s ease-in-out infinite 3s;
          user-select:none; pointer-events:none;
        }

        .hero-content { position:relative; z-index:1; }

        .hero-greeting {
          font-family: 'Lora', serif;
          font-size: 34px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1.18;
          margin-bottom: 10px;
        }
        .hero-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.68);
          font-weight: 400;
          line-height: 1.65;
          max-width: 500px;
        }
        .hero-chips {
          display:flex; gap:10px; flex-wrap:wrap; margin-top:22px;
        }
        .hero-chip {
          display:inline-flex; align-items:center; gap:6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.88);
          font-weight: 500;
          backdrop-filter: blur(6px);
        }
        .hero-status-badge {
          position:absolute; top:24px; right:28px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 14px;
          padding: 10px 18px;
          text-align:center;
          backdrop-filter: blur(8px);
          z-index:1;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        .scanner-card {
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #e2f0e2;
          box-shadow: 0 4px 28px rgba(21,128,61,0.07);
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }
        .scanner-top-bar {
          height: 3px;
          background: linear-gradient(90deg, #16a34a 0%, #4ade80 50%, #16a34a 100%);
          background-size: 300% auto;
          animation: agri-shimmer 3s linear infinite;
        }
        .scanner-inner {
          padding: 28px 32px;
        }
        .scanner-header {
          display:flex; align-items:center; gap:14px;
          padding-bottom: 22px;
          border-bottom: 1.5px solid #f0f7f0;
          margin-bottom: 24px;
        }
        .scanner-icon {
          width:54px; height:54px;
          border-radius:15px;
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
          display:flex; align-items:center; justify-content:center;
          font-size:26px; flex-shrink:0;
          box-shadow: 0 4px 14px rgba(16,185,129,0.2);
        }
        .scanner-label {
          font-size:10px; font-weight:700; letter-spacing:.1em;
          text-transform:uppercase; color:#16a34a; margin-bottom:3px;
        }
        .scanner-title {
          font-family:'Lora',serif;
          font-size:21px; font-weight:800; color:#14532d; letter-spacing:-.3px;
        }
        .scanner-status {
          margin-left:auto;
          display:flex; align-items:center; gap:6px;
          font-size:12px; color:#16a34a; font-weight:600;
          background:#f0fdf4; padding:7px 16px;
          border-radius:20px; border:1px solid #bbf7d0; flex-shrink:0;
        }
        .scanner-status-dot {
          width:7px; height:7px; border-radius:50%; background:#16a34a;
          animation: agri-blink 1.8s infinite;
        }

        .notif-card {
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #f1f5f1;
          box-shadow: 0 2px 18px rgba(0,0,0,0.04);
          padding: 26px 32px;
        }
        .notif-head {
          display:flex; align-items:center; justify-content:space-between;
          margin-bottom:20px;
        }
        .notif-title {
          font-family:'Lora',serif;
          font-size:20px; font-weight:700; color:#1a2e1a;
          display:flex; align-items:center; gap:10px;
        }
        .notif-count {
          font-size:11px; font-weight:700; letter-spacing:.07em;
          text-transform:uppercase; color:#9ca3af;
          background:#f8fafc; border:1px solid #e5e7eb;
          border-radius:8px; padding:3px 10px;
        }

        .coming-soon-banner {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 1.5px dashed #86efac;
          border-radius: 18px;
          padding: 22px 26px;
          display:flex; align-items:center; gap:20px;
        }
        .cs-rocket {
          width:52px; height:52px; border-radius:14px;
          background: linear-gradient(135deg, #16a34a, #15803d);
          display:flex; align-items:center; justify-content:center;
          font-size:24px; flex-shrink:0;
          box-shadow: 0 6px 16px rgba(22,163,74,0.3);
        }
        .cs-title {
          font-weight:700; font-size:15px; color:#14532d; margin-bottom:4px;
        }
        .cs-desc {
          font-size:12.5px; color:#4b7a52; line-height:1.65;
        }
        .cs-bar-track {
          margin-top:10px; height:5px; background:#bbf7d0;
          border-radius:5px; overflow:hidden;
        }
        .cs-bar-fill {
          height:100%; background:linear-gradient(90deg, #16a34a, #4ade80);
          border-radius:5px;
          animation: agri-bar 1.4s cubic-bezier(.4,0,.2,1) 0.6s both;
        }
        .cs-note { font-size:11px; color:#86a98a; margin-top:5px; }

        @media (max-width:700px) {
          .hero-banner { padding:26px 22px; }
          .hero-greeting { font-size:24px; }
          .stats-row { grid-template-columns:1fr 1fr; }
          .scanner-inner { padding:20px; }
          .hero-status-badge { display:none; }
        }
      `}</style>

      <div className="agri-dash">

        {/* ── Hero Banner ─────────────────────────────────────── */}
        <div className="hero-banner">
          <div className="hero-orb-1" />
          <div className="hero-orb-2" />
          <span className="hero-leaf-1">🌾</span>
          <span className="hero-leaf-2">🌿</span>
          <span className="hero-leaf-3">🍃</span>

          <div className="hero-status-badge">
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.55)", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>AI Engine</div>
            <div style={{ fontSize:13, color:"#4ade80", fontWeight:700, marginTop:3, display:"flex", alignItems:"center", gap:5, justifyContent:"center" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"agri-blink 1.6s infinite" }} />
              Online
            </div>
          </div>

          <div className="hero-content">
            <h1 className="hero-greeting">{getGreeting()}, Farmer 👋</h1>
            <p className="hero-sub">
              Click a picture of your crop and let AI detect diseases &amp; suggest solutions 🌱
            </p>
            <div className="hero-chips">
              <span
                className="hero-chip"
                style={{ cursor: location ? "default" : "pointer" }}
                onClick={() => {
                  if (!location) navigate("/profile");
                }}
              >
                <span>📍</span>
                {location ? location : "Add Location"}
              </span>
              <span className="hero-chip"><span>🌾</span>Rabi Season</span>
              <span className="hero-chip" style={{ color:"#86efac" }}><span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />Scan Ready</span>
            </div>
          </div>
        </div>

        {/* ── Stat Cards ──────────────────────────────────────── */}
        <div className="stats-row">
          <StatCard
            title="Detected Crops"
            value={totalCrops}
            icon="🌾"
            accent="#16a34a"
            note={totalCrops ? `${totalCrops} crop type${totalCrops !== 1 ? "s" : ""} identified` : "Run scan to populate"}
          />
          <StatCard
            title="Active Alerts"
            value="Coming Soon 🚧"
            icon="🔔"
            accent="#d97706"
            note="Smart alerts arriving soon"
          />
          <StatCard
            title="Expected Profit"
            value="₹45,000"
            icon="📈"
            accent="#7c3aed"
            note="Based on current season"
          />
        </div>

        {/* ── AI Scanner ──────────────────────────────────────── */}
        <div className="scanner-card">
          <div className="scanner-top-bar" />
          <div className="scanner-inner">
            <div className="scanner-header">
              <div className="scanner-icon">🔬</div>
              <div>
                <div className="scanner-label">Powered by AI</div>
                <div className="scanner-title">Crop Disease Scanner</div>
              </div>
              <div className="scanner-status">
                <span className="scanner-status-dot" />
                Model Active
              </div>
            </div>

            <div style={{ display:"flex", justifyContent:"center" }}>
              <div style={{ width:"100%", maxWidth:720 }}>
                <PredictCard onResult={handleResult} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Notifications ───────────────────────────────────── */}
        <div className="notif-card">
          <div className="notif-head">
            <div className="notif-title">
              🔔 Notifications
            </div>
            <span className="notif-count">0 New</span>
          </div>

          <div className="coming-soon-banner">
            <div className="cs-rocket">🚀</div>
            <div style={{ flex:1 }}>
              <div className="cs-title">Smart Alerts — Coming Soon</div>
              <div className="cs-desc">
                Get personalised alerts for crop care schedules, mandi price updates, weather warnings, and AI treatment reminders.
              </div>
              <div className="cs-bar-track">
                <div className="cs-bar-fill" />
              </div>
              <div className="cs-note">Development · 65% complete</div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;
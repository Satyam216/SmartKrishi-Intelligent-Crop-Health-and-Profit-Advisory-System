import { Leaf, BarChart3, Calendar, TrendingUp, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/auth");
    };
  return (
    <div className="min-h-screen bg-green-50 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#233925] text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold flex items-center gap-2">
          🌾 SmartKrishi
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem icon={<BarChart3 />} label="Dashboard" active />
          <SidebarItem icon={<Leaf />} label="My Crops" />
          <SidebarItem icon={<Calendar />} label="Farming Calendar" />
          <SidebarItem icon={<TrendingUp />} label="Market Prices" />
        </nav>

        <div className="p-4 border-t border-green-700">
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-300 hover:text-red-400">
            <LogOut size={18}/> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            Welcome 👋
          </h1>

          <div className="bg-white px-4 py-2 rounded-xl shadow text-sm">
            Farmer Dashboard
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Crops" value="3" />
          <StatCard title="Crop Health" value="Good" />
          <StatCard title="Active Alerts" value="1" />
          <StatCard title="Expected Profit" value="₹45,000" />
        </div>

        {/* Main Sections */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Crop Status */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🌱 Crop Status
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>• Wheat – Healthy</li>
              <li>• Rice – Needs irrigation</li>
              <li>• Tomato – Pest risk detected</li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🔔 Notifications
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>• Spray pesticide tomorrow</li>
              <li>• Check mandi prices today</li>
              <li>• Fertilizer schedule updated</li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
      active
        ? "bg-green-700"
        : "hover:bg-green-700/50"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <div className="text-gray-500 text-sm">{title}</div>
    <div className="text-2xl font-bold text-green-700 mt-2">
      {value}
    </div>
  </div>
);

export default Dashboard;

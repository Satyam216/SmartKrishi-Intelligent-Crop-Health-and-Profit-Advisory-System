import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>

      <h1 className="text-3xl font-bold text-green-800 mb-8">
        Welcome Farmer 👋
      </h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard title="Total Crops" value="3" />
        <StatCard title="Crop Health" value="Good" />
        <StatCard title="Active Alerts" value="1" />
        <StatCard title="Expected Profit" value="₹45,000" />

      </div>

      {/* Sections */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            🌱 Crop Status
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Wheat – Healthy</li>
            <li>• Rice – Needs irrigation</li>
            <li>• Tomato – Pest risk detected</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            🔔 Notifications
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Spray pesticide tomorrow</li>
            <li>• Check mandi prices today</li>
            <li>• Fertilizer schedule updated</li>
          </ul>
        </div>

      </div>

    </Layout>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow text-center">
    <div className="text-gray-500 text-sm">{title}</div>
    <div className="text-2xl font-bold text-green-700 mt-2">
      {value}
    </div>
  </div>
);

export default Dashboard;
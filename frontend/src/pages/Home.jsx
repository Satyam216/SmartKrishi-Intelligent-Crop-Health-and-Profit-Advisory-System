import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-green-700">
            SmartKrishi
          </h1>
          <p className="mt-4 text-gray-600">
            Intelligent Crop Health & Market Advisory System
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

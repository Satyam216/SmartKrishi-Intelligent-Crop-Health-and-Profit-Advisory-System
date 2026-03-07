import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-green-50">

      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>

    </div>
  );
};

export default Layout;
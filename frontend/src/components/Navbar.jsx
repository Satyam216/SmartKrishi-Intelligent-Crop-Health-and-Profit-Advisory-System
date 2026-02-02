const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">SmartKrishi</h1>
      <button className="md:hidden">☰</button>
      <ul className="hidden md:flex gap-6">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;

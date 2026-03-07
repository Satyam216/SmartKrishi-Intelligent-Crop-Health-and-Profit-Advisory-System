import { useState } from "react";
import { Menu, X, Leaf, BarChart3, Calendar, TrendingUp, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  const navItem = (icon, label, path) => (
    <button
      onClick={() => {
        navigate(path);
        setOpen(false);
      }}
      className="flex items-center gap-2 hover:text-green-600"
    >
      {icon}
      {label}
    </button>
  );

  return (
    <nav className="bg-[#233925] text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div onClick={() => navigate("/dashboard")} className="cursor-pointer">
            <img src="/logo.png" alt="SmartKrishi Logo" className="w-24 h-14 mx-auto" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">

          {navItem(<BarChart3 size={18} />, "Dashboard", "/dashboard")}
          {navItem(<User size={18} />, "Profile", "/profile")}
          {navItem(<Leaf size={18} />, "My Crops", "/crops")}
          {navItem(<Calendar size={18} />, "Farming Calendar", "/crop-calendar")}
          {navItem(<TrendingUp size={18} />, "Market Prices", "/market")}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-300 hover:text-red-400"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#233925] px-6 pb-4 flex flex-col gap-4">

          {navItem(<BarChart3 size={18} />, "Dashboard", "/dashboard")}
          {navItem(<User size={18} />, "Profile", "/profile")}
          {navItem(<Leaf size={18} />, "My Crops", "/crops")}
          {navItem(<Calendar size={18} />, "Farming Calendar", "/crop-calendar")}
          {navItem(<TrendingUp size={18} />, "Market Prices", "/market")}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
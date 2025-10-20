import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path) =>
    `block px-4 py-2 rounded transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          FitTrack
        </Link>

        {/* Hamburger button */}
        <button
          className="sm:hidden p-2 rounded-md text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/" className={linkClass("/")}>Dashboard</Link>
          <Link to="/exercises" className={linkClass("/exercises")}>Exercises</Link>
          <Link to="/history" className={linkClass("/history")}>History</Link>
          <Link to="/profile" className={linkClass("/profile")}>Profile</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <Link to="/" className={linkClass("/")} onClick={toggleMenu}>Dashboard</Link>
          <Link to="/exercises" className={linkClass("/exercises")} onClick={toggleMenu}>Exercises</Link>
          <Link to="/history" className={linkClass("/history")} onClick={toggleMenu}>History</Link>
          <Link to="/profile" className={linkClass("/profile")} onClick={toggleMenu}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md text-gray-800 shadow-sm z-50 flex items-center justify-between px-6">
        {/* Logo Centered */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
        >
          <img
            src="/logo.png"
            alt="Fitness Tracker Logo"
            className="w-9 h-9 object-contain"
          />
        </Link>

        {/* Right-side Menu Button */}
        <div className="ml-auto relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-700 hover:text-[#FF6B6B] transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-2 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 transform transition-all duration-300 ease-out origin-top-right ${
              open
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            <Link
              to="/"
              className="block px-4 py-2 text-sm hover:bg-[#FF6B6B] hover:text-white rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/exercises"
              className="block px-4 py-2 text-sm hover:bg-[#FF6B6B] hover:text-white rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Exercises
            </Link>
            <Link
              to="/history"
              className="block px-4 py-2 text-sm hover:bg-[#FF6B6B] hover:text-white rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              History
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm hover:bg-[#FF6B6B] hover:text-white rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below navbar */}
      <div className="h-20"></div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex flex-col md:flex-row items-center justify-between px-6 py-3">
        {/* Logo centered */}
        <Link
          to="/"
          className="flex items-center space-x-2 mb-3 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
        >
          <img
            src="/logo.png"
            alt="Fitness Tracker Logo"
            className="w-8 h-8 object-contain"
          />
        </Link>

        {/* Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
          <Link
            to="/"
            className="bg-[#FF6B6B] text-white px-5 py-2 rounded-lg hover:bg-[#ff4c4c] transition-all duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/exercises"
            className="bg-[#FF6B6B] text-white px-5 py-2 rounded-lg hover:bg-[#ff4c4c] transition-all duration-200"
          >
            Exercises
          </Link>
          <Link
            to="/history"
            className="bg-[#FF6B6B] text-white px-5 py-2 rounded-lg hover:bg-[#ff4c4c] transition-all duration-200"
          >
            History
          </Link>
          <Link
            to="/profile"
            className="bg-[#FF6B6B] text-white px-5 py-2 rounded-lg hover:bg-[#ff4c4c] transition-all duration-200"
          >
            Profile
          </Link>
        </div>
      </nav>

      {/* Spacer to push page content below navbar */}
      <div className="h-24"></div>
    </>
  );
}

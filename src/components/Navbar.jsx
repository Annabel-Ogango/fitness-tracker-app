import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
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
        {/* Logo centered */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
        >
          <img
            src="/logo.png"
            alt="Fitness Tracker Logo"
            className="w-8 h-8 object-contain"
          />
          {/* <span className="font-bold tracking-wide text-gray-700">FitTrack</span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly items-center w-full max-w-md mx-auto font-medium text-sm md:text-base">
          <Link to="/" className="hover:text-[#FF6B6B] transition-colors">
            Dashboard
          </Link>
          <Link to="/exercises" className="hover:text-[#FF6B6B] transition-colors">
            Exercises
          </Link>
          <Link to="/history" className="hover:text-[#FF6B6B] transition-colors">
            History
          </Link>
          <Link to="/profile" className="hover:text-[#FF6B6B] transition-colors">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 ml-auto"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`fixed top-16 right-0 w-2/3 sm:w-1/2 bg-white text-gray-800 shadow-md rounded-l-lg transition-all duration-300 ease-in-out ${
          open
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        } md:hidden z-40`}
      >
        <div className="flex flex-col space-y-3 px-6 py-4">
          <Link
            to="/"
            className="hover:text-[#FF6B6B]"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/exercises"
            className="hover:text-[#FF6B6B]"
            onClick={() => setOpen(false)}
          >
            Exercises
          </Link>
          <Link
            to="/history"
            className="hover:text-[#FF6B6B]"
            onClick={() => setOpen(false)}
          >
            History
          </Link>
          <Link
            to="/profile"
            className="hover:text-[#FF6B6B]"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Spacer to push page content below navbar */}
      <div className="h-20"></div>
    </>
  );
}

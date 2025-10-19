import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#F1F3F5] shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left side: Logo and app name */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="App logo" className="h-8 w-8 object-contain" />
        <h1 className="text-xl font-bold text-[#0D47A1]">FitTrack</h1>
      </div>

      {/* Right side: Nav links */}
      <div className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#0D47A1] font-semibold border-b-2 border-[#0D47A1]"
              : "text-gray-700 hover:text-[#0D47A1] transition"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/exercises"
          className={({ isActive }) =>
            isActive
              ? "text-[#0D47A1] font-semibold border-b-2 border-[#0D47A1]"
              : "text-gray-700 hover:text-[#0D47A1] transition"
          }
        >
          Exercises
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive
              ? "text-[#0D47A1] font-semibold border-b-2 border-[#0D47A1]"
              : "text-gray-700 hover:text-[#0D47A1] transition"
          }
        >
          History
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-[#0D47A1] font-semibold border-b-2 border-[#0D47A1]"
              : "text-gray-700 hover:text-[#0D47A1] transition"
          }
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

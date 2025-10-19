import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/exercises", label: "Exercises" },
    { to: "/history", label: "History" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fit Track Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">Fit Track</h1>
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-blue-400 ${
                location.pathname === link.to ? "text-blue-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

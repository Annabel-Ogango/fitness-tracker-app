import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#2D3436] text-white py-4 mt-10">
      <div className="text-center text-sm">
        © {year} <span className="text-[#FFD93D]">Fit Track</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="left flex items-center">
        <div id="logo" className="flex items-center gap-1">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl font-semibold">uifry</h1>
          <sup className="font-bold text-[0.4rem]">TM</sup>
        </div>
        <div className="hidden lg:block">
          {["Home", "About Us", "Pricing", "Features"].map((item, index) => (
            <a
              href="#"
              key={index}
              className={`ml-8 text-[1.25rem] ${
                index === 0 ? "text-[#ff5555] font-semibold" : "font-medium"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="right">
        <button className="px-10 py-4 bg-black text-white text-[1.25rem] rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

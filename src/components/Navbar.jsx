import React from "react";
import logo from "../assets/logo.png";
import { useMode } from "../context/ModeContext";
const Navbar = () => {
  const { mode, setMode } = useMode();
  console.log(mode);
  return (
    <nav className="flex items-center justify-between">
      <div className="left flex items-center">
        <div id="logo" className="flex items-center gap-1">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl font-semibold">uifry</h1>
          <sup className="font-bold text-[0.4rem]">TM</sup>
        </div>
        <div className="hidden lg:block z-20">
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
      <div className="right flex items-center z-20">
        <div
          className={`w-[80px] h-[40px] rounded-full ${
            mode ? "bg-white" : "bg-black"
          } relative`}
        >
          <div
            className={`h-[40px] w-[35px] rounded-full  border-[1px] absolute z-20 ${
              mode
                ? "bg-black border-white right-0"
                : "bg-white border-black left-0"
            }`}
            onClick={() => {
              setMode((prev) => !prev);
            }}
          ></div>
        </div>
        <button
          className={`px-10 py-4  text-[1.25rem] rounded-md ml-4 z-20 ${
            mode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

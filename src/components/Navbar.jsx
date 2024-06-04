import React from "react";
import logo from "../assets/logo.png";
import { useMode } from "../context/ModeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
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
              className={`ml-8 text-[1.25rem] hover:text-[#ff5555] ${
                index === 0 ? "text-[#ff5555] font-semibold" : "font-medium"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="right flex items-center z-20">
        <div className="flex items-center gap-2">
          <CiLight style={{ fontSize: "1.5rem" }} />
          <div
            className={`w-[50px] h-[30px] md:w-[80px] md:h-[40px] rounded-full cursor-pointer ${
              mode ? "bg-white" : "bg-black"
            } relative`}
            onClick={() => {
              setMode((prev) => !prev);
            }}
          >
            <div
              className={`h-[30px] w-[28px] md:h-[40px] md:w-[35px] rounded-full  border-[1px] absolute z-20 ${
                mode
                  ? "bg-black border-white right-0"
                  : "bg-white border-black left-0"
              }`}
            ></div>
          </div>
          <MdDarkMode style={{ fontSize: "1.5rem" }} />
        </div>
        <button
          className={`px-4 py-2 md:px-10 md:py-4  md:text-[1.25rem] rounded-md ml-4 z-20 ${
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

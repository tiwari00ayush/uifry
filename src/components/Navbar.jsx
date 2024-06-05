import React from "react";
import logo from "../assets/logo.png";
import { useMode } from "../context/ModeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavBarData } from "../data";
const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#logo, .navlinks a, .darkmodebtn, .download-btn", {
      y: -40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
    });
  });
  const { mode, setMode } = useMode();
  return (
    <nav className="flex items-center justify-between">
      <div className="left flex items-center">
        <div id="logo" className="flex items-center gap-1">
          <img src={NavBarData.icon} alt="logo" />
          <h1 className="text-3xl font-semibold">{NavBarData.logo}</h1>
          <sup className="font-bold text-[0.4rem]">
            {NavBarData.superscript}
          </sup>
        </div>
        <div className="hidden lg:block z-20 navlinks">
          {NavBarData.navlinks.map((item, index) => (
            <a
              href="#"
              key={index}
              className={`ml-8 text-[1.25rem] hover:text-[#ff5555]  inline-block ${
                index === 0 ? "text-[#ff5555] font-semibold" : "font-medium"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="right flex items-center z-20">
        <div className="flex items-center gap-2 darkmodebtn">
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
          className={`download-btn px-4 py-2 md:px-10 md:py-4  md:text-[1.25rem] rounded-md ml-4 z-20 ${
            mode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {NavBarData.ctaBtn}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

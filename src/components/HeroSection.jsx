import React, { useRef } from "react";
import Ring from "./Ring";
import GradientBg from "./GradientBg";

import { HiArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import hightlights from "../assets/highlights.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import star from "../assets/star.png";
import star2 from "../assets/Star2.png";
import { useMode } from "../context/ModeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeroData } from "../data";
const HeroSection = () => {
  const { mode } = useMode();
  const watchRef = useRef();
  console.log(watchRef);
  console.log();
  useGSAP(() => {
    gsap.from(
      ".left .content h1,.left .content div .get,.left .content p,.highlights",
      {
        x: -100,
        opacity: 0,
        delay: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
    if (watchRef.current) {
      gsap.from(watchRef.current, {
        x: -100,
        opacity: 0,
        delay: 2,
        duration: 1,
      });
    }
    gsap.from(".right div img, .right .ring-img div div", {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".gradient", {
      opacity: 0,
      delay: 1,
      duration: 1,
    });
  });
  return (
    <div className="min-h-screen h-full flex flex-wrap">
      <div className="left flex-1 flex flex-col relative">
        <div className="gradient absolute -top-[5rem] left-[25rem] -translate-x-1/2 ">
          <GradientBg width={500} height={500} />
        </div>
        <div className="content flex-[2] flex items-start justify-center flex-col mt-20 z-10">
          <h1 className="text-6xl font-bold">{HeroData.title[0]}</h1>
          <h1 className="text-6xl font-bold">{HeroData.title[1]}</h1>
          <p className="text-[#7f7e79] text-[1.2rem] my-6">
            {HeroData.description}
          </p>
          <div className="buttons flex items-center gap-2">
            <button
              className={`get px-6 py-4 ${
                mode ? "bg-white text-black" : "bg-black text-white"
              } text-[1.25rem] rounded-md flex items-center gap-2`}
            >
              {HeroData.ctaBtn[0]} <HiArrowLongRight />
            </button>
            <button
              ref={watchRef}
              className={` watch px-6 py-4  text-[1.25rem] rounded-md flex items-center gap-2 ${
                mode
                  ? " hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              <IoPlayCircleOutline /> {HeroData.ctaBtn[1]}
            </button>
          </div>
        </div>
        <div className="highlights flex-[1] relative">
          <img
            src={mode ? star2 : star}
            alt="star"
            className="absolute top-5 left-[10rem] scale-75 rotate-45"
          />
          <img
            src={hightlights}
            alt=""
            className="h-full object-contain highlights"
          />
        </div>
      </div>
      <div className="right flex-1  relative ">
        <div className="h-[800px] w-full min-w-[450px] ">
          <img
            src={hero1}
            alt=""
            className="absolute left-0 top-0 z-[4] h-[700px] object-contain"
          />
          <img
            src={hero2}
            alt=""
            className="absolute left-24 top-16 z-[3] h-[700px] object-contain"
          />
          <img
            src={hero3}
            alt=""
            className="absolute left-48 top-36 z-[2] h-[700px] object-contain"
          />
          <div className="absolute left-10 z-[1] ring-img">
            <Ring />
          </div>
          <div className="gradient absolute top-[20rem] left-[23rem] -translate-x-1/2">
            <GradientBg width={500} height={500} scale={-1} />
          </div>
          <img
            src={mode ? star2 : star}
            alt="star"
            className="absolute top-[38rem] left-[5rem]  z-10 scale-75"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

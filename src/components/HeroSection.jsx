import React from "react";
import Ring from "./Ring";
import GradientBg from "./GradientBg";

import { HiArrowLongRight } from "react-icons/hi2";
import { IoPlayCircleOutline } from "react-icons/io5";
import hightlights from "../assets/highlights.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import star from "../assets/star.png";
const HeroSection = () => {
  return (
    <div className="min-h-screen h-full flex flex-wrap">
      <div className="left flex-1 flex flex-col relative">
        <div className="absolute -top-[5rem] left-[25rem] -translate-x-1/2 -z-10">
          <GradientBg width={500} height={500} scale={0.85} />
        </div>
        <div className="content flex-[2] flex items-start justify-center flex-col mt-20 ">
          <h1 className="text-6xl font-bold">Make The Best</h1>
          <h1 className="text-6xl font-bold">Financial Decisions</h1>
          <p className="text-[#7f7e79] text-[1.2rem] my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ratione laborum ullam minima eveniet doloremque a vero neque totam.
          </p>
          <div className="buttons flex items-center gap-2">
            <button className="px-6 py-4 bg-black text-white text-[1.25rem] rounded-md flex items-center gap-2">
              Get Started <HiArrowLongRight />
            </button>
            <button className="px-6 py-4  text-[1.25rem] rounded-md flex items-center gap-2 hover:bg-black hover:text-white ease-in-out duration-500">
              <IoPlayCircleOutline /> Watch Video
            </button>
          </div>
        </div>
        <div className="highlights flex-[1] relative">
          <img
            src={star}
            alt="star"
            className="absolute top-5 left-[10rem] scale-75 rotate-45"
          />
          <img src={hightlights} alt="" className="h-full object-contain " />
        </div>
      </div>
      <div className="right flex-1  relative ">
        <div className="h-[800px] w-full min-w-[450px] ">
          <img
            src={hero1}
            alt=""
            className="absolute left-0 top-0 z-[3] h-[700px] object-contain"
          />
          <img
            src={hero2}
            alt=""
            className="absolute left-24 top-16 z-[2] h-[700px] object-contain"
          />
          <img
            src={hero3}
            alt=""
            className="absolute left-48 top-36 z-[1] h-[700px] object-contain"
          />
          <div className="absolute left-10 -z-8">
            <Ring />
          </div>
          <div className="absolute top-[20rem] left-[23rem] -translate-x-1/2 -z-10">
            <GradientBg width={500} height={500} scale={-1} />
          </div>
          <img
            src={star}
            alt="star"
            className="absolute top-[38rem] left-[5rem]  z-10 scale-75"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
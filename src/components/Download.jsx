import React from "react";
import { IoLogoApple } from "react-icons/io5";
import GradientBg from "./GradientBg";
import Ring from "./Ring";
import download from "../assets/download.png";
import star from "../assets/star.png";
import star2 from "../assets/Star2.png";
const Download = () => {
  return (
    <div className="w-full h-[500px] bg-black  text-white relative my-20 rounded-lg">
      <div className=" -z-20 -top-40 -left-40 absolute">
        <GradientBg />
      </div>

      <img
        src={star}
        alt="star"
        className="absolute -left-20 top-40 -translate-x-1/2 rotate-45 scale-75"
      />
      <img
        src={star}
        alt="star"
        className="absolute -right-28 -top-20 -translate-x-1/2 scale-75"
      />
      <div className="flex flex-col items-start justify-center h-full w-full px-10 py-10 relative overflow-hidden rounded-lg">
        <img
          src={star2}
          alt="star"
          className="absolute left-1/2 bottom-[90px] -translate-x-1/2 rotate-45"
        />
        <img src={star2} alt="star" className="absolute right-[30%] top-10 " />
        <div className="absolute -left-[300px] -bottom-[500px]">
          <Ring color={"white"} />
        </div>
        <div className="absolute right-[300px] -top-[200px]">
          <Ring color={"white"} />
        </div>

        <h1 className="text-5xl  font-bold">Ready to get started?</h1>
        <p className="my-4 text-[1.2rem] max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo beatae
          repellendus laboriosam.
        </p>
        <button className="flex px-4 py-6 bg-white text-black items-center gap-2 rounded-lg text-[1.2rem] font-medium">
          Download App <IoLogoApple style={{ fontSize: "1.6rem" }} />
        </button>
        <img
          src={download}
          alt="download"
          className="absolute top-0 bottom-0 right-0 z-20 hidden xl:block "
        />
        <div
          style={{ filter: "blur(350px)" }}
          className="absolute -right-[100px] top-[100px] z-10 hidden xl:block"
        >
          <GradientBg scale={0.4} />
        </div>
      </div>
    </div>
  );
};

export default Download;

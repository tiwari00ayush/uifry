import React from "react";
import feature from "../assets/feature.png";
import Ring from "./Ring";
import GradientBg from "./GradientBg";
const Collection = ({ image }) => {
  return (
    <div className="flex-1  items-center justify-center h-full w-full flex">
      <div className="h-[800px] w-[600px] relative flex justify-center items-center">
        <img
          src={image}
          alt="feature"
          className=" min-h-[600px] min-w-[400px] object-contain"
        />
        <div className="h-full w-full flex items-center justify-center absolute -z-20">
          <GradientBg />
        </div>
        <div className="h-full w-full absolute -z-10 -top-[20px] -left-[100px] ">
          <Ring />
        </div>
      </div>
    </div>
  );
};

export default Collection;

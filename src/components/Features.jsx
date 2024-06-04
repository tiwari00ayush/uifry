import React from "react";

import star1 from "../assets/star-05.png";
import cube1 from "../assets/cube-02.png";
import cube2 from "../assets/cube-04.png";
import Collection from "./Collection";
import feature from "../assets/feature.png";
import star from "../assets/star.png";
import star2 from "../assets/Star2.png";
import GradientBg from "./GradientBg";
import { useMode } from "../context/ModeContext";
const Features = () => {
  const { mode } = useMode();
  return (
    <div className=" min-h-[60vh] flex items-center flex-wrap-reverse relative">
      <img
        src={mode ? star2 : star}
        alt="star"
        className=" scale-75 absolute top-0 -right-1 rotate-45 md:-left-10"
      />
      <div className=" absolute top-20 -right-[350px] md:-right-[450px]">
        <GradientBg />
      </div>
      <div className="z-[2]">
        <Collection image={feature} />
      </div>
      <div className="flex-1 h-full  min-w-[300px] z-10">
        <h4 className=" uppercase text-red-500 mt-5">Features</h4>
        <h2 className="text-4xl font-bold mt-2 mb-4">Uifry Premium</h2>
        {[
          {
            icon: <img src={star1} />,
            title: "budgeting intervals",
            description:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
          {
            icon: <img src={cube1} />,
            title: "budgeting intervals",
            description:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
          {
            icon: <img src={cube2} />,
            title: "budgeting intervals",
            description:
              "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
          },
        ].map((feature, index) => (
          <div key={index} className="my-5">
            <h5 className="my-2 font-semibold text-[1.2rem] flex items-center gap-2">
              {feature.icon}
              {feature.title}
            </h5>
            <p className="text-[#7f7e79]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

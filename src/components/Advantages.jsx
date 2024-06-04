import React from "react";
import Collection from "./Collection";
import advantage1 from "../assets/advantage1.png";
import bell from "../assets/bell.png";
import star from "../assets/star.png";
import star2 from "../assets/Star2.png";

import { useMode } from "../context/ModeContext";
const Advantages = ({ advantage, reverse = 0 }) => {
  const { mode } = useMode();
  return (
    <div
      className={` min-h-[80vh]  py-10 flex relative ${
        reverse && "flex-row-reverse"
      } items-center flex-wrap-reverse `}
    >
      {!reverse ? (
        <img
          src={mode ? star2 : star}
          alt="star"
          className=" scale-50 absolute top-0 left-1/2 rotate-45"
        />
      ) : (
        <img
          src={mode ? star2 : star}
          alt="star"
          className=" scale-75 absolute top-0 -right-0 "
        />
      )}

      <div className="z-[2]">
        <Collection image={advantage1} reverse={1} />
      </div>
      <div className="flex-1 h-full  min-w-[300px]">
        {!reverse ? (
          ""
        ) : (
          <div>
            <h4 className=" uppercase text-red-500 mt-5">Advantages</h4>
            <h2 className="text-4xl font-bold mt-2 mb-4">Why Choose Uifry?</h2>
          </div>
        )}
        {[
          {
            icon: <img src={bell} />,
            title: advantage,
            description:
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
          },
        ].map((feature, index) => (
          <div key={index} className="my-5">
            <h5 className="my-2 font-semibold text-[1.6rem] flex items-center gap-2">
              {feature.icon}
              {feature.title}
            </h5>
            <p className="text-[#7f7e79] text-[1.25rem]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

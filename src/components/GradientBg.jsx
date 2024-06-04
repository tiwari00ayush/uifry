import React from "react";
import overlay from "../assets/overlay.jpeg";
const GradientBg = ({ width = 500, height = 500, scale = 1 }) => {
  return (
    <div
      className=" bg-white overflow-hidden "
      style={{
        width: `${width}px`,
        height: `${height}px`,
        scale: `${scale}`,
      }}
    >
      <div className="relative w-full h-full top-0 left-0">
        <div
          className="absolute top-[150px] left-[60px] bg-[#ffed93] rounded-full"
          style={{
            filter: "blur(351.3px)",
            width: `${(width * 2) / 3}px`,
            height: `${height / 2}px`,
            top: `${height / 3}px`,
            left: `${width / 8.33}px`,
          }}
        ></div>
        <div
          className="absolute w-[300px] h-[201px] top-[80px] left-[100px] bg-[#ff615e] rounded-full"
          style={{
            filter: "blur(364.9px)",
            width: `${width / 1.667}px`,
            height: `${height / 2.5}px`,
            top: `${height / 6.25}px`,
            left: `${width / 5}px`,
          }}
        ></div>
        {/* <div className="absolute w-[1802px] h-[1477px] top-0 left-0 shadow-lg"></div> */}
        <img
          className="absolute w-full h-full mix-blend-overlay"
          src={"https://momentsingraphics.de/Media/BlueNoise/WhiteNoiseFFT.png"}
          alt="rectangle"
        />
      </div>
    </div>
  );
};

export default GradientBg;

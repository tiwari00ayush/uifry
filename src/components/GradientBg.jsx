import React from "react";
import overlay from "../assets/overlay.jpeg";
import { useMode } from "../context/ModeContext";

const GradientBg = ({ width = 500, height = 500, scale = 1 }) => {
  const { mode } = useMode();
  return (
    <div
      className={`${mode ? "bg-black" : "bg-white"} overflow-hidden`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${scale})`,
        filter: mode && "blur(35px)",
      }}
    >
      <div className="relative w-full h-full top-0 left-0">
        <div
          className="absolute bg-[#ffed93] rounded-full"
          style={{
            filter: "blur(35px)",
            width: `${(width * 2) / 3}px`,
            height: `${height / 2}px`,
            top: `${height / 3}px`,
            left: `${width / 8.33}px`,
          }}
        ></div>
        <div
          className="absolute bg-[#ff615e] rounded-full"
          style={{
            filter: "blur(35px)",
            width: `${width / 1.667}px`,
            height: `${height / 2.5}px`,
            top: `${height / 6.25}px`,
            left: `${width / 5}px`,
          }}
        ></div>
        <img
          className={`absolute w-full h-full mix-blend-overlay `}
          src={"https://momentsingraphics.de/Media/BlueNoise/WhiteNoiseFFT.png"}
          alt="rectangle"
        />
      </div>
    </div>
  );
};

export default GradientBg;

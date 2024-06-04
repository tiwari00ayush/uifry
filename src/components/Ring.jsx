import React from "react";

const Ring = ({ color = "black" }) => {
  return (
    <div class="overlap-group-5 relative h-[760px]">
      <div
        class={`ellipse-20 absolute w-[380px] h-[547px] top-[118px] left-[138px] border-[1px] border-solid border-${color} -rotate-45 `}
        style={{ borderRadius: "190px/273.5px" }}
      ></div>
      <div
        class={`ellipse-21 absolute w-[380px] h-[547px] top-[86px] left-[170px] border-[1px] border-solid border-${color} -rotate-45 `}
        style={{ borderRadius: "190px/273.5px" }}
      ></div>
      <div
        class={`ellipse-21 absolute w-[380px] h-[547px] top-[54px] left-[202px] border-[1px] border-solid border-${color} -rotate-45 `}
        style={{ borderRadius: "190px/273.5px" }}
      ></div>
    </div>
  );
};

export default Ring;

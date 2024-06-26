import React, { useRef } from "react";
import star from "../assets/star.png";
import star2 from "../assets/Star2.png";
import { useMode } from "../context/ModeContext";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
const Faq = () => {
  const { mode } = useMode();
  const gridRef = useRef();
  useGSAP(() => {
    gsap.from(`.faq div div `, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faq",
        scroller: "body",
        start: "top 80%",
        end: "top 0%",
        scrub: 2,
      },
    });
  }, []);
  return (
    <div className="faq min-h-[100vh] py-4 ">
      <h3 className="text-red-500">FAQ</h3>
      <h1 className="text-5xl font-semibold">Frequently Asked</h1>
      <h1 className="text-5xl font-semibold mb-8 mt-2">Questions</h1>
      <div ref={gridRef} className=" grid  gap-4 grid-cols-2 relative">
        <img
          src={mode ? star2 : star}
          alt="star"
          className=" absolute -top-12 left-1/2"
        />
        {[
          {
            id: 0,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
          {
            id: 1,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
          {
            id: 2,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
          {
            id: 3,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
          {
            id: 4,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
          {
            id: 5,
            title: "the best financial accounting app ever!",
            description:
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
          },
        ].map((faq) => (
          <div
            className={`min-h-[120px] py-6 px-4  rounded-lg   ${
              (faq.id == 0 || faq.id == 3 || faq.id == 4) &&
              "bg-[#ff5555] text-white"
            }`}
            key={faq.id}
          >
            <h1 className="text-3xl capitalize font-semibold mb-2">
              {faq.title}
            </h1>
            <p className="text-[1.1rem] capitalize">{faq.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

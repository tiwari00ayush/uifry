import React from "react";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import { useMode } from "../context/ModeContext";

const Footer = () => {
  const { mode } = useMode();
  const footerData = [
    {
      icon: <img src={logo} alt="logo" />,
      heading: "uifry",
      subHeading: ["Help@FryBix.Com", "+1234 456 678 89"],
      subHeadingIcons: [<img src={mail} />, <img src={phone} />],
    },
    {
      heading: "Links",
      subHeading: ["Home", "About Us", "Bookings", "Blog"],
    },
    {
      heading: "Legals",
      subHeading: ["Terms Of Use", "Privacy Policy", "Cookie Policy"],
    },
    {
      heading: "Product",
      subHeading: ["Take Tour", "Live Chat", "Reviews"],
    },
    {
      heading: "NewsLetter",
      subHeading: [
        "Stay Up To Date",
        <div className="flex items-stretch gap-1 ">
          <input
            type="text"
            className="w-[200px] bg-gray-200 rounded-md text-black outline-none px-1
            
          "
            placeholder="Your email"
          />
          <button
            className={`px-2 py-3  rounded-md ${
              mode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Subscribe
          </button>
        </div>,
      ],
    },
  ];
  return (
    <div
      className={`w-full flex items-start justify-between flex-wrap gap-y-6 py-20 border-b-[1px] ${
        mode ? "border-white" : "border-black"
      }`}
    >
      {footerData.map((data, index) => (
        <div className="flex flex-col w-[200px] my-4 " key={index}>
          <h1 className="font-medium text-3xl flex items-center gap-1">
            {data.icon}
            {data.heading}
          </h1>
          {data.subHeading.map((link, index) => (
            <a key={index} className="mt-6 flex gap-2">
              {data.subHeadingIcons?.[index]} {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;

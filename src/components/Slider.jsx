import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useMode } from "../context/ModeContext";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { mode } = useMode();
  const feedback = [
    {
      id: 1,
      title: "Excellent tool for managing finances!",
      review:
        "I've tried multiple financial accounting apps, but this one stands out. The interface is user-friendly and the features are comprehensive. It has significantly improved the way I handle my personal finances.",
      dp: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      id: 2,
      title: "Great app with minor issues",
      review:
        "The app is really good and helps keep track of expenses efficiently. However, I've encountered a few bugs that need to be fixed. Overall, a solid app for financial management.",
      dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      id: 3,
      title: "Good, but could be better",
      review:
        "This app has a lot of potential. It has many useful features but could use improvements in speed and reliability. I hope the developers continue to update it.",
      dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      id: 4,
      title: "Fantastic app for daily budgeting",
      review:
        "I've been using this app for over a year and it has made budgeting so much easier. The daily reminders and easy categorization of expenses are fantastic. Highly recommended!",
      dp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      id: 5,
      title: "User-friendly and efficient",
      review:
        "The app is very intuitive and efficient. It has all the necessary features to manage both personal and small business finances. Customer support is also very responsive.",
      dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=400",
    },
  ];

  const changeFeedBack = () => {
    const newCurrent = (current + 1) % feedback.length;
    setCurrent(newCurrent);
    console.log(newCurrent);
  };
  return (
    <div className="w-[80%] m-auto mb-10 relative min-h-[300px]">
      <h1 className="text-3xl font-medium mb-10">{feedback[current].title}</h1>
      <p className="text-[1.2rem] text-[#7f7e79] my-6">
        "{feedback[current].review}"
      </p>
      <div className="flex items-center gap-2 ">
        {feedback.map((item, index) => (
          <img
            key={item.id}
            src={item.dp}
            alt=""
            className={`w-[50px] h-[50px] rounded-full object-cover ${
              current === index ? "scale-110" : "opacity-25"
            }`}
          />
        ))}
      </div>
      <FaArrowRight
        style={{
          fontSize: "1.5rem",
          padding: "5px",
          borderRadius: "50%",
          backgroundColor: mode ? "white" : "black",
          color: mode ? "black" : "white",
          marginLeft: "100px",
          cursor: "pointer",
        }}
        className="absolute bottom-0 right-0"
        onClick={() => {
          changeFeedBack();
        }}
      />
    </div>
  );
};

export default Slider;

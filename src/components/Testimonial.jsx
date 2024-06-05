import React from "react";
import Collection from "./Collection";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div>
      <h4 className="text-center uppercase">Testimonial</h4>
      <h1 className="text-center text-5xl font-semibold">What Our Users</h1>
      <h1 className="text-center text-5xl font-semibold">Say About Us?</h1>
      <div className=" min-h-[80vh] h-full flex items-center flex-wrap-reverse relative">
        <div className="z-[2] h-[500px] w-[520px]  relative hidden lg:block">
          <Collection />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
            className="w-[100px] h-[100px] rounded-full absolute top-0 left-0 border-[1px] border-black object-cover"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&s"
            alt=""
            className="w-[120px] h-[120px] rounded-full absolute top-0 right-0 border-[1px] border-black object-cover"
          />
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2200214153/display_1500/stock-photo-confident-rich-eastern-indian-business-man-executive-standing-in-modern-big-city-looking-and-2200214153.jpg"
            alt=""
            className="w-[100px] h-[100px] rounded-full absolute bottom-24 left-10 border-[1px] border-black object-cover"
          />
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt=""
            className="w-[80px] h-[80px] rounded-full absolute bottom-16 right-10 border-[1px] border-black object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717459200&semt=sph"
            alt=""
            className="w-[240px] h-[240px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[160px] border-[1px] border-black object-cover"
          />
        </div>
        <div className="flex-1 h-full  min-w-[300px] z-10 ">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

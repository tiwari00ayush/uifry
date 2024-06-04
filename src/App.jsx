import React from "react";
import {
  Navbar,
  HeroSection,
  Features,
  Advantages,
  Faq,
  Download,
  Footer,
} from "./components";
import { useMode } from "./context/ModeContext";
const App = () => {
  const { mode } = useMode();
  return (
    <div
      className={`font-['Clash_Display'] px-[2%] md:px-[9%] py-10 overflow-hidden ${
        mode ? "bg-black text-white" : ""
      }`}
    >
      <Navbar />
      <HeroSection />
      <Features />
      <Advantages advantage={"Clever Notificcation"} reverse={1} />
      <Advantages advantage={"Fully Customizable"} />
      <Faq />
      <Download />
      <Footer />
      <div className="py-6 flex justify-center items-center mb-6">
        <p>Copyright 2022 uifry.com all rights reserved</p>
      </div>
    </div>
  );
};

export default App;

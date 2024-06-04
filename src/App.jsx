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
const App = () => {
  return (
    <div className="font-['Clash_Display'] px-[2%] md:px-[9%] py-10 overflow-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <Advantages advantage={"Clever Notificcation"} reverse={1} />
      <Advantages advantage={"Fully Customizable"} />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
};

export default App;

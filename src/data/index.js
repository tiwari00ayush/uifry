import star1 from "../assets/star-05.png";
import cube1 from "../assets/cube-02.png";
import cube2 from "../assets/cube-04.png";

export const NavBarData = {
  logo: "uifry",
  superscript: "TM",
  navlinks: ["Home", "About Us", "Pricing", "Features"],
  ctaBtn: "Download",
};
export const HeroData = {
  title: ["Make The Best", "Financial Decisions"],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione laborum ullam minima eveniet doloremque a vero neque totam.",
  ctaBtn: ["Get Started", "Watch Now"],
};
export const FeatureData = {
  tag: "Features",
  heading: "Uifry Premium",
  features: [
    {
      icon: <img src={star1} />,
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: <img src={cube1} />,
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      icon: <img src={cube2} />,
      title: "budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ],
};

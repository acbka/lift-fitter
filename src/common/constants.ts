import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

export type Slide = {
  id: number;
  image: string;
  title?: string;
  caption?: string;
};

type MenuItemType = {
  link: string;
  label: string;
};

export const sliders: Slide[] = [
  {
    id: 1,
    image: slide1,
    title: "Elevating quality to new heights",
    caption: "Feel the expertise with us",
  },
  {
    id: 2,
    image: slide2,
    title: "Precision in every installation",
    caption: "Your project. Our responsibility.",
  },
  {
    id: 3,
    image: slide3,
    title: "Lifting standards above expectations",
    caption: "Reliable. Professional. Proven.",
  },
];

export const menuItems: MenuItemType[] = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/projects", label: "Projects" },
  { link: "/about", label: "About" },
  { link: "/contacts", label: "Contacts" },
];

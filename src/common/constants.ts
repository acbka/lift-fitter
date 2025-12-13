import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import lift1 from "../assets/lift1.jpg";
import lift2 from "../assets/lift2.jpg";
import lift3 from "../assets/lift3.jpg";
import lift4 from "../assets/lift4.jpg";
import lift5 from "../assets/lift5.jpg";

import modernization from "../assets/modernization.jpg";
import montaznik from "../assets/montaznik.jpg";
import technik from "../assets/tehnik.jpg";

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

export type ProjectAndServiceType = {
  id?: number;
  title: string;
  shortDescription: string;
  description?: string;
  image?: string;
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

export const services: ProjectAndServiceType[] = [
  {
    id: 1,
    title: "Sevice One",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: technik,
  },
  {
    id: 2,
    title: "Sevice Two",
    shortDescription: "Brief description",
    description: "Description for your second project.",
    image: montaznik,
  },
  {
    id: 3,
    title: "Sevice Three",
    shortDescription: "Brief description",
    description: "Description for your third project.",
    image: modernization,
  },
];

export const projects: ProjectAndServiceType[] = [
  {
    id: 1,
    title: "Project One",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift1,
  },
  {
    id: 2,
    title: "Project Two",
    shortDescription: "Brief description",
    description: "Description for your second project.",
    image: lift2,
  },
  {
    id: 3,
    title: "Project Three",
    shortDescription: "Brief description",
    description: "Description for your third project.",
    image: lift3,
  },
  {
    id: 4,
    title: "Project Four",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift4,
  },
  {
    id: 5,
    title: "Project Five",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift5,
  },
];

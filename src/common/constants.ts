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
import kleemann from "../assets/kleemann.png";
import schindler from "../assets/schindler.png";
import otis from "../assets/otis.png";
import kone from "../assets/kone.png";
import schmitt from "../assets/schmitt.png";
import tke from "../assets/tke.png";
import mp from "../assets/mp.png";

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
  id?: string;
  title: string;
  shortDescription: string;
  description?: string;
  image?: string;
};

export type PartnerType = {
  name: string;
  logo: string;
  url: string;
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
    id: "service1",
    title: "Service One",
    shortDescription:
      "Pogotowie dźwigowe LiftFitter Dla wygody naszych klientów pracujemy w trybie pogotowia dźwigowego 24/7",
    description: `<p>Pogotowie dźwigowe LiftFitter</p>
    <p>Dla wygody naszych klientów pracujemy w trybie pogotowia dźwigowego 24/7. Doskonale wiemy, że awarie zdarzają się nagle i w najmniej odpowiednim momencie, dlatego reagujemy szybko i skutecznie.</p>
    <p>W przypadku jakichkolwiek problemów technicznych z Państwa windą prosimy o natychmiastowy kontakt. Nasz zespół fachowców możliwie szybko pojawi się na miejscu, zdiagnozuje usterkę i bezpiecznie przywróci urządzenie do pełnej sprawności.</p>`,
    image: technik,
  },
  {
    id: "service2",
    title: "Service Two",
    shortDescription: "Brief description",
    description: "Description for your second service.",
    image: montaznik,
  },
  {
    id: "service3",
    title: "Service Three",
    shortDescription: "Brief description",
    description: "Description for your third service.",
    image: modernization,
  },
];

export const projects: ProjectAndServiceType[] = [
  {
    id: "project1",
    title: "Project One",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift1,
  },
  {
    id: "project2",
    title: "Project Two",
    shortDescription: "Brief description",
    description: "Description for your second project.",
    image: lift2,
  },
  {
    id: "project3",
    title: "Project Three",
    shortDescription: "Brief description",
    description: "Description for your third project.",
    image: lift3,
  },
  {
    id: "project4",
    title: "Project Four",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift4,
  },
  {
    id: "project5",
    title: "Project Five",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift5,
  },
];

export const partners: PartnerType[] = [
  {
    name: "KLEEMANN",
    logo: kleemann,
    url: "https://kleemannlifts.com/",
  },
  {
    name: "Schindler",
    logo: schindler,
    url: "https://group.schindler.com/",
  },
  {
    name: "Otis",
    logo: otis,
    url: "https://kleemannlifts.com/",
  },
  {
    name: "KONE",
    logo: kone,
    url: "https://www.kone.com/",
  },
  {
    name: "Schmitt + Sohn Elevators",
    logo: schmitt,
    url: "https://www.schmitt-elevators.com/",
  },
  {
    name: "TKE",
    logo: tke,
    url: "https://www.tkelevator.com/",
  },
  {
    name: "MP",
    logo: mp,
    url: "https://www.mplifts.com/",
  },
];

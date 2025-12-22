import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
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
  titleKey?: string;
  captionKey?: string;
};

type MenuItemType = {
  link: string;
  labelKey: string;
};

export type ServiceType = {
  id: string;
  titleKey: string;
  shortDescriptionKey: string;
  descriptionKey: string;
  image: string;
};

export type ProjectAndServiceType = {
  id?: string;
  title: string;
  shortDescription: string;
  description?: {
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
  };
  image?: string;
};

export type PartnerType = {
  name: string;
  logo: string;
  url: string;
};

export type LanguageType = {
  code: string;
  label: string;
};

export const LANGUAGES: LanguageType[] = [
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "de", label: "DE" },
];

export const sliders: Slide[] = [
  {
    id: 1,
    image: slide1,
    titleKey: "slider:slide1.title",
    captionKey: "slider:slide1.caption",
  },
  {
    id: 2,
    image: slide2,
    titleKey: "slider:slide2.title",
    captionKey: "slider:slide2.caption",
  },
  {
    id: 3,
    image: slide3,
    titleKey: "slider:slide3.title",
    captionKey: "slider:slide3.caption",
  },
];

export const menuItems: MenuItemType[] = [
  { link: "/", labelKey: "nav:home" },
  { link: "/services", labelKey: "nav:services" },
  { link: "/projects", labelKey: "nav:projects" },
  { link: "/about", labelKey: "nav:about" },
  { link: "/contacts", labelKey: "nav:contacts" },
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
    name: "Schmitt + Sohn",
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

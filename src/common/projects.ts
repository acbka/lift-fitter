import haren from "../assets/haren.jpg";
import haren1 from "../assets/haren1.jpg";
import haren2 from "../assets/haren2.jpg";
import haren3 from "../assets/haren3.jpg";
import haren4 from "../assets/haren4.jpg";
import kirchen from "../assets/kirchen.jpg";
import kirchen1 from "../assets/kirchen1.jpg";
import kirchen2 from "../assets/kirchen2.jpg";
import kirchen3 from "../assets/kirchen3.jpg";
import kirchen4 from "../assets/kirchen4.jpg";
import kirchen5 from "../assets/kirchen5.jpg";
import kirchen6 from "../assets/kirchen6.jpg";
import schindler from "../assets/schindler.jpg";
import schindler1 from "../assets/schindler1.jpg";
import schindler2 from "../assets/schindler2.jpg";
import wilhelmsdorf from "../assets/wilhelmsdorf.jpg";
import wilhelmsdorf1 from "../assets/wilhelmsdorf1.jpg";
import wilhelmsdorf2 from "../assets/wilhelmsdorf2.jpg";
import wilhelmsdorf3 from "../assets/wilhelmsdorf3.jpg";
import wilhelmsdorf4 from "../assets/wilhelmsdorf4.jpg";
import zeewolde from "../assets/zeewolde.jpg";
import zeewolde1 from "../assets/zeewolde1.jpg";
import zeewolde2 from "../assets/zeewolde2.jpg";
import zeewolde3 from "../assets/zeewolde3.jpg";
import zeewolde4 from "../assets/zeewolde4.jpg";
import zeewolde5 from "../assets/zeewolde5.jpg";
import type { ProjectType } from "./constants";

export const projects: ProjectType[] = [
  {
    id: "szczecin",
    galleryImages: [
      { id: "schindler", image: schindler },
      { id: "schindler1", image: schindler1 },
      { id: "schindler2", image: schindler2 },
    ],
  },
  {
    id: "wilhelmsdorf",
    galleryImages: [
      { id: "wilhelmsdorf", image: wilhelmsdorf },
      { id: "wilhelmsdorf1", image: wilhelmsdorf1 },
      { id: "wilhelmsdorf2", image: wilhelmsdorf2 },
      { id: "wilhelmsdorf3", image: wilhelmsdorf3 },
      { id: "wilhelmsdorf4", image: wilhelmsdorf4 },
    ],
  },
  {
    id: "kirchen",
    galleryImages: [
      { id: "kirchen", image: kirchen },
      { id: "kirchen1", image: kirchen1 },
      { id: "kirchen2", image: kirchen2 },
      { id: "kirchen3", image: kirchen3 },
      { id: "kirchen4", image: kirchen4 },
      { id: "kirchen5", image: kirchen5 },
      { id: "kirchen6", image: kirchen6 },
    ],
  },
  {
    id: "haren",
    galleryImages: [
      { id: "haren", image: haren },
      { id: "haren1", image: haren1 },
      { id: "haren2", image: haren2 },
      { id: "haren3", image: haren3 },
      { id: "haren4", image: haren4 },
    ],
  },
  {
    id: "zeewolde",
    galleryImages: [
      { id: "zeewolde", image: zeewolde },
      { id: "zeewolde1", image: zeewolde1 },
      { id: "zeewolde2", image: zeewolde2 },
      { id: "zeewolde3", image: zeewolde3 },
      { id: "zeewolde4", image: zeewolde4 },
      { id: "zeewolde5", image: zeewolde5 },
    ],
  },
] as const;

export type ProjectId = (typeof projects)[number]["id"];

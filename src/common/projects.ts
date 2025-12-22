import lift1 from "../assets/lift1.jpg";
import lift2 from "../assets/lift2.jpg";
import lift3 from "../assets/lift3.jpg";
import lift4 from "../assets/lift4.jpg";
import lift5 from "../assets/lift5.jpg";

export const projects = [
  {
    id: "szczecin",
    image: lift1,
  },
  {
    id: "wilhelmsdorf",
    image: lift2,
  },
  {
    id: "kirchen",
    image: lift3,
  },
  {
    id: "haren",
    image: lift4,
  },
  {
    id: "zeewolde",
    image: lift5,
  },
] as const;

export type ServiceId = (typeof projects)[number]["id"];

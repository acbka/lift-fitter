import clients from "../assets/home.png";
import experience from "../assets/service-3.png";
import modernization from "../assets/modernization.jpg";
import montaznik from "../assets/montaznik.jpg";
import projects from "../assets/service-1.png";
import technik from "../assets/tehnik.jpg";

export const services = [
  {
    id: "liftEmergency",
    image: technik,
  },
  {
    id: "liftMaintenance",
    image: montaznik,
  },
  {
    id: "modernisationRepair",
    image: modernization,
  },
] as const;

export const statistics = [
  {
    id: "yearsOfExperience",
    icon: experience,
  },
  {
    id: "completedProjects",
    icon: projects,
  },
  {
    id: "satisfiedClients",
    icon: clients,
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];
export type StatisticId = (typeof statistics)[number]["id"];

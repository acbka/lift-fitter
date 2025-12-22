import technik from "../assets/tehnik.jpg";
import montaznik from "../assets/montaznik.jpg";
import modernization from "../assets/modernization.jpg";

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

export type ServiceId = (typeof services)[number]["id"];

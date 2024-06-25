import type { Planet } from "./Planet";

export interface HeroProps {
  information: number;
  setInformation: (index: number) => void;
  currentPlanet: Planet;
}

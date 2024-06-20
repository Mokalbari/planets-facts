import type { Planet } from './Planet'

export interface HeroProps {
  planet: string
  information: string
  setInformation: (string: string) => void
  currentPlanet: Planet
}

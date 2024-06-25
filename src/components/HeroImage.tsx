import "../styles/HeroImage.modules.css";

import type { Planet } from "../types/Planet";

interface HeroImageProps {
  currentPlanet: Planet;
  information: number;
}

const HeroImage = ({ currentPlanet, information }: HeroImageProps) => {
  return (
    <div className="hero__image">
      {information === 2 && (
        <>
          <img
            src={currentPlanet.informations[1].image}
            alt={`${currentPlanet.name} structure`}
            className="hero__image-main"
          />
          <img
            src={currentPlanet.informations[2].image}
            alt={`${currentPlanet.name} geology`}
            className="hero__image-secondary"
          />
        </>
      )}
      {information !== 2 && (
        <img
          src={currentPlanet.informations[information].image}
          alt={currentPlanet.name}
          className="hero__image-main"
        />
      )}
    </div>
  );
};

export default HeroImage;

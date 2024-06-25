import "../styles/MainHeroContainer.modules.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import type { HeroProps } from "../types/HeroProps";

const MainHeroContainer: React.FC<HeroProps> = ({
  information,
  setInformation,
  currentPlanet,
}) => {
  return (
    <main className="container flex-row main">
      <HeroImage currentPlanet={currentPlanet} information={information} />
      <HeroContent
        information={information}
        setInformation={setInformation}
        currentPlanet={currentPlanet}
      />
    </main>
  );
};

export default MainHeroContainer;

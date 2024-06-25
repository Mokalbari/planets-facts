import Navbar from "../components/Navbar";
import MainHeroContainer from "../components/MainHeroContainer";
import Information from "../components/Information";
// import ButtonList from "../components/ButtonList";

import { useState } from "react";

import { planets, type PlanetType } from "../data/data";
import ButtonList from "../components/ButtonList";

const App = () => {
  const [planet, setPlanet] = useState<PlanetType>("Mercury");
  const [information, setInformation] = useState(0);
  const currentPlanet = planets[planet];

  const handlePlanetChange = (planetType: PlanetType) => {
    setPlanet(planetType);
    setInformation(0);
  };

  return (
    <>
      <Navbar setPlanet={handlePlanetChange} />
      <ButtonList
        currentPlanet={currentPlanet}
        information={information}
        setInformation={setInformation}
      />
      {currentPlanet && (
        <>
          <MainHeroContainer
            information={information}
            setInformation={setInformation}
            currentPlanet={currentPlanet}
          />
          <Information currentPlanet={currentPlanet} />
        </>
      )}
    </>
  );
};

export default App;

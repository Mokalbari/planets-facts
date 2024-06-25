import Navbar from "../components/Navbar";
import MainHeroContainer from "../components/MainHeroContainer";
import Information from "../components/Information";
import ButtonList from "../components/ButtonList";

import { useState } from "react";

import { planets, type PlanetType } from "../data/data";

const App = () => {
  const [planet, setPlanet] = useState<PlanetType>("Earth");
  const [information, setInformation] = useState("overview");
  const currentPlanet = planets[planet];

  return (
    <>
      <Navbar setPlanet={setPlanet} />
      <ButtonList
        planet={planet}
        information={information}
        setInformation={setInformation}
      />
      {currentPlanet && (
        <>
          <MainHeroContainer
            planet={planet}
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

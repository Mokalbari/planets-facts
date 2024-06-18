import Navbar from '../components/Navbar'
import MainHeroContainer from '../components/MainHeroContainer'
import Information from '../components/Information'
import { useState } from 'react'
import data from '../data/data.json'
import type { Planet } from '../types/Planet'

const App: React.FC = () => {
  const [planet, setPlanet] = useState<string>('Earth')
  const [information, setInformation] = useState<string>('overview')
  const currentPlanet: Planet | undefined = data.find(
    (element: Planet) => element.name === planet,
  )

  return (
    <>
      <Navbar setPlanet={setPlanet} />
      <MainHeroContainer
        planet={planet}
        information={information}
        setInformation={setInformation}
        currentPlanet={currentPlanet}
      />
      <Information information={information} />
    </>
  )
}

export default App

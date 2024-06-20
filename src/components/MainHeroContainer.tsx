import '../styles/MainHeroContainer.modules.css'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'
import type { HeroProps } from '../types/HeroProps'

const MainHeroContainer: React.FC<HeroProps> = ({
  planet,
  information,
  setInformation,
  currentPlanet,
}) => {
  return (
    <main className="container flex-row main">
      <HeroImage planet={planet} information={information} />
      <HeroContent
        planet={planet}
        information={information}
        setInformation={setInformation}
        currentPlanet={currentPlanet}
      />
    </main>
  )
}

export default MainHeroContainer

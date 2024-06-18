import '../styles/MainHeroContainer.modules.css'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const MainHeroContainer: React.FC = () => {
  return (
    <main className="container flex-row">
      <HeroImage />
      <HeroContent />
    </main>
  )
}

export default MainHeroContainer

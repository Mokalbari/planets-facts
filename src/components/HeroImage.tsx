import '../styles/HeroImage.modules.css'
import earth from '../assets/planet-earth.svg'
import tag from '../assets/geology-earth.png'

const HeroImage: React.FC = () => {
  return (
    <div className="hero__image">
      <img src={earth} alt="Coucou" className="hero__image-main" />
      <img src={tag} alt="coucou 2" className="hero__image-secondary" />
    </div>
  )
}

export default HeroImage

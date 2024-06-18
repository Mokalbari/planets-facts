import '../styles/HeroContent.modules.css'
import sourceLogo from '../assets/icon-source.svg'

const HeroContent: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Earth</h1>
      <p className="hero__content">
        The total surface area of Earth is about 510 million km2. The
        continental crust consists of lower density material such as the igneous
        rocks granite and andesite. Less common is basalt, a denser volcanic
        rock that is the primary constituent of the ocean floors.
      </p>
      <p className="hero__source">
        Source:{' '}
        <a href="https://www.facebook.com/">
          Wikipédia <img src={sourceLogo} alt="COucou" />
        </a>
      </p>
      <div className="flex-column">
        <button type="button" className="hero__button">
          <span className="hero__number-list">01</span>
          Overview
        </button>
        <button type="button" className="hero__button">
          <span className="hero__number-list">02</span>
          Internal Structure
        </button>
        <button type="button" className="hero__button">
          <span className="hero__number-list">03</span>
          Surface Geology
        </button>
      </div>
    </div>
  )
}

export default HeroContent

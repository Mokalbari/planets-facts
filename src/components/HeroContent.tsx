import '../styles/HeroContent.modules.css'
import sourceLogo from '../assets/icon-source.svg'
import type { HeroProps } from '../types/HeroProps'

const HeroContent: React.FC<HeroProps> = ({
  planet,
  information,
  setInformation,
  currentPlanet,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const string: string = (event.target as HTMLButtonElement).innerText
    const array: string[] = string.split(' ')
    setInformation(array.length < 2 ? 'overview' : array[1].toLowerCase())
  }

  // const chooseColore = (planet) => {
  //   switch(planet) {
  //     case "mercury":
  //       ""
  //   }

  // }

  return (
    <div className="hero">
      <h1 className="hero__title">{currentPlanet.name}</h1>
      <p className="hero__content">
        {(currentPlanet as any)[information].content}
      </p>
      <p className="hero__source">
        Source:{' '}
        <a href={(currentPlanet as any)[information].source}>
          Wikipédia <img src={sourceLogo} alt="Lien vers wikipédia" />
        </a>
      </p>
      <div className="flex-column">
        <button type="button" className="hero__button" onClick={handleClick}>
          <span className="hero__number-list">01</span>
          Overview
        </button>
        <button type="button" className="hero__button" onClick={handleClick}>
          <span className="hero__number-list">02</span>
          Internal Structure
        </button>
        <button type="button" className="hero__button" onClick={handleClick}>
          <span className="hero__number-list">03</span>
          Surface Geology
        </button>
      </div>
    </div>
  )
}

export default HeroContent

import '../styles/ButtonList.modules.css'
import type { HeroProps } from '../types/HeroProps'

const ButtonList: React.FC<HeroProps> = ({
  planet,
  information,
  setInformation,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedElement = (event.target as HTMLButtonElement).innerText
    clickedElement === 'SURFACE'
      ? setInformation('geology')
      : setInformation(clickedElement.toLowerCase())
  }

  return (
    <div className="button-list">
      <button
        type="button"
        className={'button-list__button'}
        id={`${information.includes('overview') && `${planet.toLowerCase()}-mobile`}`}
        onClick={handleClick}
      >
        Overview
      </button>
      <button
        type="button"
        className="button-list__button"
        id={`${information.includes('structure') && `${planet.toLowerCase()}-mobile`}`}
        onClick={handleClick}
      >
        Structure
      </button>
      <button
        type="button"
        className="button-list__button"
        id={`${information.includes('geology') && `${planet.toLowerCase()}-mobile`}`}
        onClick={handleClick}
      >
        Surface
      </button>
    </div>
  )
}

export default ButtonList

import '../styles/HeroImage.modules.css'

import geologyEarth from '../assets/geology-earth.png'
import geologyJupiter from '../assets/geology-jupiter.png'
import geologyMars from '../assets/geology-mars.png'
import geologyMercury from '../assets/geology-mercury.png'
import geologyNeptune from '../assets/geology-neptune.png'
import geologySaturn from '../assets/geology-saturn.png'
import geologyUranus from '../assets/geology-uranus.png'
import geologyVenus from '../assets/geology-venus.png'

import intEarth from '../assets/planet-earth-internal.svg'
import intJupiter from '../assets/planet-jupiter-internal.svg'
import intMars from '../assets/planet-mars-internal.svg'
import intVenus from '../assets/planet-venus-internal.svg'
import intMercury from '../assets/planet-mercury-internal.svg'
import intUranus from '../assets/planet-uranus-internal.svg'
import intSaturn from '../assets/planet-saturn-internal.svg'
import intNeptune from '../assets/planet-neptune-internal.svg'

import earth from '../assets/planet-earth.svg'
import mars from '../assets/planet-mars.svg'
import mercury from '../assets/planet-mercury.svg'
import jupiter from '../assets/planet-jupiter.svg'
import venus from '../assets/planet-venus.svg'
import uranus from '../assets/planet-uranus.svg'
import saturn from '../assets/planet-saturn.svg'
import neptune from '../assets/planet-neptune.svg'

// Define types for the different images each planet can have
export type PlanetImages = {
  overview: string
  structure: string
  geology: string
}

// Define a type for all the possible planets and their associated images
export type Images = {
  mercury: PlanetImages
  venus: PlanetImages
  earth: PlanetImages
  mars: PlanetImages
  jupiter: PlanetImages
  saturn: PlanetImages
  uranus: PlanetImages
  neptune: PlanetImages
}

const images: Images = {
  mercury: {
    overview: mercury,
    structure: intMercury,
    geology: geologyMercury,
  },
  venus: {
    overview: venus,
    structure: intVenus,
    geology: geologyVenus,
  },
  earth: {
    overview: earth,
    structure: intEarth,
    geology: geologyEarth,
  },
  mars: {
    overview: mars,
    structure: intMars,
    geology: geologyMars,
  },
  jupiter: {
    overview: jupiter,
    structure: intJupiter,
    geology: geologyJupiter,
  },
  saturn: {
    overview: saturn,
    structure: intSaturn,
    geology: geologySaturn,
  },
  uranus: {
    overview: uranus,
    structure: intUranus,
    geology: geologyUranus,
  },
  neptune: {
    overview: neptune,
    structure: intNeptune,
    geology: geologyNeptune,
  },
}

interface HeroImageProps {
  planet: keyof Images | string
  information: keyof PlanetImages | string
}

const HeroImage: React.FC<HeroImageProps> = ({ planet, information }) => {
  const currentPlanet = planet.toLowerCase() as keyof Images

  return (
    <div className="hero__image">
      {information === 'geology' && (
        <>
          <img
            src={images[currentPlanet].structure}
            alt={`${planet} structure`}
            className="hero__image-main"
          />
          <img
            src={images[currentPlanet].geology}
            alt={`${planet} geology`}
            className="hero__image-secondary"
          />
        </>
      )}
      {information !== 'geology' && (
        <img
          src={images[currentPlanet][information]}
          alt={planet}
          className="hero__image-main"
        />
      )}
    </div>
  )
}

export default HeroImage

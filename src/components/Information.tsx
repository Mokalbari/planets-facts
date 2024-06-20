import '../styles/Information.modules.css'
import type { Planet } from '../types/Planet'

interface Information {
  currentPlanet: Planet
}

const Information: React.FC<Information> = ({ currentPlanet }) => {
  return (
    <section className="container information flex-row">
      <div className="information__card">
        <h3>Rotation Time</h3>
        <h2>{currentPlanet.rotation}</h2>
      </div>
      <div className="information__card">
        <h3>Revolution Time</h3>
        <h2>{currentPlanet.revolution}</h2>
      </div>
      <div className="information__card">
        <h3>Radius</h3>
        <h2>{currentPlanet.radius}</h2>
      </div>
      <div className="information__card">
        <h3>Average Temp.</h3>
        <h2>{currentPlanet.temperature}</h2>
      </div>
    </section>
  )
}

export default Information

import '../styles/Navbar.modules.css'
import data from '../data/data.json'

interface Navbar {
  setPlanet: (string: string) => void
}

const Navbar: React.FC<Navbar> = ({ setPlanet }) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const value: string = (event.target as HTMLElement).innerText
    const formatedValue: string = value.charAt(0) + value.slice(1).toLowerCase()
    setPlanet(formatedValue)
  }

  const handleKey = () => console.log('Key not yet supported')

  return (
    <header className="header flex-row">
      <h2>The planets</h2>
      <nav>
        <menu
          className="header__menu flex-row"
          onClick={handleClick}
          onKeyUp={handleKey}
        >
          {data.map(planet => {
            return (
              <li key={planet.name}>
                <h4>{planet.name}</h4>
              </li>
            )
          })}
        </menu>
      </nav>
    </header>
  )
}

export default Navbar

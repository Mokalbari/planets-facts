import '../styles/Navbar.modules.css'

const Navbar: React.FC = () => (
  <header className="header flex-row">
    <h2>The planets</h2>
    <nav>
      <menu className="header__menu flex-row">
        <li>
          <h4>Mercury</h4>
        </li>
        <li>
          <h4>Venus</h4>
        </li>
        <li>
          <h4>Earth</h4>
        </li>
        <li>
          <h4>Mars</h4>
        </li>
        <li>
          <h4>Jupiter</h4>
        </li>
        <li>
          <h4>Saturn</h4>
        </li>
        <li>
          <h4>Uranus</h4>
        </li>
        <li>
          <h4>Neptune</h4>
        </li>
      </menu>
    </nav>
  </header>
)

export default Navbar

import "../styles/Navbar.modules.css";

import burger from "../assets/icon-hamburger.svg";
// import chevron from "../assets/icon-chevron.svg";
import { useState } from "react";
import { planets, type PlanetType } from "../data/data";

interface Navbar {
  setPlanet: (string: PlanetType) => void;
}

const Navbar: React.FC<Navbar> = ({ setPlanet }) => {
  const [isMenuOpen, setIsMenuopen] = useState<boolean>(false);

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   const value: string = (event.target as HTMLElement).innerText;
  //   const formatedValue: string =
  //     value.charAt(0) + value.slice(1).toLowerCase();

  //   if (formatedValue.length <= 7 && formatedValue.length > 0) {
  //     setPlanet(formatedValue);
  //   }
  // };

  const handleClick = (planetType: PlanetType) => () => {
    setPlanet(planetType);
  };

  const toggleMenu = () => setIsMenuopen(!isMenuOpen);
  // const handleKey = () => console.log("Key not yet supported");

  return (
    <header className="header flex-row">
      <h2 className="desktop-tablet-only">The Planets</h2>
      <div className="header__header--mobile">
        <h2>The planets</h2>
        {/* This is the menu mobile-only */}
        <img
          src={burger}
          alt="Icon du menu burger"
          className="mobile-only"
          onTouchEnd={toggleMenu}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="burger__menu-container flex-column">
          <div className="burger__header flex-row">
            <h2>The planets</h2>
            <img
              src={burger}
              alt="Icon du menu burger"
              className="mobile-only"
              onTouchEnd={toggleMenu}
              onClick={toggleMenu}
              onKeyDown={toggleMenu}
            />
          </div>
          {/* <nav>
            <menu onClick={handleClick} onKeyUp={handleKey}>
              {Object.values(planets).map((planet) => {
                return (
                  <li key={planet.name}>
                    <div className="burger__planet-list">
                      <div id={planet.name} />
                      <h4>{planet.name}</h4>
                      <img src={chevron} alt="icon chevron" />
                    </div>
                  </li>
                );
              })}
            </menu>
          </nav> */}
        </div>
      )}

      {/* This is the menu displaying on tablet and PC */}
      <nav>
        <menu className="header__menu flex-row">
          {Object.keys(planets).map((planetType) => {
            const key = planetType as PlanetType;
            const planet = planets[key];

            return (
              <li
                key={planet.name}
                onClick={handleClick(key)}
                onKeyUp={() => {}}
              >
                <h4>{planet.name}</h4>
              </li>
            );
          })}
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;

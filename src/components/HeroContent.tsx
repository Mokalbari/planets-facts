import "../styles/HeroContent.modules.css";
import sourceLogo from "../assets/icon-source.svg";
import type { HeroProps } from "../types/HeroProps";

export const titles = ["Overview", "Internal Structure", "Surface Geology"];

const HeroContent: React.FC<HeroProps> = ({
  information,
  setInformation,
  currentPlanet,
}) => {
  const handleClick = (index: number) => () => {
    setInformation(index);
  };

  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">{currentPlanet.name}</h1>
        <p className="hero__content">
          {currentPlanet.informations[information].content}
        </p>
        <p className="hero__source">
          Source:{" "}
          <a href={currentPlanet.informations[information].source}>
            Wikipédia <img src={sourceLogo} alt="Lien vers wikipédia" />
          </a>
        </p>
      </div>
      <div className="hero__button-container flex-column">
        {currentPlanet.informations.map((info, index) => (
          <button
            key={info.content}
            type="button"
            className={`hero__button ${index === information ? "active" : ""}`}
            onClick={handleClick(index)}
          >
            <span className="hero__number-list">0{index + 1}</span>
            {titles[index]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;

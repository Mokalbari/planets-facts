import "../styles/ButtonList.modules.css";
import type { HeroProps } from "../types/HeroProps";
import { titles } from "./HeroContent";

const ButtonList = ({
  currentPlanet,
  information,
  setInformation,
}: HeroProps) => {
  const handleClick = (index: number) => () => {
    setInformation(index);
  };

  return (
    <div className="button-list">
      {currentPlanet.informations.map((info, index) => (
        <button
          key={info.content}
          type="button"
          className="button-list__button"
          onClick={handleClick(index)}
          id={`${
            information === index &&
            `${currentPlanet.name.toLowerCase()}-mobile`
          }`}
        >
          {titles[index]}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;

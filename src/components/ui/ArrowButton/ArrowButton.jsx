import "./ArrowButton.scss";
import arrowLeftIcon from "../../../assets/icons/arrow-button-left-24px-blue.svg";
import arrowRightIcon from "../../../assets/icons/arrow-button-right-24px-blue.svg";

const ArrowButton = ({ arrowTo }) => {
  return (
    <button className="arrowButton">
      <img src={arrowTo === "left" ? arrowLeftIcon : arrowTo === "right" ? arrowRightIcon : ""} />
    </button>
  );
};

export default ArrowButton;

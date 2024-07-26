import "./PopupCloseButton.scss";
import closeIcon from "../../../assets/icons/close-24px-black.svg";

const CloseButton = ({ classProp }) => {
  return (
    <button
      className="closeButton"
      onClick={() => {
        document.querySelector(`.${classProp}`).setAttribute("style", "left: 100vw");
        document.body.style.overflow = "auto";
      }}
    >
      <span>закрити</span>
      <img src={closeIcon} />
    </button>
  );
};

export default CloseButton;

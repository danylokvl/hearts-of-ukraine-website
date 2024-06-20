import { useState } from "react";
import { ReactSVG } from "react-svg";

import "./ChipButton.scss";

const ChipButton = ({ text, iconSrc }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="chipButton"
      onClick={() => setIsPressed(!isPressed)}
      style={isPressed ? { backgroundColor: "#005dbc", color: "white" } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      <ReactSVG
        style={{ width: "24px", height: "24px" }}
        src={iconSrc}
        beforeInjection={(svg) => {
          svg
            .querySelector("path")
            .setAttribute("fill", `${isPressed ? "white" : isHovered ? "#005dbc" : "#303030"}`);
        }}
      />
    </button>
  );
};

export default ChipButton;

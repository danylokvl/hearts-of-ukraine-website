import { useState } from "react";

import "./ChipButton.scss";

const ChipButton = ({ text, img, alt }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className="chipButton"
      onClick={() => setIsPressed(!isPressed)}
      style={{ backgroundColor: isPressed && "#005dbc" }}
    >
      <span>{text}</span>
      <img src={img} alt={alt} />
    </button>
  );
};

export default ChipButton;

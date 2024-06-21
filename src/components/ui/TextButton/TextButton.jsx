import { ReactSVG } from "react-svg";

import "./TextButton.scss";

const TextButton = ({ children, iconSrc }) => {
  return (
    <button className="textButton">
      <span>{children}</span>
      <ReactSVG style={{ width: "24px", height: "24px" }} src={iconSrc} />
    </button>
  );
};

export default TextButton;

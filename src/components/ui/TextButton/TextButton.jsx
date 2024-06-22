import { ReactSVG } from "react-svg";

import "./TextButton.scss";

const TextButton = ({ children, iconSrc, color, style, onClick, additionalStyles }) => {
  return (
    <button className="textButton" style={style} onClick={onClick}>
      <span>{children}</span>
      <ReactSVG
        style={{ width: "24px", height: "24px", ...additionalStyles }}
        src={iconSrc}
        beforeInjection={(svg) => {
          svg.querySelector("path").setAttribute("fill", `${color}`);
        }}
      />
    </button>
  );
};

export default TextButton;

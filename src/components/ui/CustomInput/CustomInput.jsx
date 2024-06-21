import { useRef, useState } from "react";

import "./CustomInput.scss";

const CustomInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const labelRef = useRef(null);

  const inputID = "customInput__input" + Math.floor(Math.random() * 1000);

  return (
    <div className="customInputContainer">
      <label
        ref={labelRef}
        className={"customInput__label"}
        onClick={() => inputValue === "" && labelRef.current.classList.add("smaller")}
        htmlFor={inputID}
      >
        {props.label}
        <span style={{ color: "red", display: props.necessaryLabel ? "inline" : "none" }}>*</span>
      </label>
      <input
        id={inputID}
        type={props.type}
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => inputValue === "" && labelRef.current.classList.remove("smaller")}
      />
    </div>
  );
};

export default CustomInput;

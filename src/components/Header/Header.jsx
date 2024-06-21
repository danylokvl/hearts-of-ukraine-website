import { useState } from "react";

import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import "./Header.scss";
import logo from "../../assets/images/header-logo.jpg";
import languageIcon from "../../assets/icons/language-24px-black.svg";
import burgerMenuIcon from "../../assets/icons/burger-menu-24px-black.svg";
import closeIcon from "../../assets/icons/close-24px-black.svg";
import TextButton from "../ui/TextButton/TextButton";

const Header = () => {
  const [burgerMenuIsOpen, setburgerMenuIsOpen] = useState(false);

  return (
    <header>
      <nav className="header__nav">
        <button
          className="header__burgerMenuButton"
          onClick={() => setburgerMenuIsOpen(!burgerMenuIsOpen)}
        >
          <img src={burgerMenuIsOpen ? closeIcon : burgerMenuIcon} />
        </button>
        <a className="header__logo">
          <img src={logo} />
        </a>
        <ul className="header__linksList">
          <li>
            <a>Про Нас</a>
          </li>
          <li>
            <a>Засновники</a>
          </li>
          <li>
            <a>Новини</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Отримати Допомогу</a>
          </li>
          <li>
            <a>Стати Волонтером</a>
          </li>
        </ul>
        <div className="header__buttonsContainer">
          <PrimaryButton>Внести Кошти</PrimaryButton>
          <TextButton iconSrc={languageIcon}>UKR</TextButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;

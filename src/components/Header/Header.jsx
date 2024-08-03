import { useState } from "react";

import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import "./Header.scss";
import logo from "../../assets/images/header-logo.jpg";
import burgerMenuIcon from "../../assets/icons/burger-menu-24px-black.svg";
import closeIcon from "../../assets/icons/close-24px-black.svg";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const heroSection = document.getElementById("heroSection");

  console.log(heroSection);

  function handleLinkOnClick(id) {
    const elementById = document.getElementById(id);
    elementById.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <MobileNav burgerMenuIsOpen={burgerMenuIsOpen} setBurgerMenuIsOpen={setBurgerMenuIsOpen} />
      <nav className="header__nav">
        <button
          className="header__burgerMenuButton"
          onClick={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
        >
          <img src={burgerMenuIsOpen ? closeIcon : burgerMenuIcon} />
        </button>
        <a className="header__logo" onClick={() => handleLinkOnClick("heroSection")}>
          <img src={logo} />
        </a>
        <ul className="header__linksList">
          <li>
            <a onClick={() => handleLinkOnClick("aboutUsSection")}>Про Нас</a>
          </li>
          <li>
            <a onClick={() => handleLinkOnClick("foundersSection")}>Засновники</a>
          </li>
          <li>
            <a onClick={() => handleLinkOnClick("benefactorsSection")}>Благодійники</a>
          </li>
          <li>
            <a onClick={() => handleLinkOnClick("faqSection")}>FAQ</a>
          </li>
          <li>
            <a
              onClick={() => {
                document.querySelector(".becomeVolunteerPopup").setAttribute("style", "left: 0");
              }}
            >
              Стати Волонтером
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document.querySelector(".needHelpPopup").setAttribute("style", "left: 0");
              }}
            >
              Отримати Допомогу
            </a>
          </li>
        </ul>
        <div className="header__buttonsContainer">
          <PrimaryButton
            onClick={() => {
              document.querySelector(".donatePopup").setAttribute("style", "left: 0");
            }}
          >
            Внести Кошти
          </PrimaryButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;

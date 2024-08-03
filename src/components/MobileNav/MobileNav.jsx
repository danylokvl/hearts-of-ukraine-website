import "./MobileNav.scss";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import TextButton from "../ui/TextButton/TextButton";
import languageIcon from "../../assets/icons/language-24px-black.svg";
import closeIcon from "../../assets/icons/close-24px-black.svg";

const MobileNav = ({ burgerMenuIsOpen, setBurgerMenuIsOpen }) => {
  return (
    <nav className="mobileNav" style={burgerMenuIsOpen ? { left: "0px" } : {}}>
      <TextButton
        iconSrc={closeIcon}
        color="#ffff"
        style={{ marginBottom: "44px" }}
        onClick={() => setBurgerMenuIsOpen(false)}
        additionalStyles={{ paddingTop: "4px" }}
      >
        закрити
      </TextButton>
      <ul className="header__linksList">
        <li>
          <a>Про Нас</a>
        </li>
        <li>
          <a>Засновники</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <div className="header__buttonsContainer">
        <PrimaryButton>Внести Кошти</PrimaryButton>
      </div>
    </nav>
  );
};

export default MobileNav;

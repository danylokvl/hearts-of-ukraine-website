import "./MobileNav.scss";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import TextButton from "../ui/TextButton/TextButton";
import languageIcon from "../../assets/icons/language-24px-black.svg";
import closeIcon from "../../assets/icons/close-24px-black.svg";

const MobileNav = ({ burgerMenuIsOpen, setBurgerMenuIsOpen, handleLinkOnClick }) => {
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
          <a
            onClick={() => {
              setBurgerMenuIsOpen(false);
              handleLinkOnClick("aboutUsSection");
            }}
          >
            Про Нас
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setBurgerMenuIsOpen(false);
              handleLinkOnClick("foundersSection");
            }}
          >
            Засновники
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setBurgerMenuIsOpen(false);
              handleLinkOnClick("benefactorsSection");
            }}
          >
            Благодійники
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setBurgerMenuIsOpen(false);
              handleLinkOnClick("faqSection");
            }}
          >
            FAQ
          </a>
        </li>
      </ul>
      <div className="header__buttonsContainer">
        <PrimaryButton
          onClick={() => {
            setBurgerMenuIsOpen(false);
            document.querySelector(".donatePopup").setAttribute("style", "left: 0");
          }}
        >
          Внести Кошти
        </PrimaryButton>
      </div>
    </nav>
  );
};

export default MobileNav;

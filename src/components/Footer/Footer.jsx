import "./Footer.scss";
import cellIcon from "../../assets/icons/cell-24px-white.svg";
import mailICon from "../../assets/icons/mail-24px-white.svg";
import northEastIcon from "../../assets/icons/northEast-24px-white.svg";
import pdfIcon from "../../assets/icons/pdf-24px-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__textContainer">
          <p className="footer__summary">
            Благодійний Фонд "Серця України" нічим не відрізняється від звичайних українців. Ми, як
            і всі, люди яким довелося змінити свій спосіб життя.
          </p>
          <p className="footer__allRightsReserved">
            20242022 Благодiйна органiзацiя "Благодійний Фонд "Серця України". Всi права захищенi
          </p>
        </div>
        <div className="footer__contactsContaienr">
          <h4>Контакти</h4>
          <ul>
            <li>
              <img src={cellIcon} alt="phone number" />
              <span>+380 67 500 9307</span>
            </li>
            <li>
              <img src={mailICon} alt="email adress" />
              <span>help@hearts.com.ua</span>
            </li>
          </ul>
        </div>
        <div className="footer__linksContaienr">
          <h4>Посилання</h4>
          <ul>
            <li>
              <a>
                <span>Facebook</span>
                <img src={northEastIcon} alt="link to facebook" />
              </a>
            </li>
            <li>
              <a>
                <span>Instagram</span>
                <img src={northEastIcon} alt="link to instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__documentsContaienr">
          <h4>Документи</h4>
          <ul>
            <li>
              <a>
                <img src={pdfIcon} alt="pdf" />
                <span>Установчі Документи</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

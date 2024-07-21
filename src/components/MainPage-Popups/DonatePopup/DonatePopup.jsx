import "./DonatePopup.scss";
import copyIcon from "../../../assets/icons/copy-24px-black.svg";
import PopupCloseButton from "../../ui/PopupCloseButton/PopupCloseButton";

const DonatePopup = () => {
  return (
    <section className="mainPagePopup donatePopup">
      <div className="donatePopup__content">
        <div className="donatePopup__buttonContainer">
          <PopupCloseButton classProp="donatePopup" />
        </div>
        <h2>Внесення коштів</h2>
        <div className="donatePopup__cardsContainer">
          <div className="donatePopup__card">
            <span>₴ UAH</span>
            <ul>
              <li>
                <span className="donatePopup__listItemLeft">Банк</span>
                <span className="donatePopup__listItemRight">АТ КБ "ПРИВАТБАНК"</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">ЄДРПОУ</span>
                <span className="donatePopup__listItemRight">14360570</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">Код банку</span>
                <span className="donatePopup__listItemRight">300711</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">IBAN </span>
                <span className="donatePopup__listItemRight">26000052671794</span>
              </li>
            </ul>
            <button>
              <img src={copyIcon} alt="copy" />
            </button>
          </div>
          <div className="donatePopup__card">
            <span>$ USD</span>
            <ul>
              <li>
                <span className="donatePopup__listItemLeft">Банк</span>
                <span className="donatePopup__listItemRight">АТ КБ "ПРИВАТБАНК"</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">ЄДРПОУ</span>
                <span className="donatePopup__listItemRight">14360570</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">Код банку</span>
                <span className="donatePopup__listItemRight">300711</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">IBAN </span>
                <span className="donatePopup__listItemRight">26003052678664</span>
              </li>
            </ul>
            <button>
              <img src={copyIcon} alt="copy" />
            </button>
          </div>
          <div className="donatePopup__card">
            <span>€ EUR</span>
            <ul>
              <li>
                <span className="donatePopup__listItemLeft">Банк</span>
                <span className="donatePopup__listItemRight">АТ КБ "ПРИВАТБАНК"</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">ЄДРПОУ</span>
                <span className="donatePopup__listItemRight">14360570</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">Код банку</span>
                <span className="donatePopup__listItemRight">300711</span>
              </li>
              <li>
                <span className="donatePopup__listItemLeft">IBAN </span>
                <span className="donatePopup__listItemRight">26002052674034</span>
              </li>
            </ul>
            <button>
              <img src={copyIcon} alt="copy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePopup;

import "./DonatePopup.scss";
import copyIcon from "../../../assets/icons/copy-24px-black.svg";
import PopupCloseButton from "../../ui/PopupCloseButton/PopupCloseButton";
import { useEffect, useState } from "react";

const DonatePopup = () => {
  const UAH_IBAN = "26000052671794";
  const USD_IBAN = "26003052678664";
  const EUR_IBAN = "26002052674034";

  const [ibanCopied, setIbanCopied] = useState(false);
  let errorOccured = false;

  const copyIbanToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIbanCopied(true);
    } catch (err) {
      errorOccured = true;
      ibanCopied && setIbanCopied(false);
    }
  };

  useEffect(() => {
    const messageContainer = document.querySelector(".donatePopup__messageContainer");
    if (ibanCopied) {
      messageContainer.classList.add("positiveMessage");
      setTimeout(() => {
        setIbanCopied(false);
        messageContainer.classList.remove("positiveMessage");
      }, 5000);
    } else if (errorOccured) {
      messageContainer.classList.add("negativeMessage");
      setTimeout(() => {
        messageContainer.classList.remove("negativeMessage");
      }, 5000);
    }
  }, [ibanCopied]);

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
            <div className="donatePopup__copyButtonContainer">
              <button onClick={() => copyIbanToClipboard(UAH_IBAN)}>
                <img src={copyIcon} alt="copy" />
              </button>
            </div>
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
            <div className="donatePopup__copyButtonContainer">
              <button onClick={() => copyIbanToClipboard(USD_IBAN)}>
                <img src={copyIcon} alt="copy" />
              </button>
            </div>
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
            <div className="donatePopup__copyButtonContainer">
              <button onClick={() => copyIbanToClipboard(EUR_IBAN)}>
                <img src={copyIcon} alt="copy" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="donatePopup__messageContainer">
        <span>{ibanCopied ? "IBAN Скопійовано" : "IBAN не скопійовано, спробуйте ще раз"}</span>
      </div>
    </section>
  );
};

export default DonatePopup;

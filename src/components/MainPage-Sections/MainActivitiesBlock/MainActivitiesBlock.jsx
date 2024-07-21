import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import "./MainActivitiesBlock.scss";

import moneyIcon from "../../../assets/icons/money-24px-black.svg";
import handHeartIcon from "../../../assets/icons/heart-hand-24px-black.svg";
import shieldHeartIcon from "../../../assets/icons/shield-heart-24px-black.svg";
import imageDivider from "../../../assets/images/background-image-divider.jpg";

const MainActivitiesBlock = () => {
  const [cardIsHovered, setCardIsHovered] = useState({
    moneyCard: false,
    volunteerCard: false,
    needHelpCard: false,
  });

  return (
    <section className="mainActivitiesBlock">
      <div className="mainActivitiesBlock__content">
        <div className="mainActivitiesBlock__cardsContainer">
          <div
            className="mainActivitiesBlock__card"
            onMouseEnter={() =>
              setCardIsHovered((prevState) => ({ ...prevState, moneyCard: true }))
            }
            onMouseLeave={() =>
              setCardIsHovered((prevState) => ({ ...prevState, moneyCard: false }))
            }
            onClick={() => {
              document.querySelector(".donatePopup").setAttribute("style", "left:0");
            }}
          >
            <div className="textContainer">
              <h3>Підтримайте нас фінансово</h3>
              <p>
                Кожен внесок, великий чи малий, має значення і робить реальний вплив на життя тих,
                хто цього потребує.
              </p>
            </div>
            <button>
              <span>Внести Кошти</span>
              <ReactSVG
                style={{ width: "24px", height: "24px", transform: "translateY(5px)" }}
                src={moneyIcon}
                beforeInjection={(svg) => {
                  svg
                    .querySelector("path")
                    .setAttribute("fill", `${cardIsHovered.moneyCard ? "#005dbc" : "#303030"}`);
                }}
              />
            </button>
          </div>
          <div
            className="mainActivitiesBlock__card"
            onMouseEnter={() =>
              setCardIsHovered((prevState) => ({ ...prevState, volunteerCard: true }))
            }
            onMouseLeave={() =>
              setCardIsHovered((prevState) => ({ ...prevState, volunteerCard: false }))
            }
          >
            <div className="textContainer">
              <h3>Станьте одним з нас</h3>
              <p>
                Ми постачаємо гуманітарну допомогу, щоб врятувати життя українців та допомагаємо
                нашим воїнам захищати Україну.
              </p>
            </div>
            <button>
              <span>Стати Волонтером</span>
              <ReactSVG
                style={{ width: "24px", height: "24px" }}
                src={handHeartIcon}
                beforeInjection={(svg) => {
                  svg
                    .querySelector("path")
                    .setAttribute("fill", `${cardIsHovered.volunteerCard ? "#005dbc" : "#303030"}`);
                }}
              />
            </button>
          </div>
          <div
            className="mainActivitiesBlock__card"
            onMouseEnter={() =>
              setCardIsHovered((prevState) => ({ ...prevState, needHelpCard: true }))
            }
            onMouseLeave={() =>
              setCardIsHovered((prevState) => ({ ...prevState, needHelpCard: false }))
            }
          >
            <div className="textContainer">
              <h3>Ми вас підтримаємо</h3>
              <p>Наші волонтери завжди прийдуть на поміч тим, хто цього потребує</p>
            </div>
            <button>
              <span>Отримати Допомогу</span>
              <ReactSVG
                style={{ width: "24px", height: "24px", transform: "translateY(2px)" }}
                src={shieldHeartIcon}
                beforeInjection={(svg) => {
                  svg
                    .querySelector("path")
                    .setAttribute("fill", `${cardIsHovered.needHelpCard ? "#005dbc" : "#303030"}`);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainActivitiesBlock;

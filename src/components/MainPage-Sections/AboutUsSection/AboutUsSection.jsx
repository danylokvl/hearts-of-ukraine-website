import { useEffect, useState } from "react";
import "./AboutUsSection.scss";
import girlNearTankImage from "../../../assets/images/girl-near-tank.jpg";
import ruinsImage from "../../../assets/images/ruins.jpg";
import strikeImage from "../../../assets/images/strike.jpg";
import damagedTankImage from "../../../assets/images/damaged-tank.jpg";
import damagedTankImage2 from "../../../assets/images/damaged-tank-2.jpg";

const imagesArray = [
  girlNearTankImage,
  ruinsImage,
  strikeImage,
  damagedTankImage,
  damagedTankImage2,
];

const AboutUsSection = () => {
  /* useEffect(() => {
    const imagesContainers = document.querySelectorAll(".aboutUsSection__imagesContainer");
    let translateXAmount = 0;
    const imagesContainerWidth = imagesContainers[0].getBoundingClientRect().width;
    const firstImagesContainerRight = imagesContainers[0].getBoundingClientRect().right;
    const secondImagesContainerRight = imagesContainers[1].getBoundingClientRect().right;

    function MoveImagesHorizontal() {
      imagesContainers[0].style.transform = `translateX(-${translateXAmount}px)`;
      imagesContainers[1].style.transform = `translateX(-${translateXAmount}px)`;
      translateXAmount += 100;

      if (imagesContainers[0].getBoundingClientRect().right <= 0) {
        imagesContainers[0].setAttribute(
          "style",
          "transition: all 0s; transform: translateX(120vw)"
        );
        setTimeout(() => {
          imagesContainers[0].removeAttribute("style");
        }, 1000);
      } else if (imagesContainers[0].getBoundingClientRect().right <= 0) {
        imagesContainers[1].style.transform = `translateX(${imagesContainerWidth}px)`;
      }
    }

    setInterval(MoveImagesHorizontal, 1000);

    return () => clearInterval();
  }, []);*/

  return (
    <section className="aboutUsSection" id="aboutUsSection">
      <div className="aboutUsSection__content">
        <div className="aboutUsSection__topContainer">
          <h2>Про нас</h2>
          <p>
            З часу заснування в 2018 році, Благодiйна органiзацiя "Серця України" стала однією з
            найбільших, що допомагає українцям. Зараз ми збираємо кошти для допомоги постраждалим
            від війни та на потреби ЗСУ. Наша місія полягає у підтримці людей в ці складні часи. Ми
            постачаємо гуманітарну допомогу, щоб врятувати життя українців та допомагаємо нашим
            воїнам захищати Україну.
          </p>
          <p>
            Наразі наша команда налічує більше сотні людей з таких міст як Київ, Дніпро, Вінниця,
            Рівне, Донецьк та ін. Також витрачено мільйони гривень на закупівлю авто, медичного
            обладнання для поранених та інвалідів, генераторів, старлінків, дронів, житла для
            потерпілих і т.д.
          </p>
        </div>
        <div className="aboutUsSection__bottomContainer">
          <h3>Ми захищаємо світ від тиранії</h3>
          <p>
            Росія вторглася в Україну, тож зараз час показати вашу підтримку заради свободи та
            демократії в Україні та в усьому світі. Війна торкнулася кожного українця, зруйнувала
            міста та села, залишила тисячі людей без дому, їжі, медикаментів та базових засобів для
            життя. У цій ситуації благодійні фонди стають справжнім рятівним кругом для тих, хто
            потребує допомоги.
          </p>
          <div className="aboutUsSection__horizontalScrollContainer">
            <div className="aboutUsSection__imagesContainer">
              {/*imagesArray.map((image, index) => {
                return (
                  <img src={image} alt={`image ${index}`} key={index + Math.random() * 1000} />
                );
              })*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

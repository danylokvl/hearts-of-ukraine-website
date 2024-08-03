import Slider from "react-slick";

import "./AboutUsSection.scss";
import ArrowButton from "../../ui/ArrowButton/ArrowButton";
import img1 from "../../../assets/images/fondImages/1.jpg";
import img2 from "../../../assets/images/fondImages/2.jpg";
import img3 from "../../../assets/images/fondImages/3.jpg";
import img4 from "../../../assets/images/fondImages/4.jpg";
import img5 from "../../../assets/images/fondImages/5.jpg";
import img6 from "../../../assets/images/fondImages/6.jpg";
import img7 from "../../../assets/images/fondImages/7.jpg";
import img8 from "../../../assets/images/fondImages/8.jpg";
import img9 from "../../../assets/images/fondImages/9.jpg";
import img10 from "../../../assets/images/fondImages/10.jpg";

const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const AboutUsSection = () => {
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
          <div className="aboutUsSection__imagesContainer">
            {imagesArray.map((image, index) => {
              return <img src={image} alt={`image ${index}`} key={index + Math.random() * 1000} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

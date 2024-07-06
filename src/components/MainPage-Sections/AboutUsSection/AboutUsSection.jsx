import "./AboutUsSection.scss";
import girlNearTankImage from "../../../assets/images/girl-near-tank.jpg";
import ruinsImage from "../../../assets/images/ruins.jpg";
import strikeImage from "../../../assets/images/strike.jpg";
import damagedTankImage from "../../../assets/images/damaged-tank.jpg";
import damagedTankImage2 from "../../../assets/images/damaged-tank-2.jpg";

const handleImagesContainerScroll = (event) => {
  document.body.style.overflowY = "hidden";
  const container = document.querySelector(".aboutUsSection__imagesContainer");
  let scrollAmount = container.scrollLeft + event.deltaY;

  container.scroll({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
};

const AboutUsSection = () => {
  return (
    <section className="aboutUsSection">
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
          <div
            className="aboutUsSection__imagesContainer"
            onWheel={handleImagesContainerScroll}
            onMouseLeave={() => {
              document.body.style.overflowY = "auto";
            }}
          >
            <img src={girlNearTankImage} alt="girl near damaged tank" />
            <img src={ruinsImage} alt="ruins" />
            <img src={strikeImage} alt="strike" />
            <img src={damagedTankImage} alt="damaged tank" />
            <img src={damagedTankImage2} alt="damaged tank" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

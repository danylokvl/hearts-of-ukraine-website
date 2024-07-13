import "./VacanciesSection.scss";
import medicIconBig from "../../../assets/icons/medicIcon-big.svg";
import carIconBig from "../../../assets/icons/carIcon-big.svg";
import peopleIconBig from "../../../assets/icons/peopleIcon-big.svg";

const VacanciesSection = () => {
  return (
    <section className="vacanciesSection">
      <h3>Хто нам потрібен</h3>
      <div className="vacanciesSection__content">
        <div className="vacanciesSection__vacancyContainer">
          <img src={medicIconBig} />
          <span>Медичні працівники</span>
          <div className="vacanciesSection__specializationsContainer">
            <ul>
              <li>Лікарі</li>
              <li>Медсестри / Медбрати</li>
              <li>Парамедики</li>
              <li>Психологи / Психотерапевти</li>
              <li>Ветеринари</li>
            </ul>
          </div>
        </div>
        <div className="vacanciesSection__vacancyContainer">
          <img src={carIconBig} />
          <span>Водії автомобілів</span>
          <div className="vacanciesSection__specializationsContainer">
            <ul>
              <li>Водії категорій В1 та В</li>
              <li>Водії категорії С1 та С</li>
              <li>Логісти</li>
            </ul>
          </div>
        </div>
        <div className="vacanciesSection__vacancyContainer">
          <img src={peopleIconBig} />
          <span>Будь-хто небайдужий</span>
          <div className="vacanciesSection__specializationsContainer">
            <ul>
              <li>Відповідальні</li>
              <li>Готові допомагати</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacanciesSection;

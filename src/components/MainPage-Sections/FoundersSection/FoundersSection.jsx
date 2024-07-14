import "./FoundersSection.scss";
import oleksandrImage from "../../../assets/images/OleksandrMavrin.png";
import yevhenImage from "../../../assets/images/YevhenSavchenko.png";

const FoundersSection = () => {
  return (
    <section className="foundersSection">
      <h2>Засновники</h2>
      <div className="foundersSection__content">
        <div className="foundersSection__founderContainer">
          <div className="foundersSection__founderTopContainer">
            <div className="foundersSection__imageContainer">
              <img src={oleksandrImage} alt="" />
            </div>
            <div className="foundersSection__nameAndTitleContainer">
              <span className="foundersSection__founderName">Олександр Маврін</span>
              <span className="foundersSection__founderTitle">Засновник фонду</span>
            </div>
          </div>
          <div className="foundersSection__founderBottomContainer">
            <span>"</span>
            <h4>
              Допомогаючи сьогодні, ми будуємо краще завтра для наших дітей і для нашої країни."
            </h4>
          </div>
        </div>
        <div className="foundersSection__founderContainer">
          <div className="foundersSection__founderTopContainer">
            <div className="foundersSection__imageContainer">
              <img src={yevhenImage} alt="" />
            </div>
            <div className="foundersSection__nameAndTitleContainer">
              <span className="foundersSection__founderName">Євген Савченко</span>
              <span className="foundersSection__founderTitle">Засновник фонду</span>
            </div>
          </div>
          <div className="foundersSection__founderBottomContainer">
            <span>"</span>
            <h4>
              Ми тут, щоб підтримати тих, хто бореться за нашу свободу, і тих, хто постраждав від
              війни. Дякую за вашу довіру.”
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

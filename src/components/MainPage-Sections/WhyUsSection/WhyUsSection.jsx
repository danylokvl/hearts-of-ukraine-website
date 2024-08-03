import "./WhyUsSection.scss";

const WhyUsSection = () => {
  return (
    <section className="whyUsSection" id="whyUsSection">
      <div className="whyUsSection__content">
        <h3>Чому нам довіряють</h3>
        <div className="whyUsSection__featureContainer">
          <span>01</span>
          <div className="whyUsSection__featureTextContaienr">
            <h4>Ми відкриті та чесні</h4>
            <p>
              Кожна гривня та всі ваші пожертви спрямовуються безпосередньо на допомогу тим, хто
              цього найбільше потребує.
            </p>
          </div>
        </div>
        <div className="whyUsSection__featureContainer">
          <span>02</span>
          <div className="whyUsSection__featureTextContaienr">
            <h4>У нас комплексний підхід</h4>
            <p>
              Наша організація займається не лише гуманітарною допомогою, але й підтримкою
              військових. Ми забезпечуємо їжею, одягом, медикаментами цивільних осіб та закуповуємо
              військове спорядження та боєприпаси для захисників України.
            </p>
          </div>
        </div>
        <div className="whyUsSection__featureContainer">
          <span>03</span>
          <div className="whyUsSection__featureTextContaienr">
            <h4>Ми завжди на зв’язку</h4>
            <p>
              У будь який момент ми готові зв’язатися з нашими донорами та тими хто цього потребує.
              Ваші відгуки та пропозиції сприяють тому, щоб ми ставали ще краще та ефективніше
              допомагали наблизити нашу перемогу і зробити життя людей кращим.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

import "./FAQSection.scss";

const FAQSection = () => {
  return (
    <section className="faqSection">
      <h2>FAQ</h2>
      <div className="faqSection__content">
        <div className="faqSection__card">
          <span className="faqSection__cardNumber">01.</span>
          <div className="faqSection__cardBottomContainer">
            <span className="faqSection__cardQuestion">
              Чи можу я допомогти якщо не маю можливості вносити кошти?
            </span>
            <p className="faqSection__cardAnswer">
              Так, ви можете стати нашим волонтером щоб разом наближати нашу перемогу
            </p>
          </div>
        </div>
        <div className="faqSection__card">
          <span className="faqSection__cardNumber">02.</span>
          <div className="faqSection__cardBottomContainer">
            <span className="faqSection__cardQuestion">Куди йдуть мої пожертви?</span>
            <p className="faqSection__cardAnswer">
              Ваші пожертви спрямовуються на гуманітарну допомогу постраждалим від війни, а також на
              закупівлю військового спорядження та боєприпасів для захисників України.
            </p>
          </div>
        </div>
        <div className="faqSection__card">
          <span className="faqSection__cardNumber">03.</span>
          <div className="faqSection__cardBottomContainer">
            <span className="faqSection__cardQuestion">
              Чи працюєте ви з міжнародними донорами?
            </span>
            <p className="faqSection__cardAnswer">
              Так, ми приймаємо пожертви від міжнародних донорів. Ви можете зробити внесок через наш
              веб-сайт за допомогою міжнародних платіжних систем.
            </p>
          </div>
        </div>
        <div className="faqSection__card">
          <span className="faqSection__cardNumber">04.</span>
          <div className="faqSection__cardBottomContainer">
            <span className="faqSection__cardQuestion">
              Чи приймаєте ви матеріальну допомогу (одяг, продукти, медикаменти)?
            </span>
            <p className="faqSection__cardAnswer">
              Так, ми приймаємо матеріальну допомогу. Будь ласка, зв’яжіться з нами, щоб дізнатися
              деталі про те, які речі найбільш потрібні та куди їх можна передати.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

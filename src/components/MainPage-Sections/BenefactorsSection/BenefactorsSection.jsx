import "./BenefactorsSection.scss";
import novaPoshtaLogo from "../../../assets/images/novaPoshtaLogo.png";

const BenefactorsSection = () => {
  return (
    <section className="benefactorsSection" id="benefactorsSection">
      <h2>Благодійники</h2>
      <div className="benefactorsSection__content">
        <img src={novaPoshtaLogo} />
      </div>
    </section>
  );
};

export default BenefactorsSection;

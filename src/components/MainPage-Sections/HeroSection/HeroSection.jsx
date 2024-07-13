import "./HeroSection.scss";
import img1 from "../../../assets/images/heroSection-img1.png";
import img2 from "../../../assets/images/heroSection-img2.png";
import img3 from "../../../assets/images/heroSection-img3.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroSection__content">
        <div className="heroSection__imagesContainer">
          <img src={img2} alt="soldier image" id="soldierImage" />
          <img src={img1} alt="kid image" id="kidImage" />
          <img src={img3} alt="woman image" id="womanImage" />
        </div>
        <div className="heroSection__h1Container">
          <h1>Разом заради життя та перемоги</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

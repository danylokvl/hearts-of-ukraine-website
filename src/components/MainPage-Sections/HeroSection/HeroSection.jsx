import "./HeroSection.scss";
import img1 from "../../../assets/images/heroSection-img1.png";
import img2 from "../../../assets/images/heroSection-img2.png";
import img3 from "../../../assets/images/heroSection-img3.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroSection__content">
        <div className="heroSection__imagesContainer">
          <img src={img1} alt="kid image" />
          <img src={img2} alt="soldier image" />
          <img src={img3} alt="woman image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

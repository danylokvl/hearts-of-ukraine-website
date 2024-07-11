import AboutUsSection from "../../components/MainPage-Sections/AboutUsSection/AboutUsSection";
import HeroSection from "../../components/MainPage-Sections/HeroSection/HeroSection";
import MainActivitiesBlock from "../../components/MainPage-Sections/MainActivitiesBlock/MainActivitiesBlock";
import WhyUsSection from "../../components/MainPage-Sections/WhyUsSection/WhyUsSection";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="mainPage">
      <HeroSection />
      <MainActivitiesBlock />
      <AboutUsSection />
      <WhyUsSection />
    </section>
  );
};

export default MainPage;

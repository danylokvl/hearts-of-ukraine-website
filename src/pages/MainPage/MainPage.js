import AboutUsSection from "../../components/MainPage-Sections/AboutUsSection/AboutUsSection";
import HeroSection from "../../components/MainPage-Sections/HeroSection/HeroSection";
import MainActivitiesBlock from "../../components/MainPage-Sections/MainActivitiesBlock/MainActivitiesBlock";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="mainPage">
      <HeroSection />
      <MainActivitiesBlock />
      <AboutUsSection />
    </section>
  );
};

export default MainPage;

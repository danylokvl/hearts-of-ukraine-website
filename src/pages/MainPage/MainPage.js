import HeroSection from "../../components/MainPage-Sections/HeroSection/HeroSection";
import MainActivitiesBlock from "../../components/MainPage-Sections/MainActivitiesBlock/MainActivitiesBlock";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="mainPage">
      <HeroSection />
      <MainActivitiesBlock />
    </section>
  );
};

export default MainPage;

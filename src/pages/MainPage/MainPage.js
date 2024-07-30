import BecomeVolunteerPopup from "../../components/MainPage-Popups/BecomeVolunteerPopup/BecomeVolunteerPopup";
import DonatePopup from "../../components/MainPage-Popups/DonatePopup/DonatePopup";
import FormPopup from "../../components/MainPage-Popups/FormPopup/FormPopup";
import AboutUsSection from "../../components/MainPage-Sections/AboutUsSection/AboutUsSection";
import BenefactorsSection from "../../components/MainPage-Sections/BenefactorsSection/BenefactorsSection";
import FAQSection from "../../components/MainPage-Sections/FAQSection/FAQSection";
import FoundersSection from "../../components/MainPage-Sections/FoundersSection/FoundersSection";
import HeroSection from "../../components/MainPage-Sections/HeroSection/HeroSection";
import MainActivitiesBlock from "../../components/MainPage-Sections/MainActivitiesBlock/MainActivitiesBlock";
import VacanciesSection from "../../components/MainPage-Sections/VacanciesSection/VacanciesSection";
import WhyUsSection from "../../components/MainPage-Sections/WhyUsSection/WhyUsSection";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="mainPage">
      {/*Main Page Popups*/}
      <DonatePopup />
      <FormPopup formVariant="volunteerForm" />
      <FormPopup formVariant="needHelpForm" />

      <HeroSection />
      <MainActivitiesBlock />
      <AboutUsSection />
      <WhyUsSection />
      <VacanciesSection />
      <FoundersSection />
      <BenefactorsSection />
      <FAQSection />
    </section>
  );
};

export default MainPage;

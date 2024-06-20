import "./App.css";
import ArrowButton from "./components/ui/ArrowButton/ArrowButton";
import ChipButton from "./components/ui/ChipButton/ChipButton";
import PrimaryButton from "./components/ui/PrimaryButton/PrimaryButton";
import arrow from "./assets/icons/arrow-button-right-24px-blue.svg";

function App() {
  return (
    <>
      <PrimaryButton>ВНЕСТИ КОШТИ</PrimaryButton>
      <ArrowButton arrowTo="left"></ArrowButton>
      <ChipButton text="Arrow" iconSrc={arrow} />
    </>
  );
}
export default App;

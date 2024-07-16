import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
export default App;

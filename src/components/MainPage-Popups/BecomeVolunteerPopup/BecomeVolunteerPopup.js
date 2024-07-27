import PopupCloseButton from "../../ui/PopupCloseButton/PopupCloseButton";
import "./BecomeVolunteerPopup.scss";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";

const BecomeVolunteerPopup = () => {
  return (
    <section className="mainPagePopup becomeVolunteerPopup">
      <div className="becomeVolunteerPopup__content">
        <div className="becomeVolunteerPopup__buttonContainer">
          <PopupCloseButton classProp="becomeVolunteerPopup" />
        </div>
        <h2>Для того щоб стати волонтером фонду "Серця України", будь ласка заповніть форму</h2>
        <form className="becomeVolunteerPopup__form">
          <TextField
            id="nameTextField"
            className="mainPagePopup__textField"
            label="Ваші ім'я та прізвище"
            variant="standard"
            required
          />
          <TextField
            id="phoneNumberTextField"
            className="mainPagePopup__textField"
            label="Ваш номер телефону"
            variant="standard"
            required
          />
          <TextField
            id="countryTextField"
            className="mainPagePopup__textField"
            label="Країна, в якій ви знаходитесь"
            variant="standard"
          />
          <TextField
            id="cityTextField"
            className="mainPagePopup__textField"
            label="Місто, де ви знаходитесь"
            variant="standard"
          />
          <TextField
            id="summaryTextField"
            className="mainPagePopup__textField"
            label="Розкажіть про себе"
            multiline
            variant="standard"
          />
          <PrimaryButton type="submit" id="becomeVolunteerBtn">
            СТАТИ ВОЛОНТЕРОМ
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default BecomeVolunteerPopup;

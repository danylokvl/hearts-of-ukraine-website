import { useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import PopupCloseButton from "../../ui/PopupCloseButton/PopupCloseButton";
import "./BecomeVolunteerPopup.scss";
import { DATA } from "../../../DATA";

const BecomeVolunteerPopup = () => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    summary: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await emailjs
      .send(DATA.service_id, DATA.template_id, volunteerData, DATA.user_id)
      .finally(() =>
        setVolunteerData({
          name: "",
          phoneNumber: "",
          email: "",
          city: "",
          summary: "",
        })
      );

    console.log(response);
  }

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
            autoComplete="off"
            value={volunteerData.name}
            onChange={(e) =>
              setVolunteerData((prevVolunteerData) => ({
                ...prevVolunteerData,
                name: e.target.value,
              }))
            }
          />
          <TextField
            id="phoneNumberTextField"
            className="mainPagePopup__textField"
            label="Ваш номер телефону"
            variant="standard"
            autoComplete="off"
            required
            value={volunteerData.phoneNumber}
            onChange={(e) =>
              setVolunteerData((prevVolunteerData) => ({
                ...prevVolunteerData,
                phoneNumber: e.target.value,
              }))
            }
          />
          <TextField
            id="emailTextField"
            className="mainPagePopup__textField"
            label="Ваш Email"
            variant="standard"
            autoComplete="off"
            required
            value={volunteerData.email}
            onChange={(e) =>
              setVolunteerData((prevVolunteerData) => ({
                ...prevVolunteerData,
                email: e.target.value,
              }))
            }
          />
          <TextField
            id="cityTextField"
            className="mainPagePopup__textField"
            label=" Назва населеного пункту, де ви знаходитесь"
            autoComplete="off"
            variant="standard"
            value={volunteerData.city}
            onChange={(e) =>
              setVolunteerData((prevVolunteerData) => ({
                ...prevVolunteerData,
                city: e.target.value,
              }))
            }
          />
          <TextField
            id="summaryTextField"
            className="mainPagePopup__textField"
            label="Розкажіть про себе"
            multiline
            variant="standard"
            autoComplete="off"
            value={volunteerData.summary}
            onChange={(e) =>
              setVolunteerData((prevVolunteerData) => ({
                ...prevVolunteerData,
                summary: e.target.value,
              }))
            }
          />
          <div className="becomeVolunteerPopup__btnContainer">
            <p>
              Натискаючи на кнопку “СТАТИ ВОЛОНТЕРОМ” ви надаєте згоду на обробку ваших персональних
              даних
            </p>
            <PrimaryButton type="submit" id="becomeVolunteerBtn" onClick={handleSubmit}>
              СТАТИ ВОЛОНТЕРОМ
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BecomeVolunteerPopup;

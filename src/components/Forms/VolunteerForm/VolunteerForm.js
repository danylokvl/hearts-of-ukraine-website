import { useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import "../../MainPage-Popups/MainPagePopups.scss";
const VolunteerForm = ({
  errorOccured,
  setErrorOccured,
  formIsSent,
  setFormIsSent,
  emailjsData,
}) => {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    summary: "",
  });

  async function handleVolunteerFormSubmit(e) {
    e.preventDefault();
    if (volunteerData.name === "" || volunteerData.phoneNumber === "") {
      setErrorOccured(true);
      return;
    }
    try {
      const response = await emailjs
        .send(
          emailjsData.service_id,
          emailjsData.template_id_volunteer,
          volunteerData,
          emailjsData.user_id
        )
        .finally(() => {
          setVolunteerData({
            name: "",
            phoneNumber: "",
            email: "",
            city: "",
            summary: "",
          });
          setFormIsSent(true);
        });
    } catch {
      setErrorOccured(true);
    }
  }

  return (
    <form className="volunteerForm">
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
      <div className="volunteerForm__bottomContainer">
        <div className="volunteerForm__messageContainer" id="volunteerFormMessageContainer">
          <span>
            {errorOccured
              ? "Щось пішло не так, заповніть форму та спробуйте ще раз"
              : formIsSent
              ? "Ваші дані надіслано, очікуйте на зворотній зв'язок"
              : "message"}
          </span>
        </div>
        <p>
          Натискаючи на кнопку “СТАТИ ВОЛОНТЕРОМ” ви надаєте згоду на обробку ваших персональних
          даних
        </p>
        <PrimaryButton type="submit" id="volunteerBtn" onClick={handleVolunteerFormSubmit}>
          СТАТИ ВОЛОНТЕРОМ
        </PrimaryButton>
      </div>
    </form>
  );
};

export default VolunteerForm;

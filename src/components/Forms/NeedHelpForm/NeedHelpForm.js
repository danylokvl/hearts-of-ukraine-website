import { useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";

const NeedHelpForm = ({
  emailjsData,
  errorOccured,
  setErrorOccured,
  formIsSent,
  setFormIsSent,
}) => {
  const [needHelpData, setNeedHelpData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    problem: "",
  });

  async function handleNeedHelpFormSubmit(e) {
    e.preventDefault();
    if (
      needHelpData.name === "" ||
      needHelpData.phoneNumber === "" ||
      needHelpData.problem === ""
    ) {
      setErrorOccured(true);
      return;
    }
    try {
      const response = await emailjs
        .send(
          emailjsData.service_id,
          emailjsData.template_id_needHelp,
          needHelpData,
          emailjsData.user_id
        )
        .finally(setNeedHelpData({ name: "", phoneNumber: "", email: "", city: "", problem: "" }));
      setFormIsSent(true);
    } catch {
      setErrorOccured(true);
    }
  }

  return (
    <form className="needHelpForm">
      <TextField
        id="nameTextField"
        className="mainPagePopup__textField"
        label="Ваші ім'я та прізвище"
        variant="standard"
        required
        autoComplete="off"
        value={needHelpData.name}
        onChange={(e) =>
          setNeedHelpData((prevNeedHelpData) => ({
            ...prevNeedHelpData,
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
        value={needHelpData.phoneNumber}
        onChange={(e) =>
          setNeedHelpData((prevNeedHelpData) => ({
            ...prevNeedHelpData,
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
        value={needHelpData.email}
        onChange={(e) =>
          setNeedHelpData((prevNeedHelpData) => ({
            ...prevNeedHelpData,
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
        value={needHelpData.city}
        onChange={(e) =>
          setNeedHelpData((prevNeedHelpData) => ({
            ...prevNeedHelpData,
            city: e.target.value,
          }))
        }
      />
      <TextField
        id="summaryTextField"
        className="mainPagePopup__textField"
        label="Опишіть вашу проблему"
        multiline
        variant="standard"
        autoComplete="off"
        required
        value={needHelpData.problem}
        onChange={(e) =>
          setNeedHelpData((prevNeedHelpData) => ({
            ...prevNeedHelpData,
            problem: e.target.value,
          }))
        }
      />
      <div className="needHelpForm__bottomContainer">
        <div className="needHelpForm__messageContainer" id="needHelpFormMessageContainer">
          <span>
            {errorOccured
              ? "Щось пішло не так, заповніть форму та спробуйте ще раз"
              : formIsSent
              ? "Ваші дані надіслано, очікуйте на зворотній зв'язок"
              : "message"}
          </span>
        </div>
        <p>Натискаючи на кнопку “НАДІСЛАТИ” ви надаєте згоду на обробку ваших персональних даних</p>
        <PrimaryButton type="submit" id="volunteerBtn" onClick={handleNeedHelpFormSubmit}>
          НАДІСЛАТИ
        </PrimaryButton>
      </div>
    </form>
  );
};

export default NeedHelpForm;

import { useEffect, useState } from "react";
import PopupCloseButton from "../../ui/PopupCloseButton/PopupCloseButton";
import "./FormPopup.scss";
import VolunteerForm from "../../Forms/VolunteerForm/VolunteerForm";
import NeedHelpForm from "../../Forms/NeedHelpForm/NeedHelpForm";

const FormPopup = ({ formVariant }) => {
  const [errorOccured, setErrorOccured] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);

  const EMAILJS_DATA = {
    service_id: "service_qftmpfh",
    template_id_volunteer: "template_bzxbgwp",
    template_id_needHelp: "template_mn0hf9l",
    user_id: "i1UslDJTGN6T73HNh",
  };

  let form;
  if (formVariant === "volunteerForm")
    form = (
      <VolunteerForm
        emailjsData={EMAILJS_DATA}
        errorOccured={errorOccured}
        setErrorOccured={setErrorOccured}
        formIsSent={formIsSent}
        setFormIsSent={setFormIsSent}
      />
    );
  else if (formVariant === "needHelpForm")
    form = (
      <NeedHelpForm
        emailjsData={EMAILJS_DATA}
        errorOccured={errorOccured}
        setErrorOccured={setErrorOccured}
        formIsSent={formIsSent}
        setFormIsSent={setFormIsSent}
      />
    );

  useEffect(() => {
    const messageContainer = document.querySelector(`.${formVariant}__messageContainer`);
    if (errorOccured) {
      messageContainer.classList.add("negativeMessage");
    } else if (formIsSent) messageContainer.classList.add("positiveMessage");
    setTimeout(() => {
      messageContainer.classList.remove(
        `${errorOccured ? "negativeMessage" : formIsSent ? "positiveMessage" : null}`
      );
      errorOccured && setErrorOccured(false);
      formIsSent && setFormIsSent(false);
    }, 7000);

    return () => {
      clearTimeout();
    };
  }, [errorOccured, formIsSent]);

  return (
    <section
      className={`mainPagePopup ${
        formVariant === "volunteerForm" ? "becomeVolunteerPopup" : "needHelpPopup"
      }`}
    >
      <div className="formPopup__content">
        <div className="formPopup__buttonContainer">
          <PopupCloseButton
            classProp={formVariant === "volunteerForm" ? "becomeVolunteerPopup" : "needHelpPopup"}
          />
        </div>
        <h2>
          {formVariant === "volunteerForm"
            ? 'Для того щоб стати волонтером фонду "Серця України", будь ласка заповніть форму'
            : "Будь ласка заповніть форму для того щоб ми змогли вам допомогти"}
        </h2>
        {form}
      </div>
    </section>
  );
};

export default FormPopup;

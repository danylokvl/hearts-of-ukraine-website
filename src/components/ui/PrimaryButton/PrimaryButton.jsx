import "./PrimaryButton.scss";

const PrimaryButton = ({ children, onClick, type, id }) => {
  return (
    <button className="primaryButton " onClick={onClick} type={type} id={id}>
      {children}
    </button>
  );
};

export default PrimaryButton;

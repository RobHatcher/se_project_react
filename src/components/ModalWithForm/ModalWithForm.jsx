import "./ModalWithForm.css";
import closebtn from "../../assets/closebtn.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        >
          <img src={closebtn} alt="close" className="modal__close-icon" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

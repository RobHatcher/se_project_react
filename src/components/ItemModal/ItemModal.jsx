import { useContext } from "react";
import "./ItemModal.css";
import closebtn from "../../assets/closeicon.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const user = useContext(CurrentUserContext);
  const isOwn = card.owner === user._id;
  const itemDeleteButtonClassName = `modal__delete-item-button ${
    isOwn ? "" : "modal__delete-item-button_hidden"
  }`;
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={closebtn} alt="close" className="modal__close-icon" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__left">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div className="modal__right">
            {isOwn && (
              <button
                type="button"
                className={itemDeleteButtonClassName}
                onClick={onDelete}
              >
                Delete Item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

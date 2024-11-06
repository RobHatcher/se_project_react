import "./ItemModal.css";
import closebtn from "../../assets/closeicon.png";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={closebtn} alt="close" className="modal__close-icon" />
        </button>
        <img src={card.imageUrl} alt="clothes image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button className="modal__delete-item-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ItemModal;

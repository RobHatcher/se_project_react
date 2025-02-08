import React from "react";

function DeleteConfirmationModal({ isOpen, closeActiveModal, onDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__delete-modal">
        <button
          type="button"
          className="modal__close-btn"
          onClick={closeActiveModal}
        ></button>
        <div className="modal__delete-confirm">
          <p className="modal__text">
            Are you sure you want to delete this item?
          </p>
          <p className="modal__text">This action is irreversible.</p>
          <button className="modal__delete-btn modal__text" onClick={onDelete}>
            Yes, Delete Item
          </button>
          <button
            type="button"
            className="modal__cancel-btn modal__text"
            onClick={closeActiveModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;

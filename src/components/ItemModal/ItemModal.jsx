import "./ItemModal.css";
import useModalClose from "../../hooks/useModalClose";
import { useState } from "react";

function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  const isOpen = activeModal === "preview";

  useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            onClick={() => {
              onClose();
              handleDeleteClick(card);
            }}
            type="button"
            className="modal__delete-item"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

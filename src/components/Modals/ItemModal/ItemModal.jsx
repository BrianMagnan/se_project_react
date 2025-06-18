import "./ItemModal.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import { useContext } from "react";
import useModalClose from "../../../hooks/useModalClose";

function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  useModalClose(activeModal, onClose);

  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = currentUser && card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
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
          {isOwn && (
            <button
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-item"
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

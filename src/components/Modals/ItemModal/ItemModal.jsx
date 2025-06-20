import "./ItemModal.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import { useContext } from "react";
import useModal from "../../../hooks/useModal";

function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  const { useModalClose } = useModal();
  useModalClose(activeModal, onClose);

  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = currentUser && card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button
          id="item-modal-close"
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item"
          aria-label="Close item preview modal"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {isOwn && (
            <button
              id="delete-item-button"
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-item"
              aria-label={`Delete ${card.name}`}
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

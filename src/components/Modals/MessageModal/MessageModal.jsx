import "./MessageModal.css";
import useModalClose from "../../../hooks/useModalClose";

function MessageModal({ activeModal, onClose, card, handleDeleteItem }) {
  useModalClose(activeModal, onClose);

  return (
    <div className={`modal ${activeModal === "message" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_message">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-message"
        ></button>
        <h2 className="modal__message">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button
          onClick={() => handleDeleteItem(card)}
          type="button"
          className="modal__delete-message"
        >
          Yes, delete item
        </button>

        <button onClick={onClose} type="button" className="modal__cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default MessageModal;

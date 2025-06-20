import "./MessageModal.css";
import useModal from "../../../hooks/useModal";

function MessageModal({
  activeModal,
  onClose,
  card,
  handleDeleteItem,
  isLoading,
}) {
  const { useModalClose } = useModal();
  useModalClose(activeModal, onClose);

  return (
    <div className={`modal ${activeModal === "message" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_message">
        <button
          id="message-modal-close"
          onClick={onClose}
          type="button"
          className="modal__close modal__close-message"
          disabled={isLoading?.profile}
          aria-label="Close delete confirmation modal"
        ></button>
        <h2 className="modal__message">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button
          id="confirm-delete-button"
          onClick={() => handleDeleteItem(card)}
          type="button"
          className="modal__delete-message"
          disabled={isLoading?.profile}
          aria-label={
            isLoading?.profile ? "Deleting item..." : "Confirm delete item"
          }
        >
          {isLoading?.profile ? "Deleting..." : "Yes, delete item"}
        </button>

        <button
          id="cancel-delete-button"
          onClick={onClose}
          type="button"
          className="modal__cancel"
          disabled={isLoading?.profile}
          aria-label="Cancel delete operation"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default MessageModal;

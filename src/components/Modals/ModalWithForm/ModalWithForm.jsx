import "./ModalWithForm.css";
import useModal from "../../../hooks/useModal";

function ModalWithForm({
  children,
  buttonText,
  linkText,
  title,
  activeModal,
  onClose,
  onSubmit,
  disabled,
  onLinkClick,
  isLoading = false,
}) {
  const { useModalClose } = useModal();
  useModalClose(activeModal, onClose);

  // Create unique IDs based on the modal title
  const modalId = title?.toLowerCase().replace(/\s+/g, "-") || "modal";
  const submitButtonId = `${modalId}-submit-button`;
  const closeButtonId = `${modalId}-close-button`;
  const linkButtonId = `${modalId}-link-button`;

  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          id={closeButtonId}
          onClick={onClose}
          type="button"
          className="modal__close modal__close-form"
          aria-label="Close modal"
        />

        <form className="modal__form" onSubmit={onSubmit} name={modalId}>
          {children}
          <div className="modal__btn_container">
            {" "}
            <button
              id={submitButtonId}
              type="submit"
              className="modal__submit"
              disabled={disabled || isLoading}
              aria-label={isLoading ? "Loading..." : `Submit ${title}`}
            >
              {isLoading ? "Loading..." : buttonText}
            </button>
            <button
              id={linkButtonId}
              onClick={onLinkClick}
              type="button"
              className="modal__link"
              disabled={isLoading}
              aria-label={linkText}
            >
              {linkText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

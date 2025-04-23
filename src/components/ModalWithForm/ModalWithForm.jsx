import "./ModalWithForm.css";
import useModalClose from "../../hooks/useModalClose";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  onSubmit,
  disabled,
}) {
  useModalClose(activeModal, onClose);

  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-form"
        />

        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit" disabled={disabled}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

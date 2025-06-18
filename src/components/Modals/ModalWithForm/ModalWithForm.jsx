import "./ModalWithForm.css";
import useModalClose from "../../../hooks/useModalClose";

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
}) {
  useModalClose(activeModal, onClose);

  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-form"
        />

        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__btn_container">
            {" "}
            <button type="submit" className="modal__submit" disabled={disabled}>
              {buttonText}
            </button>
            <button onClick={onLinkClick} type="button" className="modal__link">
              {linkText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

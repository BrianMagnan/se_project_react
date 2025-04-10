import "./ModalWithForm.css";
import { useModalClose } from "../../hooks/useModalClose";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  const isOpen = activeModal === "add-garment";
  const { modalProps, contentProps } = useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal_opened"}`} {...modalProps}>
      <div className="modal__content" {...contentProps}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-form"
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

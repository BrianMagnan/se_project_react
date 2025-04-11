import "./ItemModal.css";
import { useModalClose } from "../../hooks/useModalClose";

function ItemModal({ activeModal, onClose, card }) {
  const isOpen = activeModal === "preview";

  const { modalProps, contentProps } = useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen && "modal_opened"}`} {...modalProps}>
      <div
        className="modal__content modal__content_type_image"
        {...contentProps}
      >
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-item"
        ></button>

        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

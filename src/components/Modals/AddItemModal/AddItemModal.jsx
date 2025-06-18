import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useEffect } from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";

export default function AddItemModal({
  activeModal,
  onClose,
  onAddItemModalSubmit,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    getInputClassName,
  } = useFormAndValidation("addItem");

  useEffect(() => {
    if (!activeModal) {
      resetForm();
    }
  }, [activeModal, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAddItemModalSubmit(values.name, values.imageUrl, values.weather);
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal === "add-garment"}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={!isValid}
    >
      {/* name */}
      <label htmlFor="add-name" className="modal__label">
        {errors.name ? (
          <span className="modal__error">{errors.name}</span>
        ) : (
          "Name"
        )}
        <input
          id="add-name"
          type="text"
          name="name"
          className={getInputClassName("name")}
          aria-label="Enter name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
      </label>
      {/* imageUrl */}
      <label htmlFor="add-imageUrl" className="modal__label">
        {errors.imageUrl ? (
          <span className="modal__error">{errors.imageUrl}</span>
        ) : (
          "Image"
        )}
        <input
          id="add-imageUrl"
          type="url"
          name="imageUrl"
          className={getInputClassName("imageUrl")}
          aria-label="Enter image URL"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset
        className="modal__radio-buttons"
        aria-label="Weather type selection"
      >
        <legend className="modal__legend">Select the weather type:</legend>

        <label
          htmlFor="add-hot"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            aria-label="Hot weather"
            required
          ></input>
          Hot
        </label>

        <label
          htmlFor="add-warm"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
            aria-label="Warm weather"
            required
          ></input>
          Warm
        </label>

        <label
          htmlFor="add-cold"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="add-cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
            aria-label="Cold weather"
            required
          ></input>
          Cold
        </label>

        {!values.weather && (
          <span className="modal__error" role="alert">
            Please select a weather type
          </span>
        )}
      </fieldset>
    </ModalWithForm>
  );
}

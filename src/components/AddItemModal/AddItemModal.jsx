import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function AddItemModal({
  activeModal,
  onClose,
  onAddItemModalSubmit,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (!activeModal) {
      resetForm();
    }
  }, [activeModal, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAddItemModalSubmit(values.name, values.imageUrl, values.temp);
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={!isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name {""}
        <input
          type="text"
          maxLength={50}
          className="modal__input"
          id="name"
          name="name"
          aria-label="Enter garment name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        {values.name && values.name.length < 3 && (
          <span className="modal__error" id="name-error">
            Name must be at least 3 characters
          </span>
        )}
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image {""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          aria-label="Enter image URL"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
        {errors.imageUrl && (
          <span className="modal__error">
            Please enter a valid URL starting with http:// or https://
          </span>
        )}
      </label>
      <fieldset
        className="modal__radio-buttons"
        aria-label="Weather type selection"
      >
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="temp"
            value="hot"
            checked={values.temp === "hot"}
            onChange={handleChange}
            aria-label="Hot weather"
            required
          ></input>
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="temp"
            value="warm"
            checked={values.temp === "warm"}
            onChange={handleChange}
            aria-label="Warm weather"
            required
          ></input>
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="temp"
            value="cold"
            checked={values.temp === "cold"}
            onChange={handleChange}
            aria-label="Cold weather"
            required
          ></input>
          Cold
        </label>
        {!values.temp && (
          <span className="modal__error" role="alert">
            Please select a weather type
          </span>
        )}
      </fieldset>
    </ModalWithForm>
  );
}

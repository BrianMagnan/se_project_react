import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(name, imageUrl, weather);
    setName("");
    setImageUrl("");
    setWeather("");
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name {""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image {""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="temp"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
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
            checked={weather === "warm"}
            onChange={handleWeatherChange}
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
            checked={weather === "cold"}
            onChange={handleWeatherChange}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

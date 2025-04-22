import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [isNameValid, setNameValid] = useState("false");
  const [imageUrl, setImageUrl] = useState("");
  const [isUrlValid, setUrlValid] = useState("false");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);

    if (name.length > 2 && name.length < 50) {
      setNameValid(true);
    } else setNameValid(false);
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);

    if (url.length > 0) {
      try {
        new URL(url);
        setUrlValid(url.startsWith("http://") || url.startsWith("https://"));
      } catch (err) {
        setUrlValid(false);
      }
    } else {
      setUrlValid(true);
    }
  };

  const handleWeatherChange = (e) => {
    const weather = e.target.value;
    setWeather(weather);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setUrlValid("");
      onAddItemModalSubmit(name, imageUrl, weather);
      setName("");
      setImageUrl("");
      setWeather("");
    } else {
      setUrlValid(false);
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      disabled={!isNameValid || !isUrlValid || !weather}
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
        {name && !isNameValid && (
          <span className="modal__error">
            {name.length < 3
              ? "Name must be at least 3 characters"
              : "Name must be less than 50 characters"}
          </span>
        )}
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
        {imageUrl && !isUrlValid && (
          <span className="modal__error">
            Please enter a valid URL starting with http:// or https://
          </span>
        )}
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
        {!weather && (
          <span className="modal__error">Please select a weather type</span>
        )}
      </fieldset>
    </ModalWithForm>
  );
}

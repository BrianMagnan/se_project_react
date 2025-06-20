import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        id="temperature-toggle"
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
        aria-label="Toggle temperature unit between Fahrenheit and Celsius"
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTemperatureUnit === "F"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}

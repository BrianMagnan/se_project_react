import "./Header.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperatureUnitContext";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  handleSignUpClick,
  handleLoginClick,
  weatherData,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Function to get user's first initial for avatar placeholder
  const getUserInitial = () => {
    if (currentUser && currentUser.name) {
      return currentUser.name.charAt(0).toUpperCase();
    }
    return "?";
  };

  return (
    <header className="header">
      <div className="header__left">
        <Link className="header__main-link" to="/">
          <img className="header__logo" src={logo} alt="wtwr logo" />
        </Link>

        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              id="add-clothes-button"
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
              aria-label="Add new clothing item"
            >
              + Add clothes
            </button>

            <Link className="header__profile-link" to="/profile">
              <div className="header__user-container">
                <p className="header__username">
                  {currentUser?.name || "User"}
                </p>
                {currentUser?.avatar ? (
                  <img
                    className="header__user-avatar"
                    src={currentUser.avatar}
                    alt={currentUser.name}
                  />
                ) : (
                  <div className="header__user-avatar-placeholder">
                    {getUserInitial()}
                  </div>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              id="signup-button"
              onClick={handleSignUpClick}
              type="button"
              className="header__login-btn"
              aria-label="Sign up for an account"
            >
              Sign Up
            </button>
            <button
              id="login-button"
              onClick={handleLoginClick}
              type="button"
              className="header__login-btn"
              aria-label="Log in to your account"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

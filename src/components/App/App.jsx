// React and Router
import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

// Contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

// Components
import Header from "../Layout/Header/Header";
import Main from "../Pages/Main/Main";
import MasterModal from "../Modals/MasterModal/MasterModal";
import Profile from "../Pages/Profile/Profile";
import Footer from "../Layout/Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Hooks
import useModalOpen from "../../hooks/useModalOpen";
import { useAuthHandlers } from "../../hooks/useAuthHandlers";
import { useCardHandlers } from "../../hooks/useCardHandlers";
import { useItemHandlers } from "../../hooks/useItemHandlers";
import { useUIHandlers } from "../../hooks/useUIHandlers";
import { useDataFetching } from "../../hooks/useDataFetching";
import { useErrorHandling } from "../../hooks/useErrorHandling";

// Styles
import "./App.css";

function App() {
  const {
    activeModal,
    selectedCard,
    handleLoginClick,
    handleSignUpClick,
    handleAddClick,
    handleEditProfile,
    handleCardClick,
    handleDeleteClick,
    closeActiveModal,
  } = useModalOpen();

  // ===== State Declarations =====
  const { error, setError } = useContext(CurrentUserContext);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: "false",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState({
    weather: true,
    items: true,
    profile: false,
  });

  // ===== Auth Handlers =====
  const { handleRegister, handleLoginSubmit, handleUpdateProfile } =
    useAuthHandlers({
      setIsLoading,
      setError,
      closeActiveModal,
    });

  // ===== Card Handlers =====
  const { handleCardLike } = useCardHandlers({
    setClothingItems,
  });

  // ===== Item Handlers =====
  const { handleAddItemModalSubmit, handleDeleteItem } = useItemHandlers({
    setClothingItems,
    closeActiveModal,
  });

  // ===== UI Handlers =====
  const { handleToggleSwitchChange } = useUIHandlers({
    setCurrentTemperatureUnit,
  });

  // ===== Error Handling =====
  const { handleErrorClose } = useErrorHandling({
    setError,
  });

  // ===== Data Fetching =====
  useDataFetching({
    setWeatherData,
    setClothingItems,
    setIsLoading,
    setError,
  });

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{
        currentTemperatureUnit,
        handleToggleSwitchChange,
      }}
    >
      <div className="page">
        {error && (
          <div className="error-message">
            {error}
            <button
              className="error-message__close"
              onClick={handleErrorClose}
              type="button"
            >
              ×
            </button>
          </div>
        )}
        <div className="page__content">
          <Header
            handleLoginClick={handleLoginClick}
            handleAddClick={handleAddClick}
            handleSignUpClick={handleSignUpClick}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  onCardLike={handleCardLike}
                  isLoading={isLoading}
                  onCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    clothingItems={clothingItems}
                    isLoading={isLoading}
                    onCardLike={handleCardLike}
                    weatherData={weatherData}
                    onEditProfile={handleEditProfile}
                    onDeleteItem={handleDeleteItem}
                    onAddItemModalSubmit={handleAddItemModalSubmit}
                    onUpdateProfile={handleUpdateProfile}
                    onClose={closeActiveModal}
                    onLinkClick={handleSignUpClick}
                    onUserLoginSubmit={handleLoginSubmit}
                    onUserRegisterSubmit={handleRegister}
                    handleAddClick={handleAddClick}
                    handleCardClick={handleCardClick}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* Master Modal */}
          <MasterModal
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            handleAddItemModalSubmit={handleAddItemModalSubmit}
            handleDeleteItem={handleDeleteItem}
            handleLoginSubmit={handleLoginSubmit}
            handleRegister={handleRegister}
            handleUpdateProfile={handleUpdateProfile}
            handleSignUpClick={handleSignUpClick}
            handleLoginClick={handleLoginClick}
            handleEditProfile={handleEditProfile}
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
            handleDeleteClick={handleDeleteClick}
          />
          <Footer />
        </div>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

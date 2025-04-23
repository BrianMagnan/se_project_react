import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, addItem, deleteItem } from "../../utils/clothingApi";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import ItemModal from "../ItemModal/ItemModal";
import MessageModal from "../MessageModal/MessageModal.jsx";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: "false",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => {
      return prev === "F" ? "C" : "F";
    });
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("message");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = (name, imageUrl, weather) => {
    const item = { name, imageUrl, weather };
    addItem(item)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (item) => {
    deleteItem(item)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((prevItem) => prevItem._id !== item._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{
        currentTemperatureUnit,
        handleToggleSwitchChange,
      }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>
        <AddItemModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          handleDeleteClick={handleDeleteClick}
        />
        <MessageModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          handleDeleteItem={handleDeleteItem}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

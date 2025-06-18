import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

import WeatherCard from "../../Weather/WeatherCard/WeatherCard";
import ItemCard from "../../Clothing/ItemCard/ItemCard";
import "./Main.css";

function Main({
  weatherData,
  onCardLike,
  clothingItems,
  isLoading,
  onCardClick,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (isLoading.weather || isLoading.items) {
    return (
      <main className="main">
        <div className="loading">
          <div className="loading-spinner"></div>
          Loading...
        </div>
      </main>
    );
  }

  const filteredItems = clothingItems.filter(
    (card) => card.weather === weatherData.type
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

import { useEffect } from "react";
import { coordinates, APIkey } from "../utils/constants";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { getItems } from "../utils/clothingApi";

export function useDataFetching({
  setWeatherData,
  setClothingItems,
  setIsLoading,
  setError,
}) {
  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, weather: true }));
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load weather data. Please try again later.");
        console.error("Weather error:", err);
      })
      .finally(() => {
        setIsLoading((prev) => ({ ...prev, weather: false }));
      });
  }, [setWeatherData, setClothingItems, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading((prev) => ({ ...prev, items: true }));
    getItems()
      .then((data) => {
        setClothingItems(data);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load clothing items. Please try again later.");
        console.error("Items error:", err);
      })
      .finally(() => {
        setIsLoading((prev) => ({ ...prev, items: false }));
      });
  }, [setClothingItems, setError, setIsLoading]);
}

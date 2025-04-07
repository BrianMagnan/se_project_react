import "./WeatherCard.css";
import Sunny from "../../assets/sunny.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>

      <img src={Sunny} alt="Sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

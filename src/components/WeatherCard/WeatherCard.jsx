import React from "react";
import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";

function WeatherCard({ weatherData, currentTemperatureUnit }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp[currentTemperatureUnit]} &deg; {currentTemperatureUnit}</p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

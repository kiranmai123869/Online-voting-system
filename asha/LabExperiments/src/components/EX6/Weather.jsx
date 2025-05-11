import React, { useState } from "react";
import axios from "axios";
import '/src/css/Weather.css'; // Make sure your CSS file exists

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "436bee77bab64b479be40d6c51a179c6"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSearch} className="weather-form">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
          className="weather-input"
        />
        <button type="submit" className="weather-button">
          Search
        </button>
      </form>

      {error && <div className="weather-error">{error}</div>}

      {weather && (
        <div className="weather-card">
          <h3>{weather.name}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

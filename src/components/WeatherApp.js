
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css";

const API_KEY = "927cd415b7a8995cab7fc812c74d7d5a"; // Replace with your API key
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [humidity, setHumidity] = useState(null); // State for humidity

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (city.trim() === "") return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
        setHumidity(response.data.main.humidity); // Set humidity from the API response
      } catch (error) {
        setError("Error fetching weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {humidity}%</p>
          <img
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

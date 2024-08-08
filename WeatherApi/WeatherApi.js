import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApi.css"; // Import the CSS file

const API_KEY = "835c0a7e0e1292930fecd8c5a69bf327"; // Replace with your OpenWeatherMap API key
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function WeatherApi() {
  const [city, setCity] = useState("New York"); // Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_BASE_URL, {
          params: {
            q: city,
            units: "metric",
            appid: API_KEY,
          },
        });
        setWeather(response.data);
      } catch (err) {
        setError("Error fetching weather data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-api">
      <form>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default WeatherApi;

// src/components/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const WeatherWidget = () => {
  const [city, setCity] = useState('Nagpur');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '2abfcf251dc228a6918f29e5994cb9a6';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-widget">
      <div className="clouds"></div> {/* Background cloud animation */}
      <form className="city-form">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className="city-input"
        />
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && (
        <div className="weather-info">
          <h2 className="city-name">{weather.name}</h2>
          <p className="weather-description">{weather.weather[0].description}</p>
          <p className="temperature">Temperature: {weather.main.temp}°C</p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;

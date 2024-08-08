import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherGrid.css';

const WeatherWidget = () => {
  const [city, setCity] = useState('goa');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgClass, setBgClass] = useState('default'); // Background class for weather conditions

  const API_KEY = '2552ba1aec4fcb5ddea53666ede991c4';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        
        // Set background class based on weather condition
        const mainWeather = response.data.weather[0].main.toLowerCase();
        if (mainWeather.includes('cloud')) {
          setBgClass('cloudy');
        } else if (mainWeather.includes('rain')) {
          setBgClass('rainy');
        } else if (mainWeather.includes('clear')) {
          setBgClass('clear');
        } else {
          setBgClass('default');
        }
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
    <div className={`weather-widget ${bgClass}`}>
      <div className="clouds"></div>
      <form className="city-form" onSubmit={(e) => { e.preventDefault(); }}>
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
          <p className="humidity">Humidity: {weather.main.humidity}%</p>
          <p className="wind-speed">Wind Speed: {weather.wind.speed} m/s</p>
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
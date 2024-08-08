import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [city, setCity] = useState('Nagpur');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '76964828752ab79acc69fa0a0ff86c10';
  
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        setWeather(response.data);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Weather App</h1>
      </header>
      <div className="main-content">
        <aside>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </aside>
        <div className="weather-widget">
          <form>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city"
            />
          </form>

          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {weather && (
            <div>
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
      </div>
    </div>
  );
};

export default WeatherWidget;

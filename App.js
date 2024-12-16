 // src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '4e3a2ea61cf3e28e3d163a9e9a472aa5'; //  My OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setError('Error: No response from server');
      } else {
        setError(`Error: ${error.message}`);
      }
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Report App</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Enter City Name...."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather Report</button>
        {error && <p className="error">{error}</p>}
        {weather && (
          <div className="weather-card">
            <h2>{weather.name}</h2>
            <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
            <p><strong>Condition:</strong> {weather.weather[0].description}</p>
            <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> {weather.wind.speed} km/h</p>
          </div>
        )}
      </div>
      <footer className="App-footer">
        <p>Weather Report Application &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;

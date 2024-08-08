import React, { useState, useEffect } from 'react';
import './WeatherWidget.css'; // Import the CSS file for styling

const WeatherWidget = () => {
  const [city, setCity] = useState('New York'); // Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(''); // State for background image

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = '6607c0ea8322559a0e04e384902344c7'; // Replace with your OpenWeatherMap API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
        setBackgroundImageBasedOnTemperature(data.main.temp); // Set background image based on temperature
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Function to set background image based on temperature
  const setBackgroundImageBasedOnTemperature = (temp) => {
    if (temp <= 0) {
      setBackgroundImage('url("https://example.com/cold-background.jpg")'); // Replace with cold weather image
    } else if (temp > 0 && temp <= 20) {
      setBackgroundImage('url("https://example.com/mild-background.jpg")'); // Replace with mild weather image
    } else {
      setBackgroundImage('url("https://example.com/warm-background.jpg")'); // Replace with warm weather image
    }
  };

  return (
    <div className="weather-container" style={{ backgroundImage }}>
      <div className="weather-box">
        <h1 className="weather-app-title">Weather App</h1> {/* Add title */}
        <form>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
            className="city-input"
          />
        </form>

        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {weather && (
          <>
            <h2 className="city-name">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/map-marker.png" alt="Map icon" />
              {weather.name}
            </h2>
            <p className="temperature">{Math.round(weather.main.temp)}&#8451;</p>
            <p className="weather-description">{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather icon"
              className="weather-icon"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;

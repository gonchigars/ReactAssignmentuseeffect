import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [city, setCity] = useState('London'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '077a44946a3e4b791b3c3d9d848f5475'; // Your OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="city" placeholder="Enter city" value={city} onChange={handleCityChange} />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp}°C</p>
          <img
            src={'https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png'}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
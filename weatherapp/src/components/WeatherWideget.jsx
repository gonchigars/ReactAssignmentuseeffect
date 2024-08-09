import "./WeatherWidget.css";
import { getWeather } from "../API/api";
import React, { useState } from 'react';

export default function WeatherWidget() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const weatherData = await getWeather(city);

      if (weatherData.cod === "404") {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(weatherData);
      }
    } catch (err) {
      setError("Error fetching weather data");
      setWeather(null);
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <div className="WeatherWidget">
      <div className="searchbar">
        <input
          className="input"
          value={city}
          onChange={handleCityChange}
          type="text"
          placeholder="Enter City Name"
        />
        <button className="searchbutton" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        {loading && <div>Please Wait While Loading...</div>}
        {error && <div>{error}</div>}
        {weather && (
          <div className="name">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

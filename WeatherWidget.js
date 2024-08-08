import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, CircularProgress, Paper } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CloudIcon from '@mui/icons-material/Cloud';

function WeatherWidget() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6f7a55c963dfecd0c5f19cdb68626366&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case '01d':
      case '01n':
        return <WbSunnyIcon sx={{ fontSize: 60, color: '#FFD700' }} />;
      case '09d':
      case '09n':
        return <UmbrellaIcon sx={{ fontSize: 60, color: '#1E90FF' }} />;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <CloudIcon sx={{ fontSize: 60, color: '#A9A9A9' }} />;
      default:
        return <WbSunnyIcon sx={{ fontSize: 60, color: '#FFD700' }} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <Paper sx={{ padding: 3, textAlign: 'center', maxWidth: 400 }}>
        <form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
          <TextField
            label="Enter City"
            variant="outlined"
            value={city}
            onChange={handleCityChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Get Weather
          </Button>
        </form>

        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {weather && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            {renderWeatherIcon(weather.weather[0].icon)}
            <Typography variant="h4">{weather.name}</Typography>
            <Typography variant="h6">{weather.weather[0].description}</Typography>
            <Typography variant="h5">Temperature: {weather.main.temp}°C</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default WeatherWidget;

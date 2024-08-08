import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, TextField, Button } from '@mui/material';

const API_KEY = '563a1218c949deb48d5d8af4144e79e2'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric', 
          },
        });
        setWeather(response.data);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', color: 'red' }}>
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (!weather) {
    return <Typography variant="h6">Enter a city to get the weather information</Typography>;
  }

  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
      <Typography variant="h6">{weather.name}</Typography>
      <Typography variant="h4">{Math.round(weather.main.temp)}°C</Typography>
      <Typography variant="body1">{weather.weather[0].description}</Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        style={{ width: 50, height: 50 }}
      />
      <Box sx={{ marginTop: 2 }}>
        <TextField
          label="City"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default WeatherWidget;

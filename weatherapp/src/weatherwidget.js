import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';


function WeatherWidget() {
  const [city, setCity] = useState('Hyderabad');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = 'e1e65d12b7eb964c116162369dc60e02';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString(); // Adjust format as needed
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '10px', sm: '20px' }, // Responsive padding
        maxWidth: '400px',
        margin: '0 auto',
        
      }}
    >
      <Box
        component="form"
        sx={{
          width: '100%',
          marginBottom: '20px',
          border:'1.5px solid black'
          
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          sx={{
            fontSize: '16px',
            
            
          }}
        />
      </Box>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {weather && !loading && !error && (
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontSize: { xs: '20px', sm: '24px' } }}>
            {weather.name}
          </Typography>
          <Typography sx={{paddingTop:1}} >Date : {getCurrentDate()} </Typography>
          <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
            {weather.weather[0].description}
          </Typography>
          <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
            Temperature: {weather.main.temp}°C
          </Typography>
          <Typography>
                Wind Speed: {weather.wind.speed}m/s
                    </Typography>
        
          <Box
            component="img"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
            sx={{ maxWidth: { xs: '80px', sm: '100px' }, height: 'auto' }}
          />
        </Box>
      )}
    </Box>
  );
}

export default WeatherWidget;

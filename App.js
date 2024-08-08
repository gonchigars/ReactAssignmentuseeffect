import React, { useState } from 'react';
import { Box, CssBaseline, Typography, TextField, Button } from '@mui/material';
import ButtonAppBar from './components/AppBar';
import Sidebar from './components/Sidebar'; 
import WeatherWidget from './components/WeatherWidget'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [city, setCity] = useState('Hyderabad'); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ButtonAppBar toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: sidebarOpen ? `calc(100% - 240px)` : '100%' },
          transition: 'width 0.3s',
          marginTop: '64px', 
          marginLeft: { sm: sidebarOpen ? '240px' : '0', xs: '0' },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to FindWeather
        </Typography>
        <TextField
          label="City"
          value={city}
          onChange={handleCityChange}
        />
        <Button onClick={() => setCity(city)}>Search</Button>
        <WeatherWidget city={city} />
      </Box>
    </Box>
  );
}

export default App;

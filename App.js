import React, { useState } from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import ButtonAppBar from '../../ReactAssignmentuseeffect/components/AppBar';  
import Sidebar from '../../ReactAssignmentuseeffect/components/Sidebar'; 
import WeatherWidget from '../../ReactAssignmentuseeffect/components/WeatherWidget'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <WeatherWidget city="London" /> {/* Example city */}
      </Box>
    </Box>
  );
}

export default App;

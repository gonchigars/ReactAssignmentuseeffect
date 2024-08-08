import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ButtonAppBar = ({ toggleSidebar }) => {
  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginClick = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Sunrise/Sunset gradient
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FindWeather
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <Button color="inherit" onClick={handleLoginClick}>
            <AccountCircle sx={{ marginRight: 1 }} />
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
          <Button onClick={handleCloseLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonAppBar;

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({ handleDrawerToggle }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1565c0' }}>
        <Toolbar>
          {/* Optional: Add a logo or menu icon here */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <img src="/path/to/logo.png" alt="logo" style={{ width: 40 }} /> {/* Add your logo here */}
          </IconButton>

          {/* Centered Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              letterSpacing: 1.5,
            }}
          >
            Weather Radar
          </Typography>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'white' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search city or temperature..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Settings Button */}
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

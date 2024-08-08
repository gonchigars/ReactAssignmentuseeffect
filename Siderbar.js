import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import CloudIcon from "@mui/icons-material/Cloud";

const drawerWidth = 280; // Increased width for better spacing

function ResponsiveDrawer({ mobileOpen, handleDrawerToggle }) {
  const drawer = (
    <Box sx={{ padding: 2 }}>
      <Toolbar /> {/* Spacer */}
      
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Navigation
      </Typography>

      <List>
        {["Countries", "Cities", "Places"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary" /> : <MailIcon color="secondary" />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ marginY: 2 }} />

      {/* Weather Information Section */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Weather
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <WbSunnyIcon sx={{ color: "#FFD700" }} /> {/* Sunny icon with gold color */}
          </ListItemIcon>
          <ListItemText primary="Sunny" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <UmbrellaIcon sx={{ color: "#1E90FF" }} /> {/* Rainy icon with dodger blue color */}
          </ListItemIcon>
          <ListItemText primary="Rainy" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CloudIcon sx={{ color: "#A9A9A9" }} /> {/* Cloudy icon with dark gray color */}
          </ListItemIcon>
          <ListItemText primary="Cloudy" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, backgroundColor: "#f4f4f9" }, // Subtle background color
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}

export default ResponsiveDrawer;

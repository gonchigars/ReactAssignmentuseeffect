import React, { useState } from 'react';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const Sidebar = ({ open, onOpen, onClose }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const weatherMenuItems = [
    { text: 'Today Weather', icon: <TodayIcon />, color: '#4caf50' },
    { text: 'Yesterday Weather', icon: <HistoryIcon />, color: '#f44336' },
    { text: 'Tomorrow Weather', icon: <CalendarTodayIcon />, color: '#2196f3' },
  ];

  const settingsMenuItems = [
    { text: 'About', icon: <InfoIcon />, color: '#ffffff' },
    { text: 'Help', icon: <HelpIcon />, color: '#ffffff' },
  ];

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)', // Sunrise/Sunset gradient
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        <List>
          {weatherMenuItems.map((item) => (
            <ListItem button key={item.text} onClick={onClose}>
              <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: '#ffffff' }} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
      </Box>
      <Box>
        <List>
          <ListItem button onClick={handleSettingsClick}>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: '#ffffff' }} />
            {settingsOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
          </ListItem>
          <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {settingsMenuItems.map((item) => (
                <ListItem button key={item.text} sx={{ pl: 4 }} onClick={onClose}>
                  <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: '#ffffff' }} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default Sidebar;

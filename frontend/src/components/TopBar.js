// frontend/src/components/TopBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu, Notifications, AccountCircle, ExitToApp } from '@mui/icons-material';

const TopBar = ({ toggleLeftNavBar }) => {
  const [leftNavBarOpen, setLeftNavBarOpen] = useState(true);

  const handleToggleLeftNavBar = () => {
    setLeftNavBarOpen(!leftNavBarOpen);
    toggleLeftNavBar(!leftNavBarOpen);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleToggleLeftNavBar}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Top Bar
        </Typography>
        <div>
          {/* Notifications Icon */}
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          
          {/* Profile Icon - You can replace 'user.jpg' with the actual path to the user's profile picture */}
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

          {/* Logout Icon */}
          <IconButton color="inherit">
            <ExitToApp />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

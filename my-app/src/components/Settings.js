// Settings.js
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Settings({ toggleDarkMode, isDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { toggleDarkMode(); handleClose(); }}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} 
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Settings

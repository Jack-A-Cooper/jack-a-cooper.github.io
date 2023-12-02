// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledAppBar,
  StyledToolbar,
  StyledMenuButton,
  StyledNavButtons,
  StyledDrawerContent,
  StyledPaddingTop
} from './HeaderStyles';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <StyledDrawerContent>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/About" onClick={handleDrawerToggle}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/Demos" onClick={handleDrawerToggle}>
          <ListItemText primary="Demos" />
        </ListItem>
        <ListItem button component={Link} to="/Projects" onClick={handleDrawerToggle}>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/Music" onClick={handleDrawerToggle}>
          <ListItemText primary="Music" />
        </ListItem>
        <ListItem button component={Link} to="/Blog" onClick={handleDrawerToggle}>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/Contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </StyledDrawerContent>
  );

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <Typography variant="h6" sx={{ alignSelf: 'center' }}>
            Jack Alexander Cooper
          </Typography>
          <StyledNavButtons>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/About">About</Button>
            <Button color="inherit" component={Link} to="/Demos">Demos</Button>
            <Button color="inherit" component={Link} to="/Projects">Projects</Button>
            <Button color="inherit" component={Link} to="/Music">Music</Button>
            <Button color="inherit" component={Link} to="/Blog">Blog</Button>
            <Button color="inherit" component={Link} to="/Contact">Contact</Button>
          </StyledNavButtons>
          <StyledMenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledMenuButton>
        </StyledToolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>
      <StyledPaddingTop></StyledPaddingTop> {}
    </>
  );
}

export default Header;

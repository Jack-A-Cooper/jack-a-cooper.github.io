// Header.js
import React, { useState } from 'react';
import { Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import {
  StyledAppBar,
  StyledToolbar,
  StyledMenuButton,
  StyledNavButtons,
  StyledDrawerContent,
  StyledPaddingTop,
  StyledNavLink,
  StyledNavLinkBar,
} from './HeaderStyles';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <StyledDrawerContent>
      <List>
         <StyledNavLinkBar to="/" isActive={isActive('/')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </StyledNavLinkBar>
         <StyledNavLinkBar to="/About" isActive={isActive('/About')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
        </StyledNavLinkBar>
         <StyledNavLinkBar to="/Demos" isActive={isActive('/Demos')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Demos" />
          </ListItem>
        </StyledNavLinkBar>
        <StyledNavLinkBar to="/Projects" isActive={isActive('/Projects')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
        </StyledNavLinkBar>
         <StyledNavLinkBar to="/Music" isActive={isActive('/Music')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Music" />
          </ListItem>
        </StyledNavLinkBar>
        <StyledNavLinkBar to="/Blog" isActive={isActive('/Blog')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Blog" />
          </ListItem>
        </StyledNavLinkBar>
          <StyledNavLinkBar to="/Contact" isActive={isActive('/Contact')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </StyledNavLinkBar>
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
            <StyledNavLink component={Link} to="/" isActive={isActive('/')}>
              Home
            </StyledNavLink>
            <StyledNavLink component={Link} to="/About" isActive={isActive('/About')}>
              About
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Demos" isActive={isActive('/Demos')}>
              Demos
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Projects" isActive={isActive('/Projects')}>
              Projects
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Music" isActive={isActive('/Music')}>
              Music
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Blog" isActive={isActive('/Blog')}>
              Blog
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Contact" isActive={isActive('/Contact')}>
              Contact
            </StyledNavLink>
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

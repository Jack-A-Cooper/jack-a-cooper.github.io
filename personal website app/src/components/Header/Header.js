// Header.js
import { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, } from '@mui/material';
import { ColorModeContext } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
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
import { 
  AppTitleName,
  StyledButton,
} from '../Styles';

function Header({ toggleDarkMode, isDarkMode }) {
  const colorMode = useContext(ColorModeContext);
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
        <StyledNavLinkBar to="/Projects" isActive={isActive('/Projects')} onClick={handleDrawerToggle}>
          <ListItem button>
            <ListItemText primary="Projects" />
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
      <StyledButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ marginLeft: 'auto' }}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </StyledButton>
    </StyledDrawerContent>
  );

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <AppTitleName>
            Jack Alexander Cooper
          </AppTitleName>
          <StyledNavButtons>
            <StyledNavLink component={Link} to="/" isActive={isActive('/')}>
              Home
            </StyledNavLink>
            <StyledNavLink component={Link} to="/About" isActive={isActive('/About')}>
              About
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Projects" isActive={isActive('/Projects')}>
              Projects
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Blog" isActive={isActive('/Blog')}>
              Blog
            </StyledNavLink>
            <StyledNavLink component={Link} to="/Contact" isActive={isActive('/Contact')}>
              Contact
            </StyledNavLink>
            <StyledButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ marginLeft: 'auto' }}>
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </StyledButton>
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

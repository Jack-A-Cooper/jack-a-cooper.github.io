// HeaderStyles.js
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1),
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
      display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
      display: 'flex',
  },
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
      display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
      display: 'none',
  },
  
  position: 'absolute',
  left: theme.spacing(2),
  top: theme.spacing(1),
}));

export const StyledNavButtons = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
      display: 'block',
  },
  alignSelf: 'center',
}));

export const StyledDrawerContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(7),
      display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(9),
      display: 'none',
  },
}));

export const StyledPaddingTop = styled('div')({
  paddingTop: 64,
});

export const StyledNavLinkBar = styled(({ isActive, ...otherProps }) => <RouterLink {...otherProps} />)(({ theme, isActive }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '& .MuiListItem-root': {
    backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
  },
  '&:hover': {
       background: theme.palette.primary.contrastText,
       color: theme.palette.primary.main,
    },
}));

export const StyledNavLink = styled(Button)(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main  : theme.palette.primary.contrastText,
  background: isActive ? theme.palette.primary.contrastText : 'none',
  '&:hover': {
       background: theme.palette.primary.contrastText,
       color: theme.palette.primary.main,
    },
}));

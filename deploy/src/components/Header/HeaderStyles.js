// HeaderStyles.js
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 120;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
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
      marginTop: theme.spacing(5),
      display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      display: 'none',
  },
}));

export const StyledPaddingTop = styled('div')({
  paddingTop: 64,
});

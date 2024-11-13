// FooterStyles.js
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#ABB0B8' : theme.palette.primary.main,
  color: theme.palette.mode === 'dark' ? theme.palette.getContrastText('#fff') : theme.palette.getContrastText('#008080'),
  boxShadow: theme.palette.mode === 'dark' ? '0px -2px 4px rgba(0, 0, 0, 0.25)' : 'none',
}));
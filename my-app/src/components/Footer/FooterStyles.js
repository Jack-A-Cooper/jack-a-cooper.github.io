// FooterStyles.js
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}));
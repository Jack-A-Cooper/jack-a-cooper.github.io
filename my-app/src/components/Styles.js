// Styles.js
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Link } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import { Grid, Paper } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';

// Theme styles (for ease of reference)

// Section styles

// Section Container style
export const SectionContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  margin: '0 auto',
  margintop: '120px',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
}));

// Container styles

// Container style
export const ContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  margin: '0 auto',
}));

// Center Container style
export const CenterContainerBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Left Container style
export const LeftJustifiedContainerBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
}));

// Unique Typography styleSheets

// App Title Name Typography style
export const AppTitleName = styled(Typography)(({ theme }) => ({
  fontSize: '3rem', // Default font size for larger screens
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '12px',
  marginBottom: theme.spacing(2),
  fontFamily: '"Montserrat", sans-serif',
  color: theme.palette.mode === 'dark' ? 'black' : theme.palette.primary.contrastText,
  textShadow: theme.palette.mode === 'dark' ? `1px 2px 1px black` : `1px 2px 1px black`,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.5rem',
  },
  fontColor: '#6F7378',
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
  maxWidth: '100%',
}));

// Header Typography styles

// Header Typography style (H1)
export const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '12px',
  [theme.breakpoints.down('md')]: {
    fontSize: '6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
  },
  marginBottom: theme.spacing(2),
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#ABB0B8' : 'black'}`,
  fontFamily: '"Montserrat", sans-serif',
  maxWidth: '100%',
}));

// SubHeader Typography style (H2)

export const SubHeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '2px',
  marginBottom: theme.spacing(1),
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : '#5D4C54',
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#6F7378' : 'black'}`,
  textShadow: theme.palette.mode === 'dark' ? `2px 2px 0px ${theme.palette.grey[600]}` : `2px 2px 0px ${theme.palette.grey[150]}`,
  maxWidth: '75%',
}));

// SubHeader Typography Two style (H3)

export const SubHeaderTypographyTwo = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  textAlign: 'center',
  paddingBottom: '1px',
  marginBottom: theme.spacing(1),
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.5rem',
  },
  color: theme.palette.mode === 'dark' ? '#ABB0B8' : '#CC9966',
  borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'white' : '#ABB0B8'}`,
  maxWidth: '75%',
}));

// Paragraph Typography styles

// Paragraph Typography style
export const ParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  marginBottom: theme.spacing(2),
  maxWidth: '75%',
}));

// Backgrounded Paragraph Typography style
export const BackgroundedParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '666',
  display: 'inline-block',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? '#ABB0B8' : 'white',
  color: theme.palette.mode === 'dark' ? 'black' : 'black',
  maxWidth: '75%',
}));

// Left Justified and Backgrounded Paragraph Typography style
export const LeftJustifiedBackgroundedParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? '#ABB0B8' : 'white',
  color: theme.palette.mode === 'dark' ? 'black' : 'black',
  textAlign: 'left',
  maxWidth: '75%',
}));

export const CenteredParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  maxWidth: '75%',
}));

// Link style
export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'black',
  fontSize: '1rem',
  padding: theme.spacing(1),
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#00ff8c' : '#ffcb00',
  },
  maxWidth: '75%',
}));

// Button styleSheets

// Styled Button style
export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.mode === 'dark' ? '#ABB0B8' : 'black',
  backgroundColor: theme.palette.mode === 'dark' ? 'blue' : '#ABB0B8',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#ABB0B8' : '#ABB0B8'}`,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    color: theme.palette.mode === 'dark' ? 'blue' : '#6F7378',
  },
  transition: theme.transitions.create(['background-color', 'color', 'border'], {
    duration: theme.transitions.duration.short,
  }),
  maxWidth: '75%',
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0.5),
  },
}));

// Image and Image Container styles

// Image Grid style
export const ImageContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Image style
export const StyledImage = styled('img')(({ theme }) => ({
  display: 'flex',
  width: 'auto',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

// Large Image style
export const LargeStyledImage = styled('img')(({ theme }) => ({
  display: 'flex',
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.palette.mode === 'dark' ? theme.shadows[10] : theme.shadows[8],
  border: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : 'black'}`,
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// List and List Item styles

// Styled List
export const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.mode === 'dark' ? '#949494' : 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  maxWidth: '100%',
}));

// Styled List Item
export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  border: `2px solid ${theme.palette.mode === 'dark' ? '#ABB0B8' : 'black'}`,
  backgroundColor: theme.palette.mode === 'dark' ? '#ABB0B8' : '#ABB0B8',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1, 0),
  maxWidth: '100%',
}));

// Centered Styled List Item
export const CenteredStyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  border: `4px solid ${theme.palette.mode === 'dark' ? '#ABB0B8' : '#ABB0B8'}`,
  fontcolor: '#ABB0B8',
  backgroundColor: theme.palette.mode === 'dark' ? '#ABB0B8' : '#ABB0B8',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1, 0),
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '100%',
}));

// Styled List Item Text
export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.mode === 'dark' ? '#949494' : theme.palette.background.default,
  '& .MuiListItemText-primary': {
    fontWeight: 600,
  },
  maxWidth: '100%',
}));

// Specific page styles
export const HomePageStyles = {
  backgroundColor: theme => theme.palette.mode === 'dark' ? theme.palette.background.dark : theme.palette.background.light,
};

export const AboutPageStyles = {
  // Add styles specific to About.js here
};

export const BlogPageStyles = {
  // Add styles specific to Blog.js here
};

export const ContactPageStyles = {
  // Add styles specific to Contact.js here
};

export const DemosPageStyles = {
  // Add styles specific to Demos.js here
};

export const MusicPageStyles = {
  // Add styles specific to Music.js here
};

export const ProjectsPageStyles = {
  // Add styles specific to Projects.js here
};

// Styles.js
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Link } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import { Grid, Paper } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';

// Theme styles (for ease of reference)

// Primary - Blue
export const themeColorPrimary = (({ theme }) => ({
  color: theme.palette.primary.main,
}));

// Secondary - Purple
export const themeColorSecondary = (({ theme }) => ({
  color: theme.palette.secondary.main,
}));

// Contrast - White
export const themeColorContrast = (({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

// Dark Primary - Deep Orange
export const themeColorDarkPrimary = (({ theme }) => ({
  color: '#FC440F',
}));

// Section styles

// Section Container style
export const SectionContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12),
  maxWidth: '1200px',
  margin: '0 auto',
}));

// Container styles

// Container style
export const ContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '1200px',
  margin: '0 auto',
}));

// Center Container style
export const CenterContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Left Container style
export const LeftJustifiedContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '100%',
  margin: '0 auto',
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
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
  fontColor: '#8b00ff',
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
}));

// Header Typography styles

// Header Typography style (H1)
export const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '12px',
  marginBottom: theme.spacing(2),
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#FC440F' : 'black'}`,
  fontFamily: '"Montserrat", sans-serif',
}));

// SubHeader Typography style (H2)

export const SubHeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '2px',
  marginBottom: theme.spacing(1),
  display: 'inline-block',
  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : '#FC440F',
  borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#FC440F' : 'black'}`,
  textShadow: theme.palette.mode === 'dark' ? `2px 2px 0px ${theme.palette.grey[600]}` : `2px 2px 0px ${theme.palette.grey[150]}`,
}));

// SubHeader Typography Two style (H3)

export const SubHeaderTypographyTwo = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  textAlign: 'center',
  paddingBottom: '1px',
  marginBottom: theme.spacing(1),
  display: 'inline-block',
  color: theme.palette.mode === 'dark' ? '#FC440F' : '#8b00ff',
  borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'white' : '#FC440F'}`,
}));

// Paragraph Typography styles

// Paragraph Typography style
export const ParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  marginBottom: theme.spacing(2),
}));

// Backgrounded Paragraph Typography style
export const BackgroundedParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '666',
  display: 'inline-block',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? '#FC440F' : 'white',
  color: theme.palette.mode === 'dark' ? 'black' : 'black',
}));

// Left Justified and Backgrounded Paragraph Typography style
export const LeftJustifiedBackgroundedParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  display: 'inline-block',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? '#FC440F' : 'white',
  color: theme.palette.mode === 'dark' ? 'black' : 'black',
  textAlign: 'left',
}));

export const CenteredParagraphTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

// Link style
export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'black',
  fontSize: '1rem',
  padding: theme.spacing(1),
  fontWeight: 'bold',
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#00ff8c' : '#ffcb00',
  },
}));

// Button styleSheets

// Styled Button style
export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.mode === 'dark' ? '#FC440F' : 'black',
  backgroundColor: theme.palette.mode === 'dark' ? 'gold' : '#FC440F',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#ffcb00' : '#FC440F'}`,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    color: theme.palette.mode === 'dark' ? 'blue' : '#FC440F',
  },
  transition: theme.transitions.create(['background-color', 'color', 'border'], {
    duration: theme.transitions.duration.short,
  }),
}));

// Image and Image Container styles

// Image Grid style
export const ImageContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Image style
export const StyledImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  maxWidth: '50%',
  maxHeight: '100%',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.palette.mode === 'dark' ? theme.shadows[10] : theme.shadows[8],
  border: `4px solid ${theme.palette.mode === 'dark' ? '#ffcb00' : 'black'}`,
}));

// Large Image style
export const LargeStyledImage = styled('img')(({ theme }) => ({
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
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

// Styled List Item
export const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: `2px solid ${theme.palette.mode === 'dark' ? '#FC440F' : 'black'}`,
  backgroundColor: theme.palette.mode === 'dark' ? '#ff00f2' : '#FC440F',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1, 0),
}));

// Centered Styled List Item
export const CenteredStyledListItem = styled(ListItem)(({ theme }) => ({
  border: `4px solid ${theme.palette.mode === 'dark' ? '#FC440F' : '#ffcb00'}`,
  fontcolor: '#ffcb00',
  backgroundColor: theme.palette.mode === 'dark' ? '#ffcb00' : '#FC440F',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1, 0),
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styled List Item Text
export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
  '& .MuiListItemText-primary': {
    fontWeight: 600,
  },
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

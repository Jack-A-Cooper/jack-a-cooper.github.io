// Contact.js
import React from 'react';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    CenterContainerBox,
    ImageContainer,
    HeaderTypography,
    SubHeaderTypography,
    ParagraphTypography,
    BackgroundedParagraphTypography,
    LeftJustifiedBackgroundedParagraphTypography,
    StyledLink,
    StyledImage,
    ContactPageStyles,
    SectionContainerBox,
    LargeStyledImage,
    LeftJustifiedContainerBox,
    StyledList,
    StyledListItem,
    StyledListItemText,
    CenteredStyledListItem,
    SubHeaderTypographyTwo,
} from './Styles';

const Contact = () => {
  return (
    <Box sx={ContactPageStyles}>
      <SectionContainerBox>
        <ContainerBox>
            <HeaderTypography>Contact Me</HeaderTypography>
        </ContainerBox>
        <CenterContainerBox>
          <BackgroundedParagraphTypography>I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</BackgroundedParagraphTypography>
        </CenterContainerBox>
        <SubHeaderTypography>Get In Touch!</SubHeaderTypography>
        <ContainerBox>
          <StyledList>
            <CenteredStyledListItem>Email: <a href="mailto:Jack_cooper01@yahoo.com">Jack_cooper01@yahoo.com</a></CenteredStyledListItem>
            <CenteredStyledListItem>LinkedIn: <a href="https://www.linkedin.com/in/jackcoop" rel="noreferrer" target="_blank">LinkedIn</a></CenteredStyledListItem>
            <CenteredStyledListItem>GitHub: <a href="https://github.com/Jack-A-Cooper" rel="noreferrer" target="_blank">Github</a></CenteredStyledListItem>
          </StyledList>
        </ContainerBox>
        <SubHeaderTypography>Connect With Me!</SubHeaderTypography>
          <CenterContainerBox>
            <BackgroundedParagraphTypography>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to connect with me on any of the platforms above, or just drop me a line here. I'll get back to you as soon as possible!</BackgroundedParagraphTypography>
          </CenterContainerBox>
     </SectionContainerBox>
    </Box>
  );
}

export default Contact;

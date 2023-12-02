// About.js
import React from 'react';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } from '../images/me';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    CenterContainerBox,
    HeaderTypography,
    SubHeaderTypography,
    ParagraphTypography,
    BackgroundedParagraphTypography,
    StyledLink,
    StyledImage,
    HomePageStyles,
    SectionContainerBox,
} from './Styles';

const About = () => {
  return (
    <Box sx={HomePageStyles}>
      <SectionContainerBox>
        <HeaderTypography>About Me!</HeaderTypography>
        <ContainerBox>
          <BackgroundedParagraphTypography>I'm a graduate from UC Santa Cruz, where my passion for computer science truly took flight. It was here that I immersed myself in the fascinating intricacies of core CS subjects, while also getting my hands dirty with a variety of exciting projects.
             My journey in computer science has been nothing short of thrilling, with each day bringing a new challenge and opportunity for growth. Since graduating, I have continued to learn and delve into the world of CS. I am particularly enthralled by the realms of
             automation and problem-solving, and have a burgeoning interest in artificial intelligence - a field that constantly amazes and inspires me.
             But life isn't all about algorithms and code. When I'm not in front of a computer, you can find me engrossed in cooking, messing around on the decks, or binging some show. I believe in the power of creativity and continuous learning, and strive to infuse this 
             ethos into every aspect of my life.
             I'm excited to embark on this next chapter, applying the skills and insights I've gained to make a tangible impact in the world of tech and beyond.
          </BackgroundedParagraphTypography>
        </ContainerBox>
        <ContainerBox>
          <CenterContainerBox>
            <StyledImage src={p1} alt=" "/>
            <StyledImage src={p2} alt=" "/>
            <StyledImage src={p3} alt=" "/>
          </CenterContainerBox>
          <CenterContainerBox>
            <StyledImage src={p4} alt=" "/>
            <StyledImage src={p5} alt=" "/>
            <StyledImage src={p6} alt=" "/>
          </CenterContainerBox>
          <CenterContainerBox>
            <StyledImage src={p7} alt=" "/>
            <StyledImage src={p8} alt=" "/>
            <StyledImage src={p9} alt=" "/>
          </CenterContainerBox>
          <CenterContainerBox>
            <StyledImage src={p10} alt=" "/>
            <StyledImage src={p11} alt=" "/>
            <StyledImage src={p12} alt=" "/>
          </CenterContainerBox>
        </ContainerBox>
      </SectionContainerBox>
    </Box>
  );
}

export default About;

// About.js
import React from 'react';
import { p1, p2, p3 } from '../images/me';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    CenterContainerBox,
    ImageContainer,
    HeaderTypography,
    BackgroundedParagraphTypography,
    StyledImage,
    AboutPageStyles,
    SectionContainerBox,
} from './Styles';

const About = () => {
  return (
    <Box sx={AboutPageStyles}>
      <SectionContainerBox>
        <ContainerBox>
            <HeaderTypography>About Me!</HeaderTypography>
        </ContainerBox>
        <ContainerBox>
          <BackgroundedParagraphTypography>I'm a graduate from UC Santa Cruz, where my passion for computer science truly took flight. It was here that I immersed myself in the fascinating intricacies of core CS subjects, while also getting my hands dirty with a variety of exciting projects.
             My journey in computer science has been nothing short of thrilling, with each day bringing a new challenge and opportunity for growth. Since graduating, I have continued to learn and delve into the world of CS. I am particularly enthralled by the realms of
             automation and problem-solving, and have a burgeoning interest in artificial intelligence - a field that constantly amazes and inspires me.
             But life isn't all about algorithms and code. When I'm not in front of a computer, you can find me engrossed in cooking, messing around on the decks, or binging some show. I believe in the power of creativity and continuous learning, and strive to infuse this 
             ethos into every aspect of my life.
             I'm excited to embark on this next chapter, applying the skills and insights I've gained to make a tangible impact in the world of tech and beyond.
          </BackgroundedParagraphTypography>
        </ContainerBox>
        <CenterContainerBox>
          <ImageContainer>
            <StyledImage src={p1} alt=" "/>
            <StyledImage src={p2} alt=" "/>
            <StyledImage src={p3} alt=" "/>
          </ImageContainer>
        </CenterContainerBox>
      </SectionContainerBox>
    </Box>
  );
}

export default About;

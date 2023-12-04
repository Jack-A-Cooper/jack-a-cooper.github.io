// Demos.js
import React from 'react';
import { cImg1, cImg2 } from '../images/content';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    CenterContainerBox,
    ImageContainer,
    HeaderTypography,
    SubHeaderTypography,
    ParagraphTypography,
    BackgroundedParagraphTypography,
    StyledLink,
    StyledImage,
    DemosPageStyles,
    SectionContainerBox,
    LargeStyledImage,
} from './Styles';

const Demos = () => {
  return (
    <Box sx={DemosPageStyles}>
      <SectionContainerBox>
      <ContainerBox>
        <HeaderTypography>Project Demos</HeaderTypography>
      </ContainerBox>
        <ContainerBox>
          <BackgroundedParagraphTypography>Coming soon... Will hopefully have some (preferably) hands-on demos or visual treats to play around with that I've worked on! Might also provide demos in video format with narration if the context requires it.</BackgroundedParagraphTypography>
          <BackgroundedParagraphTypography>In the meantime, feel free to check out these diagrams I created. The first is my take on streamlining the Best Buy home theater department workflow and converting it to a cpu flowchart! (I was terribly bored).</BackgroundedParagraphTypography>
          <BackgroundedParagraphTypography>The second is a conceptual system design mockup for an Amazon service. At least my attempt to apply my knowledge and make a pretty technical diagram at the same time.</BackgroundedParagraphTypography>
        </ContainerBox>
          <LargeStyledImage src={cImg1} alt=" "/>
          <LargeStyledImage src={cImg2} alt=" "/>
      </SectionContainerBox>
    </Box>
  );
}

export default Demos;


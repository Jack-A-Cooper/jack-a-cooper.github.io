// Home.js
import React from 'react';
import { p1 } from '../images/me';
import { professionalResume, generalResume } from '../resources/resumes';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    HeaderTypography,
    SubHeaderTypography,
    BackgroundedParagraphTypography,
    StyledLink,
    StyledImage,
    HomePageStyles,
    SectionContainerBox,
} from './Styles';

const Home = () => {
  return (
    <Box sx={HomePageStyles}>
        <SectionContainerBox>
            <ContainerBox>
                <HeaderTypography>Home Page</HeaderTypography>
            </ContainerBox>
            <ContainerBox>
                <StyledImage src={p1} alt=" " />
            </ContainerBox>
            <ContainerBox>
                <SubHeaderTypography>Summary</SubHeaderTypography>
            </ContainerBox>
            <ContainerBox>
                <BackgroundedParagraphTypography>
                    As a Computer Science graduate from the University of California, Santa Cruz, I am actively seeking job opportunities where I can apply and
                    expand my technical skills. While I have a strong foundation in programming languages like C, C++, and Python, I am currently honing my skills in
                    AI and machine learning, evident in my ongoing personal projects. My experience includes developing innovative software solutions and enhancing existing
                    systems with a focus on efficiency and user experience. Beyond technical skills, my roles in customer service have sharpened my communication and
                    problem-solving abilities, making me a well-rounded candidate for technology-focused positions.
                </BackgroundedParagraphTypography>
            </ContainerBox>
            <ContainerBox>
            <SubHeaderTypography>Work History/Resumes</SubHeaderTypography>
            </ContainerBox>
            <BackgroundedParagraphTypography>
                <StyledLink href={professionalResume} rel="noreferrer" target="_blank">
                    <div>Professional Resume</div>
                </StyledLink>
                <StyledLink href={generalResume} rel="noreferrer" target="_blank">
                    <div>General Resume</div>
                </StyledLink>
            </BackgroundedParagraphTypography>
        </SectionContainerBox>
    </Box>
  );
}

export default Home;
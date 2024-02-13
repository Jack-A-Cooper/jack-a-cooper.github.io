// Projects.js
import React from 'react';
import Box from '@mui/material/Box';
import { PyImgScale } from '../images/projects';
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
    ProjectsPageStyles,
    SectionContainerBox,
    LargeStyledImage,
    LeftJustifiedContainerBox,
    StyledList,
    StyledListItem,
    StyledListItemText,
    CenteredStyledListItem,
    SubHeaderTypographyTwo,
} from './Styles';

const Projects = () => {
  return (
    <Box sx={ProjectsPageStyles}>
      <SectionContainerBox>
      <ContainerBox>
            <HeaderTypography>Projects</HeaderTypography>
      </ContainerBox>
        <ContainerBox>
          <SubHeaderTypography>In Progress</SubHeaderTypography>
              <ContainerBox>
                <StyledList><SubHeaderTypographyTwo>Programming Projects</SubHeaderTypographyTwo>
                    <CenteredStyledListItem><StyledLink href="https://github.com/Jack-A-Cooper/PyImgScale" rel="noreferrer" target="_blank">PyImgScale</StyledLink> | Python</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>
                        PyImgScale is a local GUI image processing application built on PyQt5 and Pillow. 
                        <br>It facilitates the upscaling, downscaling, and converting of images between a few common image formats.</br>
                        <br>PyImgScale provides a user-friendly interface to navigate through the filesystem, select images for processing, and manage processing queues.</br>
                        <br>It will make use of multithreading to process images as efficiently as possible over traditional singlethreaded programs.</br>
                        <br>Features:</br>
                        <ul>
                            <li>**Filesystem Navigation**: Browse through your file system within the app to locate images. Customizable with the ability to change the working directory at any time. Default is set to the directory where the script resides.</li>
                            <li>**Image Processing**: Upscale or downscale images with selectable scale factors. Currently allows for 1.5x, 2x, 4x, and 8x upscaling/downscaling. Multithreaded implementation promotes speed and efficiency.</li>
                            <li>**Format Conversion**: Convert images between popular formats: PNG, JPG, BMP, TGA, and PDF.</li>
                            <li>**Batch Processing**: Process multiple images at once, with progress tracking via a progress bar. Configure settings for single file, batch, or directory processing configurations.</li>
                            <li>**Preview Thumbnails**: View thumbnails of the selected images after processing. See at a glance what files you have processed.</li>
                            <li>**Customizable Save Directory**: Choose the directory where processed images will be saved. Whenever necessary, configure where you wish to save your processsed images.</li>
                        </ul>
                      </LeftJustifiedBackgroundedParagraphTypography>
                        <CenterContainerBox>
                            <ImageContainer>
                                <StyledImage src={PyImgScale} alt=" "/>
                            </ImageContainer>     
                        </CenterContainerBox>
                    <CenteredStyledListItem><StyledLink href="https://github.com/Jack-A-Cooper/coa-generator" rel="noreferrer" target="_blank">Coat of Arms Generator (COA Gen)</StyledLink> | Python</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>A tool to create personalized coats of arms with historical heraldic rules. Leveraging machine learning and neural networks trained to create highly detailed, unique, and correct coat of arms. Also incorporates handy scripts for project development
                      and organization.
                      </LeftJustifiedBackgroundedParagraphTypography>
                </StyledList>
                <StyledList><SubHeaderTypographyTwo>Research and Development Projects</SubHeaderTypographyTwo>
                    <CenteredStyledListItem>Stable Diffusion Training and Research | Various</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>Conducting research into Stable Diffusion and image generation techniques.</LeftJustifiedBackgroundedParagraphTypography>
                </StyledList>
                <StyledList><SubHeaderTypographyTwo>Creative Projects</SubHeaderTypographyTwo>
                    <CenteredStyledListItem>Game Design Research and Design | Various</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>
                      Conducting research into developing nuanced game design techniques, mechanics, and overall design.
                      </LeftJustifiedBackgroundedParagraphTypography>
                    <CenteredStyledListItem>Worldbuilding Project (Early Original Work) | Various</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>Worldbuilding project I am working on with the collaboration with my best friend. Still too early to reveal too much, but utilizing current tools and technologies to help flesh out the world and bring it to life on paper and through AI image generation. Of course this is
                      in tandem with good ol' drafting, testing, and tons of necessary brainstorming!
                      </LeftJustifiedBackgroundedParagraphTypography>
                </StyledList>
              </ContainerBox>
          <SubHeaderTypography>Finished</SubHeaderTypography>
             <ContainerBox>
                <StyledList><SubHeaderTypographyTwo>Programming Projects</SubHeaderTypographyTwo>
                  <CenteredStyledListItem><StyledLink href="https://github.com/Jack-A-Cooper/PokerCore"  rel="noreferrer" target="_blank">Pokercore</StyledLink> | C++ (Open Source)</CenteredStyledListItem>
                    <LeftJustifiedBackgroundedParagraphTypography>Implemented a C++ class-based module implementation of a 5-hand poker hand evaluator based on a bitwise algorithm. Evolved to become a sophisticated program with other modules now 
                    (such as implementing file validation [additional module], GoogleTest [testing suite], and CMake [build/compilation]). 
                    A major inspiration for this project was reading Jonathan Hsiao's blog post about a bitwise algorithm to evaluate 5-hand poker hands I found very interesting. The original algorithm was implemented by Pat Wilson in JavaScript (2012).
                    </LeftJustifiedBackgroundedParagraphTypography>
                 <CenteredStyledListItem ><StyledLink href="https://github.com/Jack-A-Cooper/Agar.io-Behavior-Tree-Bots" rel="noreferrer" target="_blank">Agar.io-Behavior-Tree-Bots Fork</StyledLink> | JavaScript (Open Source)</CenteredStyledListItem>
                    <LeftJustifiedBackgroundedParagraphTypography>
                    Redesigns and improves Ogar3's AI bots by utilizing a behavior tree system.
                    </LeftJustifiedBackgroundedParagraphTypography>
                 <CenteredStyledListItem>Pintos OS CPU Scheduluer | C</CenteredStyledListItem>
                    <LeftJustifiedBackgroundedParagraphTypography>
                    This implementation features a round-robin CPU scheduling algorithm enhanced with priority-based preemption to prevent deadlocks. It leverages multithreading to apply core principles of concurrency, ensuring efficient task management and execution.
                    </LeftJustifiedBackgroundedParagraphTypography>
                 <CenteredStyledListItem>Helpful Automation Scripts | Python</CenteredStyledListItem>
                    <LeftJustifiedBackgroundedParagraphTypography>
                    Various light-weight python scripts that I have written to help me perform numerous tasks, ranging from directory organization to directory tree visualization. I plan to clean them up eventually and share them as open source scripts for anyone to use or build off from.
                    </LeftJustifiedBackgroundedParagraphTypography>
               </StyledList>
            </ContainerBox>
        </ContainerBox>
      </SectionContainerBox>
    </Box>
  );
}

export default Projects;

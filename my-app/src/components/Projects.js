// Projects.js
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
                    <CenteredStyledListItem><StyledLink href="https://github.com/Jack-A-Cooper/WonderLoom" rel="noreferrer" target="_blank">Wonderloom</StyledLink> | Python</CenteredStyledListItem>
                      <LeftJustifiedBackgroundedParagraphTypography>WonderLoom is envisioned as a companion tool that helps inspire imagination and spark creativity. A core concern of world building is contextual continuity while playing with friends or an AI Language Model (such as ChatGPT), 
                      and this concept stays central in development efforts. Through contemporary frameworks and tools, the project aims to tackle the issue of world tracking in text-based game management and play. One can only go so far with world 
                      building and interacting before details become muddied and concret tracking falls by the wayside. Or worse, the imagined story teller never bothered to remember your inventory's contents. A core component of WonderLoom's goal 
                      is to serve as this tool; to help facilitate world data capture with ease. By utilizing such means as an ORM database backed with PostgreSQL 
                      and powered through Python, organizing and utilizing data will no longer be an arduous chore. Players, world-builders, dreamers, and dataphiles alike may take advantage of the tool to focus on the aspects they enjoy most.
                      </LeftJustifiedBackgroundedParagraphTypography>
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

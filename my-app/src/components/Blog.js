// Blog.js
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
    BlogPageStyles,
    SectionContainerBox,
    LargeStyledImage,
    LeftJustifiedContainerBox,
    StyledList,
    StyledListItem,
    StyledListItemText,
    CenteredStyledListItem,
    SubHeaderTypographyTwo,
} from './Styles';

const Blog = () => {
  return (
    <Box sx={BlogPageStyles}>
      <SectionContainerBox>
      <ContainerBox>
         <HeaderTypography>Personal Blog</HeaderTypography>
      </ContainerBox>
      <ContainerBox>
        <BackgroundedParagraphTypography>Coming soon... Will need to allocate a lot of time to even just figure out the style of blog I'd enjoy let alone get writting one... (sigh) someday.</BackgroundedParagraphTypography>
      </ContainerBox>
     </SectionContainerBox>
    </Box>
  );
}

export default Blog;

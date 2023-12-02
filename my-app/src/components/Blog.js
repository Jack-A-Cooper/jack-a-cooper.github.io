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
         <HeaderTypography>Personal Blog</HeaderTypography>
        <BackgroundedParagraphTypography>Coming soon... Will need to allocate a lot of time to even just figure out the style of blog I'd enjoy let alone get writting one... (sigh) someday.</BackgroundedParagraphTypography>
      </SectionContainerBox>
    </Box>
  );
}

export default Blog;

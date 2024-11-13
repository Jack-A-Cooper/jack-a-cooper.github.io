// Blog.js
import React from 'react';
import Box from '@mui/material/Box';
import { 
    ContainerBox,
    HeaderTypography,
    BackgroundedParagraphTypography,
    BlogPageStyles,
    SectionContainerBox,
} from './Styles';

const Blog = () => {
  return (
    <Box sx={BlogPageStyles}>
      <SectionContainerBox>
      <ContainerBox>
         <HeaderTypography>Personal Blog</HeaderTypography>
      </ContainerBox>
      <ContainerBox>
        <BackgroundedParagraphTypography>Coming soon...</BackgroundedParagraphTypography>
      </ContainerBox>
     </SectionContainerBox>
    </Box>
  );
}

export default Blog;

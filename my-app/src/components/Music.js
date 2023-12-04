// Music.js
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
    MusicPageStyles,
    SectionContainerBox,
    LargeStyledImage,
    LeftJustifiedContainerBox,
    StyledList,
    StyledListItem,
    StyledListItemText,
    CenteredStyledListItem,
    SubHeaderTypographyTwo,
} from './Styles';

const Music = () => {
  return (
    <Box sx={MusicPageStyles}>
      <SectionContainerBox>
        <ContainerBox>
          <HeaderTypography>Music (Spuqk)</HeaderTypography>
        </ContainerBox>
        <ContainerBox>
          <SubHeaderTypographyTwo>Track List (unreleased):</SubHeaderTypographyTwo>
        </ContainerBox>
        <ContainerBox>
          <StyledList>
            {/* We */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/we-1/s-TerG8ulCwcz" title="we" rel="noreferrer" target="_blank">
                <div>We</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="We"
              width="100%"
              height="120"
              scrolling="yes"
              frameBorder="yes"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1650185892%3Fsecret_token%3Ds-TerG8ulCwcz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            {/* Dazed and Confused */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/dazed-and-confused-1/s-KubUsNoHBPN" title="dazed and confused" rel="noreferrer" target="_blank">
                <div>Dazed and Confused</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="Dazed and Confused"
              width="100%"
              height="120"
              scrolling="yes"
              frameBorder="yes"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1649438364%3Fsecret_token%3Ds-KubUsNoHBPN&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            {/* Metanoia */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/agnosthesia/s-Vl9gQb3BjTg" title="metanoia" rel="noreferrer" target="_blank">
              < div>Metanoia</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="Metanoia"
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1649188542%3Fsecret_token%3Ds-Vl9gQb3BjTg&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            {/* Solution Explorer */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/slaps/s-sOqMkpQHJ7E" title="solution explorer" rel="noreferrer" target="_blank">
                <div>Solution Explorer</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="Solution Explorer"
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1646026050%3Fsecret_token%3Ds-sOqMkpQHJ7E&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            {/* Here */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/here/s-A4mcZY8qPb9" title="here" rel="noreferrer" target="_blank">
                <div>Here</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="Here"
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1572319300%3Fsecret_token%3Ds-A4mcZY8qPb9&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            {/* Psychopomp */}
            <CenteredStyledListItem>
              <StyledLink href="https://soundcloud.com/spuqk/psychopomp-1/s-dt7h6Fhn3nK" title="psychopomp" rel="noreferrer" target="_blank">
                <div>Psychopomp</div>
              </StyledLink>
            </CenteredStyledListItem>
            <iframe
              title="Psychopomp"
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1522126309%3Fsecret_token%3Ds-dt7h6Fhn3nK&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
          </StyledList>
        </ContainerBox>
      </SectionContainerBox>
    </Box>
  );
}

export default Music;

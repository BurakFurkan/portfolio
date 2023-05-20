import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "./PageComponents/Projects/Carousel";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import {
  FoodMedia,
  DashboardMedia,
  ShopMedia,
  MediaVideo,
} from "./PageComponents/Projects/MediaWrapper";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import {t} from 'i18next';

function Projects() {
  const [isVideo, setIsVideo] = useState(true);
  const [videoSrc, setVideoSrc] = useState(MediaVideo[0]);
  const [imgSrc, setImgSrc] = useState(FoodMedia[0]);


  return (
    <Container name="projects">
      <StyledH1>{t("MyProjects")}</StyledH1>
      <MainSection>
        {isVideo ? (
          <StyledVideo
          key={videoSrc}
            autoPlay
            loop
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          >
            <source src={videoSrc} type="video/webm" />
          </StyledVideo>
        ) : (
          <StyledImg src={imgSrc} alt="" />
        )}
      </MainSection>
      <Car>
      <StyledH2>Food App</StyledH2>
        <Carousel
          mediaArr={FoodMedia}
          direct={false}
          setIsVideo={setIsVideo}
          setVideoSrc={setVideoSrc}
          setImgSrc={setImgSrc}
          videoIndex={0}
        />
      </Car>
      <Car>
      <StyledH2>Admin Dashboard</StyledH2>
        <Carousel
          mediaArr={DashboardMedia}
          direct={true}
          setIsVideo={setIsVideo}
          setVideoSrc={setVideoSrc}
          setImgSrc={setImgSrc}
          videoIndex={1}
        />
      </Car>
      <Car>
      <StyledH2>Shop App</StyledH2>
        <Carousel
          mediaArr={ShopMedia}
          direct={true}
          setIsVideo={setIsVideo}
          setVideoSrc={setVideoSrc}
          setImgSrc={setImgSrc}
          videoIndex={1}
        />
      </Car>
      <StyledLinks>
          <StyledH2>Live Links of My Projects</StyledH2>
          <a href="https://admin-dashboard-burakfurkan.vercel.app/" rel="noopener noreferrer" target="_blank"><LanguageOutlinedIcon/><span> Admin Dashboard</span></a>
          <a href="https://react-food-app-burakfurkan.vercel.app/" rel="noopener noreferrer" target="_blank"><LanguageOutlinedIcon/><span> Food App</span></a>
          <a href="https://bmartmimarlik.com.tr/" rel="noopener noreferrer" target="_blank"><LanguageOutlinedIcon/><span> Architecture Website</span></a>
      </StyledLinks>
    </Container>
  );
}

const Container = styled.div`
  height: 160vh;
  padding: 10px 10px 10px 50px;
  background-color: hsla(${(props) => props.theme.bg_color});
  background-image: ${(props) => props.theme.bg_image1},
    ${(props) => props.theme.bg_image2}, ${(props) => props.theme.bg_image3},
    ${(props) => props.theme.bg_image4}, ${(props) => props.theme.bg_image5},
    ${(props) => props.theme.bg_image6};

  display: flex;
  flex-direction: column;


  @media (max-width: 1028px) {
    height: 180vh
  }
`;

const StyledH1 = styled.h1`
  text-align:center;
  color: ${(props) => props.theme.text_color2};
`
const StyledH2=styled.h2`
   color: ${(props) => props.theme.text_color2};
   margin:0;
   padding:0;
`

const MainSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Car = styled.div`
  flex: 1;
  padding: 0.5rem;
  position:relative;
`;

const StyledVideo = styled(Video)`
  height: 400px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 380px;
  }
`;

const StyledImg = styled.img`
  max-width: 800px;
  max-height: 400px;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 380px;
  }
`;

const StyledLinks = styled.div`
color: ${(props) => props.theme.text_color2};
display:flex;
flex-direction:column;

  span{
    display:flex;
    justify-content:start;
    align-items:start;
  }

 a{
  color: ${(props) => props.theme.text_color2};
    display:flex;
    justify-content:start;
    align-items:center;
    gap:1rem;
    text-decoration:none;
 }
`

export default Projects;

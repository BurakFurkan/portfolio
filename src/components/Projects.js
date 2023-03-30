import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "./PageComponents/Projects/Carousel";
import {
  FoodMedia,
  ShopMedia,
  MediaVideo,
} from "./PageComponents/Projects/MediaWrapper";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Projects() {
  const [isVideo, setIsVideo] = useState(true);
  const [videoSrc, setVideoSrc] = useState(MediaVideo[0]);
  const [imgSrc, setImgSrc] = useState(FoodMedia[0]);


  return (
    <Container name="projects">
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
        <Carousel
          mediaArr={ShopMedia}
          direct={true}
          setIsVideo={setIsVideo}
          setVideoSrc={setVideoSrc}
          setImgSrc={setImgSrc}
          videoIndex={1}
        />
      </Car>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 10px 10px 20px 50px;
  background-color: hsla(${(props) => props.theme.bg_color});
  background-image: ${(props) => props.theme.bg_image1},
    ${(props) => props.theme.bg_image2}, ${(props) => props.theme.bg_image3},
    ${(props) => props.theme.bg_image4}, ${(props) => props.theme.bg_image5},
    ${(props) => props.theme.bg_image6};

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (max-width: 1028px) {
  }
`;

const MainSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Car = styled.div`
  flex: 1;
  padding: 0.5rem;
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

export default Projects;

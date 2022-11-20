import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MainText from "./PageComponents/Home/MainText";
import ProfilePhoto from "./PageComponents/Home/ProfilePhoto";

const Home = () => {
  return (
    <Container name="home" id="home">
      <MainText />
      <ProfilePhoto />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: hsla(${(props)=>props.theme.bg_color});
  background-image: ${(props)=>props.theme.bg_image1},
  ${(props)=>props.theme.bg_image2},
  ${(props)=>props.theme.bg_image3},
  ${(props)=>props.theme.bg_image4},
  ${(props)=>props.theme.bg_image5},
  ${(props)=>props.theme.bg_image6};
    

  @media (max-width: 1028px) {
    flex-direction: column-reverse;
    align-content: flex-start;
    align-items: center;
    padding-left: 50px;
    justify-content: flex-end;
  }
`;

export default Home;

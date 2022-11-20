import React from "react";
import styled from "styled-components";
import {t} from 'i18next';
import ThreeWrapper from "./PhoneSection/ThreeWrapper";
import "../fonts/robot/RobotReavers.ttf";

const PhoneSection = () => {
  return (
    <Container name="threeD">
    <StyledText>{t("Do you want this at your app?")}</StyledText>
      <SceneWrapper>
        <ThreeWrapper />
      </SceneWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: hsla(${(props)=>props.theme.bg_color});
  background-image: ${(props)=>props.theme.bg_image1},
  ${(props)=>props.theme.bg_image2},
  ${(props)=>props.theme.bg_image3},
  ${(props)=>props.theme.bg_image4},
  ${(props)=>props.theme.bg_image5},
  ${(props)=>props.theme.bg_image6};

    @media (max-width: 1028px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const SceneWrapper=styled.div`
  width:40%;
  height: 60%;
  background-color:${(props)=>props.theme.phone_bg};
  border-radius:7px;
  box-shadow: 1px 1px 3px 1px rgba(36, 11, 54, 1);


  @media (max-width: 1028px) {
    height: 50%;
  }
`

const StyledText=styled.div`
  width: 250px;
  height:280px;
  color:${(props)=>props.theme.text_color2};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family:"RobotReavers", sans-serif;
  font-size: 3rem;
  margin-bottom: 190px;

  @media (max-width: 1028px) {
    margin-left:0;
    align-self:center;
    margin-bottom: 0;
    text-align:center;
  }

`

export default PhoneSection;

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ThreeWrapper from "./PhoneSection/ThreeWrapper";

const PhoneSection = () => {
  return (
    <Container name="threeD">
    <StyledText>Do you want this at your app?</StyledText>
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
  background-color: hsla(261, 84%, 5%, 1);
  background-image: radial-gradient(
      at 65% 50%,
      hsla(239, 29%, 27%, 0.82) 0px,
      transparent 50%
    ),
    radial-gradient(at 86% 31%, hsla(263, 34%, 41%, 1) 0px, transparent 50%),
    radial-gradient(at 89% 77%, hsla(254, 36%, 38%, 1) 0px, transparent 50%),
    radial-gradient(at 69% 15%, hsla(210, 42%, 15%, 1) 0px, transparent 50%),
    radial-gradient(at 9% 86%, hsla(278, 47%, 55%, 1) 0px, transparent 50%),
    radial-gradient(at 12% 11%, hsla(220, 76%, 63%, 1) 0px, transparent 50%);

    @media (max-width: 1028px) {
    flex-direction: column;
    align-content:center;
    align-items: center;
    justify-content: center;
  }
`;

const SceneWrapper=styled.div`
  width:40%;
  height: 60%;
  background-color:rgba(0,0,0,0.1);
  border-radius:7px;
  box-shadow: 1px 1px 3px 1px rgba(36, 11, 54, 1);


  @media (max-width: 1028px) {
    height: 50%;
  }
`

const StyledText=styled.span`
  width: 280px;
  height:200px;
  color:${(props)=>props.theme.text_color2};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self:flex-start;
  font-size: 3rem;
  margin-top: 120px;

  @media (max-width: 1028px) {
    margin-left:50px;
    align-self:center;
  }

`

export default PhoneSection;

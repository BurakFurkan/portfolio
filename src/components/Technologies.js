import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import TechnoItem from "./PageComponents/Technologies/TechnoItem";
import { TechnologyList } from "./PageComponents/Technologies/TechnologyList";

const Technologies = () => {


  return (
    <Container name="techno" id="techno">
      <StyledText>What I use</StyledText>
      <MainWrapper>
        {TechnologyList.map((technology,i)=>{
          return  <TechnoItem key={i} id={i}  {...technology} />
        })}
      </MainWrapper>
    </Container>
  );
};

const BgAnimation = keyframes`
  0%{
    background-position: 0 0;
  }
  50%{
    background-position: 100% 0;
  }
  100%{
    background-position: 0 0;
  }


`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: 400%;
  background-image: linear-gradient(
    335deg,
    rgba(96, 69, 140, 1) 0%,
    rgba(33, 150, 243, 1) 20%,
    rgba(155, 86, 194, 1) 44%,
    rgba(78, 62, 132, 1) 62%,
    rgba(89, 137, 232, 1) 84%,
    rgba(238, 130, 238, 1) 100%
  );

  animation: ${BgAnimation} 8s linear infinite;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 50px;
  bottom: 15px;
  right: 15px;
  background-color: rgba(13, 8, 17,0.3);
  border-radius: 5px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:3rem;
  padding:100px 0;
`;

const Shine=keyframes`
  to {
      background-position: 200% center;
    }

`

const StyledText=styled.h1`
  background: linear-gradient(to right, rgba(238, 130, 238, 1) 20%,  rgba(33, 150, 243, 1) 80%);
  background-size: 200% auto; 
  color: #000;
  background-clip: text;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: flex-start;
  animation: ${Shine} 5s linear infinite;


`

export default Technologies;

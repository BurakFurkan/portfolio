import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

const Technologies = () => {
  return (
    <Container name="techno" id="techno">
      <MainWrapper>asdf</MainWrapper>
    </Container>
  );
};

const BgAnimation=keyframes`
  0%{
    -webkit-filter: hue-rotate(0deg);
  }
  50%{
    -webkit-filter: hue-rotate(100deg);
  }
  100%{
    -webkit-filter: hue-rotate(0deg);
  }


`

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: hsla(261, 84%, 5%, 1);
  background-color: hsla(261, 84%, 5%, 1);
  background-color: hsla(261, 84%, 5%, 1);
  background-image: radial-gradient(
      at 50% 65%,
      hsla(239, 29%, 27%, 0.82) 0px,
      transparent 50%
    ),
    radial-gradient(at 86% 31%, hsla(263, 34%, 41%, 1) 0px, transparent 50%),
    radial-gradient(at 89% 77%, hsla(254, 36%, 38%, 1) 0px, transparent 50%),
    radial-gradient(at 69% 15%, hsla(210, 42%, 15%, 1) 0px, transparent 50%),
    radial-gradient(at 9% 86%, hsla(278, 47%, 55%, 1) 0px, transparent 50%),
    radial-gradient(at 12% 11%, hsla(220, 76%, 63%, 1) 0px, transparent 50%);
    animation: ${BgAnimation} 3s linear infinite;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 50px;
  bottom: 15px;
  right: 15px;
  background-color: #432C7A;
  border-radius:5px;

`;

export default Technologies;

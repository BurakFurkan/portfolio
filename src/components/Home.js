import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MainText from "./PageComponents/Home/MainText";
import ProfilePhoto from "./PageComponents/Home/ProfilePhoto";

const Home = () => {
  return (
    <Container name="home" id="home">
      <MainText/>
      <ProfilePhoto/>
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
  background-color: hsla(261, 84%, 5%, 1);
  background-color: hsla(261, 84%, 5%, 1);
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
    flex-direction: column-reverse;
    align-content:flex-start;
    align-items: center;
    padding-left: 50px;
    justify-content: flex-end;
  }
`;

export default Home;

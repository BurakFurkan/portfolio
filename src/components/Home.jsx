import React from "react";
import styled from "styled-components";
import MainText from "./PageComponents/Home/MainText";
import ProfilePhoto from "./PageComponents/Home/ProfilePhoto";

const Home = () => {
  return (
    <Section name="home" id="home">
      <DotGrid />
      <Content>
        <MainText />
        <ProfilePhoto />
      </Content>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  background-color: ${(p) => p.theme.bg_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    padding-left: 0;
    padding-top: 80px;
    align-items: flex-start;
  }
`;

const DotGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(${(p) => p.theme.border_subtle} 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.6;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 40px 24px 60px;
    gap: 32px;
  }
`;

export default Home;

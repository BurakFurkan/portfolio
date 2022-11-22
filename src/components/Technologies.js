import React from "react";
import styled, { keyframes } from "styled-components";
import { t } from "i18next";
import TechnoItem from "./PageComponents/Technologies/TechnoItem";
import { TechnologyList } from "./PageComponents/Technologies/TechnologyList";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <Container name="techno" id="techno">
    <StyledText>{t("What I use")}</StyledText>
      <MainWrapper
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {TechnologyList.map((technology, i) => {
          return <TechnoItem key={i} id={i} {...technology} />;
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
    ${(props) => props.theme.techno_bg_image1},
    ${(props) => props.theme.techno_bg_image2},
    ${(props) => props.theme.techno_bg_image3},
    ${(props) => props.theme.techno_bg_image4},
    ${(props) => props.theme.techno_bg_image5},
    ${(props) => props.theme.techno_bg_image6}
  );

  animation: ${BgAnimation} 8s linear infinite;
`;

const MainWrapper = styled(motion.div)`
  position: absolute;
  top: 15px;
  left: 50px;
  bottom: 15px;
  right: 15px;
  background-color: ${(props) => props.theme.techno_main_bg};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 100px 0;

  @media (max-width: 360px) {
    gap: 2rem;
  }
`;

const Shine = keyframes`
  to {
      background-position: 200% center;
    }

`;

const StyledText = styled.h1`
  width: 350px;
  height: 150px;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.techno_colored_text1},
    ${(props) => props.theme.techno_colored_text2}
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: flex-start;
  animation: ${Shine} 5s linear infinite;
  text-shadow: 1px 2px 0px inherit;

  @media (max-width: 1028px) {
    width: 250px;
    height: 100px;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default Technologies;

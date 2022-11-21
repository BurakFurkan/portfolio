import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import NoGlitch from "../../../assets/noglitch.png";
import Glitch1 from "../../../assets/glitch1.png";
import Glitch2 from "../../../assets/glitch2.png";
import Glitch3 from "../../../assets/glitch3.png";

export default function ProfilePhoto() {
  return (
    <Container>
      <StyledBorder
        initial={{ x: "100px", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <StyledImg />
      </StyledBorder>
    </Container>
  );
}

const Container = styled.div`
  width: 45vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;


  @media (max-width: 1028px) {
    width: 80vw;
    height: 50vh;
    justify-content: flex-start;
    align-items: center;
  }
`;
const TextAnimation = keyframes`
0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  33% {
    border-radius: 62% 38% 81% 19% / 77% 74% 26% 23%   ;
  }
  66% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%  ;
  }
`;

const StyledBorder = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.profile_bg};
  background: ${(props) => props.theme.wbgradient_profile_bg};
  background: ${(props) => props.theme.gradient_profile_bg};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: ${TextAnimation} 10s infinite ease-in-out;
  box-shadow: 10px 10px 5px 0px ${(props) => props.theme.profile_bg_shadow};
  -webkit-box-shadow: 10px 10px 5px 0px
    ${(props) => props.theme.profile_bg_shadow};
  -moz-box-shadow: 10px 10px 5px 0px ${(props) => props.theme.profile_bg_shadow};
`;

const BgAnimation = keyframes`
    0%,55.1%,100%  {background-image: url(${NoGlitch});}
   50% {background-image: url(${Glitch1});}
   52.5% {background-image: url(${Glitch2});}
   55% {background-image: url(${Glitch3});}

`;

const StyledImg = styled.div`
  width: 200px;
  height: 200px;
  animation: ${BgAnimation} 3.75s infinite steps(1);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

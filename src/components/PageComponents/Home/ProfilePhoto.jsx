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
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Frame>
          <InnerFrame>
            <Photo />
          </InnerFrame>
          <AccentCorner $pos="tl" />
          <AccentCorner $pos="br" />
        </Frame>
      </motion.div>
    </Container>
  );
}

/* ─── Animations ─── */

const morphAnim = keyframes`
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  33%  { border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%; }
  66%  { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

/* Repo technique: swap pre-made glitch images, flash opacity:0 on middle frame */
const glitchAnim = keyframes`
  0%, 92.4%, 100% {
    background-image: url(${NoGlitch});
    opacity: 1;
  }
  92.5% {
    background-image: url(${Glitch1});
    opacity: 1;
  }
  95% {
    background-image: url(${Glitch2});
    opacity: 0;
  }
  97.5% {
    background-image: url(${Glitch3});
    opacity: 1;
  }
`;

const cornerPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
`;


/* ─── Styled components ─── */

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

const Frame = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const InnerFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: ${morphAnim} 10s ease-in-out infinite;
  box-shadow: 0 0 0 2px ${(p) => p.theme.profile_border},
              0 20px 60px ${(p) => p.theme.profile_shadow};
  overflow: hidden;
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${NoGlitch}) center / cover no-repeat;
  animation: ${glitchAnim} 3.5s steps(1) infinite;
`;

const AccentCorner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  animation: ${cornerPulse} 2s ease-in-out infinite;

  ${(p) =>
    p.$pos === "tl" &&
    `top: -8px; left: -8px;
     border-top: 2px solid ${p.theme.accent};
     border-left: 2px solid ${p.theme.accent};`}

  ${(p) =>
    p.$pos === "br" &&
    `bottom: -8px; right: -8px;
     border-bottom: 2px solid ${p.theme.accent};
     border-right: 2px solid ${p.theme.accent};`}
`;


import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import { useReward } from "react-rewards";

export default function MainText() {
  const { reward:reward1, isAnimating:isAnimating1 } = useReward("rewardId1", "confetti");
  const { reward:reward2, isAnimating:isAnimating2 } = useReward("rewardId2", "confetti");
  const { reward:reward3, isAnimating:isAnimating3 } = useReward("rewardId3", "confetti");

  return (
    <Container>
      <TextWrapper>
        <p>Hi,</p>
        <p>I'm Burak Furkan Tenekeci</p>
        <StyledP>
          <span>I'm a</span>
          <AnimatedText>
            <span>FrontEnd Developer</span>
            <span>Lifelong Learner</span>
            <span>Passionate</span>
            <span>Human</span>
          </AnimatedText>
        </StyledP>
      </TextWrapper>
      <Socials>
        <Tooltip title="https://www.github.com/BurakFurkan" arrow>
          <a
            href="https://www.github.com/BurakFurkan"
            target="_blank"
            rel="noreferrer noopener"
            disabled={isAnimating1}
            onMouseEnter={reward1}
          >
            <span id="rewardId1" />
            <GitHubIcon fontSize="large" />
          </a>
        </Tooltip>
        <Tooltip
          title="https://www.linkedin.com/in/burak-furkan-tenekeci"
          arrow
        >
          <a
            href="https://www.linkedin.com/in/burak-furkan-tenekeci"
            target="_blank"
            rel="noreferrer noopener"
            disabled={isAnimating2}
            onMouseEnter={reward2}
          >
            <span id="rewardId2" />
            <LinkedInIcon fontSize="large" />
          </a>
        </Tooltip>
        <Tooltip title="furkan_te@hotmail.com" arrow>
          <a
            href="mailto:furkan_te@hotmail.com"
            target="_blank"
            rel="noreferrer noopener"
            disabled={isAnimating3}
            onMouseEnter={reward3}
          >
            <span id="rewardId3" />
            <EmailOutlinedIcon fontSize="large" />
          </a>
        </Tooltip>
      </Socials>
    </Container>
  );
}

const Container = styled.div`
  width: 40vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1028px) {
    width: 80vw;
    height: 300px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 280px;
  color: ${(props) => props.theme.text_color2};
  p {
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 1028px) {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

const TextAnimation = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  50% {
    -webkit-transform: translateY(-98px);
            transform: translateY(-98px);
  }
  75% {
    -webkit-transform: translateY(-148px);
            transform: translateY(-148px);
  }

`;
const TextAnimationSmall = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
  50% {
    -webkit-transform: translateY(-66px);
            transform: translateY(-66px);
  }
  75% {
    -webkit-transform: translateY(-99px);
            transform: translateY(-99px);
  }

`;

const StyledP = styled.p`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: space-evenly;
  gap: 7px;

  span {
    min-width: 80px;
    @media (max-width: 1028px) {
      min-width: 55px;
    }
  }
`;

const AnimatedText = styled.span`
  min-width: 330px !important;
  height: 44px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-evenly;
  gap: 5px;

  @media (max-width: 1028px) {
    height: 30px;
    min-width: 230px !important;
  }

  span {
    padding: 0 5px;
    &:nth-child(1) {
      background-color: #240b36;
      animation: ${TextAnimation} 8000ms infinite;
      @media (max-width: 1028px) {
        animation: ${TextAnimationSmall} 8000ms infinite;
      }
    }
    &:nth-child(2) {
      background-color: #c31432;
      animation: ${TextAnimation} 8000ms infinite;
      @media (max-width: 1028px) {
        animation: ${TextAnimationSmall} 8000ms infinite;
      }
    }
    &:nth-child(3) {
      background-color: #ad5389;
      animation: ${TextAnimation} 8000ms infinite;
      @media (max-width: 1028px) {
        animation: ${TextAnimationSmall} 8000ms infinite;
      }
    }
    &:nth-child(4) {
      background-color: #3c1053;
      animation: ${TextAnimation} 8000ms infinite;
      @media (max-width: 1028px) {
        animation: ${TextAnimationSmall} 8000ms infinite;
      }
    }
  }
`;

const Socials = styled.div`
  width: 280px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    cursor: pointer;
    color: ${(props) => props.theme.text_color2};
    border-radius: 50%;
    transition: all 0.15s ease-in-out;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1):hover {
      background-color: #333;
      transform: scale(1.3);
    }
    &:nth-child(2):hover {
      background-color: #0a66c2;
      transform: scale(1.3);
    }
    &:nth-child(3):hover {
      background-color: #127cd6;
      transform: scale(1.3);
    }
  }

  @media (max-width: 1028px) {
  }
`;

import React from 'react';
import styled, { keyframes, ThemeProvider } from "styled-components";
import {motion} from "framer-motion";

export default function TechnoItem({name,src,id}) {
  return (
    <Container animate={{y:"-15px"}} transition={{ repeat: Infinity,
        repeatType: 'reverse', duration: 2, delay:((id%2)*1) }}> 
    <StyledImg src={Object.values(src)[0]} alt={name} />
    <StyledText>{name}</StyledText>
    </Container>
  )
}

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

const Container=styled(motion.div)`
    width:180px;
    height: 180px;
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
    border-radius:4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    color:${(props)=>props.theme.text_color2};

    @media (max-width: 1028px) {
    width:4rem;
    height: 4rem;
    gap:0.5rem;
  }

`


const StyledImg=styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: contain;

    @media (max-width: 1028px) {
    width:1.5rem;
    height: 1.5rem;
  }

`

const StyledText=styled.span`
    font-size: 1rem;
    text-align: center;

    @media (max-width: 1028px) {
    font-size:0.6rem;
  }


`

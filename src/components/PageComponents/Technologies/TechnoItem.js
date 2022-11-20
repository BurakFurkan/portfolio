import React from 'react';
import styled, { keyframes, ThemeProvider } from "styled-components";
import {motion} from "framer-motion";

export default function TechnoItem({name,src,id}) {
  return (
    <Container animate={{y:"-15px"}} transition={{ repeat: Infinity,
        repeatType: 'reverse', duration: 2, delay:((id%2)*2) }} > 
    <StyledImg src={src} alt={name} />
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
    ${(props)=>props.theme.techno_bg_image1},
    ${(props)=>props.theme.techno_bg_image2},
    ${(props)=>props.theme.techno_bg_image3},
    ${(props)=>props.theme.techno_bg_image4},
    ${(props)=>props.theme.techno_bg_image5},
    ${(props)=>props.theme.techno_bg_image6}
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

import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  return (
    <Container>
      <ul>
        <MenuIcon style={{ padding: "3px" }} />
        <li>
          <StyledLink to="home" smooth={true}>
            <HomeOutlinedIcon />
            <StyledBr />
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="techno" smooth={true}>
            <ScienceOutlinedIcon />
            <StyledBr />
            Technologies
          </StyledLink>
        </li>
        <li>
          <StyledLink to="threeD" smooth={true} duration={500}>
            <ViewInArOutlinedIcon />
            <StyledBr />
            3D
          </StyledLink>
        </li>
        <li>
          <StyledLink to="chart" smooth={true} duration={500}>
            <TrendingUpOutlinedIcon />
            <StyledBr />
            Charts
          </StyledLink>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 2.4rem;
  height: 100%;
  background: ${(props) => props.theme.second_bg};
  color: ${(props) => props.theme.text_color};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  z-index: 999;

  &:hover {
    width: 166px;
  }

  ul {
    height:100vh;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 0 0 5px;
    
    

    li {
      list-style: none;
      cursor: pointer;
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      padding: 3px;
      transition: 0.1s ease-out;

      &:hover {
        background-color: ${(props) => props.theme.third_bg};
      }
    }
  }
`;

const StyledBr = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${(props) => props.theme.text_color2};
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export default Sidebar;

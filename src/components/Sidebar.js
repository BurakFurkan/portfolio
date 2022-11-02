import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const Sidebar = () => {
  return (
    <Container>
      <ul>
      <MenuIcon />
        <li><HomeOutlinedIcon/>Home</li>
        <li><ScienceOutlinedIcon/>Technologies</li>
        <li><ViewInArOutlinedIcon/>3D</li>
        <li><TrendingUpOutlinedIcon/>Charts</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 2.4rem;
  height: 100vh;
  background: ${(props) => props.theme.second_bg};
  color: ${(props) => props.theme.text_color};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: 0.25s ease-in-out;

  &:hover {
    width: 160px;
  }

  ul {
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
      gap:10px;
    }
  }
`;

export default Sidebar;

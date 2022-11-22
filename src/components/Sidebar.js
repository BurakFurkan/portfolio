import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MusicPlayerSlider from "./PageComponents/Sidebar/MusicPlayer";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import { t } from "i18next";
import { Link } from "react-scroll";
import ThemePicker from "./PageComponents/Sidebar/ThemePicker";
import LanguagePicker from "./PageComponents/Sidebar/LanguagePicker";

const Sidebar = ({ setActiveTheme, setActiveLang }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [themeNumber, setThemeNumber] = useState(1);
  const [lang, setLang] = useState("en");

  return (
    <Container
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <ul>
        <MenuIcon style={{ padding: "3px" }} />
        <li>
          <StyledLink to="home" smooth={true}>
            <HomeOutlinedIcon />
            <StyledBr />
            {t("Home")}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="techno" smooth={true}>
            <ScienceOutlinedIcon />
            <StyledBr />
            {t("Technologies")}
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
            {t("Charts")}
          </StyledLink>
        </li>
      </ul>
      {isHovered ? (
        <ThemePicker
          setActiveTheme={setActiveTheme}
          themeNumber={themeNumber}
          setThemeNumber={setThemeNumber}
        />
      ) : (
        <PaletteOutlinedIcon
          style={{ marginLeft: "5px" }}
        />
      )}
      {isHovered ? (
        <LanguagePicker
          setActiveLang={setActiveLang}
          lang={lang}
          setLang={setLang}
        />
      ) : (
        <TranslateOutlinedIcon
          style={{ marginLeft: "5px" }}
        />
      )}
      <MusicPlayerSlider
        ishovered={isHovered}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 2.4rem;
  height: 100%;
  color: ${(props) => props.theme.text_color2};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  z-index: 999;

  @media (max-width: 425px) {
    gap: 0.5rem;
  }

  &:hover {
    width: 220px;
    background: ${(props) => props.theme.sidebar_bg_hover};
  }

  ul {
    width: 90%;
    height: 310px;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 0 0 5px;

    @media (max-width: 425px) {
      height: 200px;
      margin: 10px 0 0 0;
      gap: 0.5rem;
      justify-content: space-evenly;
    }

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
      padding: 5px;
      transition: 0.1s ease-out;

      &:hover {
        background-color: ${(props) => props.theme.sidebar_item_hover_bg};

      }
    }
  }
`;

const StyledBr = styled.div`
  width: 1px;
  height: 25px;
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

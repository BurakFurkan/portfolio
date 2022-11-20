import React from "react";
import styled from "styled-components";
import { theme1, theme2 } from "../../Theme";

const ThemePicker = ({ setActiveTheme,themeNumber,setThemeNumber}) => {
  

  return (
    <Container>
      <Theme
        style={{
          backgroundColor:
            themeNumber === 1 ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.1)",
        }}
        onClick={() => {
          setActiveTheme(theme1);
          setThemeNumber(1);
        }}
      >
        <ColorSpan
          style={{
            backgroundImage:
              "linear-gradient(to bottom left, #60458c 50%, #2196f3 50%)",
          }}
        />
        <ColorSpan
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #9b56c2 50%, #4e3e84 50%)",
          }}
        />
      </Theme>
      <Theme
        style={{
          backgroundColor:
            themeNumber === 2 ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.1)",
        }}
        onClick={() => {
          setActiveTheme(theme2);
          setThemeNumber(2);
        }}
      >
        <ColorSpan
          style={{
            backgroundImage:
              "linear-gradient(to bottom left, #e9dac4 50%, #bd8e83 50%)",
          }}
        />
        <ColorSpan
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #7895b2 50%, #aebdca 50%)",
          }}
        />
      </Theme>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 80px;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Theme = styled.div`
  width: 5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.15s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75) !important;
  }
`;

const ColorSpan = styled.span`
  width: 2rem;
  height: 2rem;
  box-shadow: 0px 0px 2px 1px rgba(223, 223, 222, 0.75);
`;

export default ThemePicker;

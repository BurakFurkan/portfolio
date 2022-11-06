import React from "react";
import styled, { ThemeProvider } from "styled-components";

const PhoneSection = () => {
  return (<Container name="threeD">PhoneSection</Container>);
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export default PhoneSection;

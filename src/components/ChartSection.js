import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ChartSection = () => {
  return (<Container name="chart">ChartSection</Container>);
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  scroll-snap-align: start;
  background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ChartSection;

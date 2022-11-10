import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BarChart from "./PageComponents/ChartSection/BarChart";
import DoughnutChart from "./PageComponents/ChartSection/DoughnutChart";
import LineChart from "./PageComponents/ChartSection/LineChart";
import PolarChart from "./PageComponents/ChartSection/PolarChart";
import RadarChart from "./PageComponents/ChartSection/RadarChart";

const ChartSection = () => {
  return (
    <Container name="chart">
      <DoughnutChart />
      <BarChart />
      <LineChart />
      <RadarChart />
      <PolarChart />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 105px);
  gap: 0.8rem;
  padding: 10px 10px 10px 50px;
  background-color: hsla(261, 84%, 5%, 1);
  background-image: radial-gradient(
      at 65% 50%,
      hsla(239, 29%, 27%, 0.82) 0px,
      transparent 50%
    ),
    radial-gradient(at 86% 31%, hsla(263, 34%, 41%, 1) 0px, transparent 50%),
    radial-gradient(at 89% 77%, hsla(254, 36%, 38%, 1) 0px, transparent 50%),
    radial-gradient(at 69% 15%, hsla(210, 42%, 15%, 1) 0px, transparent 50%),
    radial-gradient(at 9% 86%, hsla(278, 47%, 55%, 1) 0px, transparent 50%),
    radial-gradient(at 12% 11%, hsla(220, 76%, 63%, 1) 0px, transparent 50%);

  @media (max-width: 1028px) {
    height:200vh;
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(5, 250px);
    gap: 0.3rem;
    padding: 15px 5px 5px 80px;
  }
`;

export default ChartSection;

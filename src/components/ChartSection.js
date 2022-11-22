import React from "react";
import styled from "styled-components";
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
  background-color: hsla(${(props)=>props.theme.bg_color});
  background-image: ${(props)=>props.theme.bg_image1},
  ${(props)=>props.theme.bg_image2},
  ${(props)=>props.theme.bg_image3},
  ${(props)=>props.theme.bg_image4},
  ${(props)=>props.theme.bg_image5},
  ${(props)=>props.theme.bg_image6};

  @media (max-width: 1028px) {
    height:200vh;
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(5, 250px);
    gap: 0.3rem;
    padding: 15px 5px 5px 80px;
  }
`;

export default ChartSection;

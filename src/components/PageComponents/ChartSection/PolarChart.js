import React from 'react';
import styled, { useTheme } from "styled-components";
import {t} from 'i18next';
import Chart from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = () => {
  const theme=useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: t('Technologies'),
      },
    },
  };

  const myData = {
    labels: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'REDUX'],
    datasets: [
      {
        label: '# of Votes',
        data: [95, 95, 80, 90, 80],
        backgroundColor: [
          theme.chart_dark_pink,
          theme.chart_dark_blue,
          theme.chart_dark_yellow,
          theme.chart_dark_green,
          theme.chart_dark_purple,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container><PolarArea options={options} data={myData} /></Container>
  )
}

const Container=styled.div`
    padding:10px;
    border-radius:7px;
    background-color:  ${(props)=>props.theme.charts_bg};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/3;
    grid-row: 1/4;


    @media (max-width: 1028px) {
      grid-column: 1/1;
    grid-row: 5/5;
  }


`

export default PolarChart
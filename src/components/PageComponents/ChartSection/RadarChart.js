import React from 'react';
import styled, { useTheme } from "styled-components";
import {t} from 'i18next';
import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  const theme=useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: t('Qualifications'),
      },
    },
  };

  const myData = {
    labels: [t('Communication Skills'), t('Team Work'), t('Good Manners'), t('Curiosity'), t('Passion'), t('Result Orientation')],
    datasets: [
      {
        label: '%',
        data: [88, 90, 100, 92, 94, 96],
        backgroundColor: theme.chart_light_blue,
        borderColor: theme.chart_light_blue_border,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container><Radar options={options} data={myData} /></Container>
  )
}

const Container=styled.div`

    padding:10px;
    border-radius:7px;
    background-color: ${(props)=>props.theme.charts_bg};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 5/7;
      grid-row: 4/7;


    @media (max-width: 1028px) {
      grid-column: 1/1;
    grid-row: 4/4;
  }


`

export default RadarChart
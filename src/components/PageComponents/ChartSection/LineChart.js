import React from 'react';
import styled, { useTheme } from "styled-components";
import {t} from 'i18next';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const LineChart = () => {
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
        text: t('Success/Boredom Chart'),
      },
    },
  };
  
  const labels = [t('January'), t('February'), t('March'), t('April'), t('May'), t('June'), t('July')];

   const data = {
    labels:labels,
    datasets: [
      {
        label: t('Success'),
        data: [15,28,43,56,77,88,99],
        borderColor: theme.chart_dark_pink_border,
        backgroundColor: theme.chart_dark_pink,
      },
      {
        label: t('Boredom'),
        data: [-5,-8,-36,-46,-66,-65,-70],
        borderColor: theme.chart_dark_blue_border,
        backgroundColor: theme.chart_dark_blue,
      },
    ],
  };

  return (
    <Container><Line options={options} data={data} /></Container>
  )
}

const Container=styled.div`

    padding:10px;
    border-radius:7px;
    background-color: ${(props)=>props.theme.charts_bg};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/3;
      grid-row: 4/7;

    @media (max-width: 1028px) {
      grid-column: 1/1;
    grid-row: 3/3;
  }


`

export default LineChart
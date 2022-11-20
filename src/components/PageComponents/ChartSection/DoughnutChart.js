import React from 'react';
import styled, { useTheme } from "styled-components";
import {t} from 'i18next';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
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
        text: t('Activity Hours'),
      },
    },
  };


  const myData = {
    labels: [t('Code'), t('Eat'), t('Sleep'), t('Sport'), t('Fun'), t('Learn')],
    datasets: [
      {
        label: '# of Votes',
        data: [8, 1, 8, 2, 2, 2],
        backgroundColor: [
          theme.chart_light_pink,
          theme.chart_light_blue,
          theme.chart_light_yellow,
          theme.chart_light_green,
          theme.chart_light_purple,
          theme.chart_light_orange,
        ],
        borderColor: [
          theme.chart_light_pink_border,
          theme.chart_light_blue_border,
          theme.chart_light_yellow_border,
          theme.chart_light_green_border,
          theme.chart_light_purple_border,
          theme.chart_light_orange_border,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container><Doughnut options={options} data={myData} /></Container>
  )
}

const Container=styled.div`

    padding:10px;
    border-radius:7px;
    background-color: ${(props)=>props.theme.charts_bg};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 3/5;
    grid-row: 1/7;

    @media (max-width: 1028px) {
      grid-column: 1/1;
      grid-row: 1/1;
  }


`

export default DoughnutChart
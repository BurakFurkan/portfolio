import React from 'react';
import styled, { useTheme } from "styled-components";
import {t} from 'i18next';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
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
        text: t('Daily Work Hours'),
      },
    },
  };
  
  const labels = [t('Monday'), t('Tuesday'), t('Wednesday'), t('Thursday'), t('Friday'), t('Saturday'), t('Sunday')];
  
  const myData = {
    labels,
    datasets: [
      {
        label: t('Hour'),
        data: [8,8,8,8,8,3,3],
        backgroundColor: theme.chart_dark_pink,
      }
    ],
  };

  return (
    <Container><Bar options={options} data={myData} /></Container>
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
      grid-row: 1/4;


    @media (max-width: 1028px) {
      grid-column: 1/1;
      grid-row: 2/2;
  }


`

export default BarChart
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Activity Hours',
      },
    },
  };

  const myData = {
    labels: ['Communication Skills', 'Team Work', 'Good Manners', 'Curiosity', 'Passion', 'Result Orientation'],
    datasets: [
      {
        label: '%',
        data: [90, 90, 100, 90, 85, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
    background-color: rgba(255,255,255,0.7);
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
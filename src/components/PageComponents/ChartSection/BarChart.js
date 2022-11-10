import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Daily Work Hours',
      },
    },
  };
  
  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const myData = {
    labels,
    datasets: [
      {
        label: 'Hour',
        data: [8,8,8,8,8,3,3],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
    background-color: rgba(255,255,255,0.7);
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
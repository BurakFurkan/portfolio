import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {

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
    labels: ['Code', 'Eat', 'Sleep', 'Sport', 'Fun', 'Learn'],
    datasets: [
      {
        label: '# of Votes',
        data: [8, 1, 8, 2, 2, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
    background-color: rgba(255,255,255,0.7);
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
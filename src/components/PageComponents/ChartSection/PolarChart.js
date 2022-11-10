import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Technologies',
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
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
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
    background-color: rgba(255,255,255,0.7);
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
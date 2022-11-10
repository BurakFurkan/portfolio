import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const LineChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Success/Boredom Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

   const data = {
    labels:labels,
    datasets: [
      {
        label: 'Success',
        data: [15,28,43,56,77,88,99],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Boredom',
        data: [-5,-8,-36,-46,-66,-65,-70],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
    background-color: rgba(255,255,255,0.7);
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
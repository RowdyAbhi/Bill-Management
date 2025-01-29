import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ bills }) => {
  const data = {
    labels: bills.map(bill => bill.date),
    datasets: [{
      label: 'Amount',
      data: bills.map(bill => bill.amount),
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    }]
  };

  return <Line data={data} />;
};

export default Chart;

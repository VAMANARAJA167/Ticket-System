/** @format */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { ThemeContext } from '../../Context';

const labels = ['Low', 'Medium', 'High'];
const barPercentage = '0.5';
const backgroundColor = ['lightgreen', 'moccasin', 'crimson'];
const options = {
  legend: { display: false },
  maintainAspectRatio: false,
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const PriorityChart = () => {
  const { theme } = useContext(ThemeContext);
  const [tickets, setTickets] = useState([]);
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        data: [0, 0, 0],
        barPercentage: barPercentage,
        backgroundColor: backgroundColor,
      },
    ],
  });

  useEffect(() => {
    let lowCount = 0;
    let mediumCount = 0;
    let highCount = 0;

    axios
      .get('http://localhost:5000/tickets/')
      .then((res) => {
        setTickets(res.data);

        res.data.forEach((ticket) => {
          if (ticket.status !== 'Resolved') {
            switch (ticket.priority) {
              case 'Low':
                lowCount++;
                break;
              case 'Medium':
                mediumCount++;
                break;
              case 'High':
                highCount++;
                break;
              default:
                break;
            }
          }
        });

        setData({
          labels: labels,
          datasets: [
            {
              data: [lowCount, mediumCount, highCount],
              barPercentage: barPercentage,
              backgroundColor: backgroundColor,
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Bar
        className={`${theme}`}
        data={data}
        options={options}
        height={350}
        width={400}
      />
    </div>
  );
};

export default PriorityChart;

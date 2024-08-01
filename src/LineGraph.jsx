// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const LineGraph = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [10, 20, 30, 40, 50, 60, 70],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Dataset 2',
//         data: [20, 30, 40, 50, 60, 70, 80],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Dataset 3',
//         data: [30, 40, 50, 60, 70, 80, 90],
//         backgroundColor: 'rgba(255, 206, 86, 0.2)',
//         borderColor: 'rgba(255, 206, 86, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         type: 'linear',
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default LineGraph;


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', sales: 1000, orders: 500 },
  { month: 'Feb', sales: 1200, orders: 600 },
  { month: 'Mar', sales: 1100, orders: 550 },
  { month: 'Apr', sales: 1300, orders: 650 },
  { month: 'May', sales: 1400, orders: 700 },
  { month: 'Jun', sales: 1500, orders: 750 },
  { month: 'Jul', sales: 1600, orders: 800 },
  { month: 'Aug', sales: 1700, orders: 850 },
  { month: 'Sep', sales: 1800, orders: 900 },
  { month: 'Oct', sales: 1900, orders: 950 },
  { month: 'Nov', sales: 2000, orders: 1000 },
  { month: 'Dec', sales: 2100, orders: 1050 },
];

const SalesVsOrdersGraph = () => {
  return (
    <LineChart width={700} height={600} data={data}>
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default SalesVsOrdersGraph;
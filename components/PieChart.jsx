import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Sales', value: 12000 },
  { name: 'Orders', value: 6000 },
];

const COLORS = ['#8884d8', '#82ca9d'];

const SalesVsOrdersPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={(entry) => `${entry.name}: ${entry.value}`}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default SalesVsOrdersPieChart;
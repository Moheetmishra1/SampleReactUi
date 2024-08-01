import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { value: 10, label: 'Category 1' },
  { value: 20, label: 'Category 2' },
  { value: 30, label: 'Category 3' },
  { value: 40, label: 'Category 4' },
];

const PieChartComponent = () => {
  return (
    <PieChart
      series={[
        {
          data: data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
    />
  );
};

export default PieChartComponent;
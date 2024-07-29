import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 430, p: "Enter" },
  { name: 'Group B', value: 200, p: "Invest" },
  { name: 'Group C', value: 300, p: "some" },
  { name: 'Group D', value: 200, p: "extra" },
];

const COLORS = ['#343C6A', '#FA00FF', '#1814F3', '#FC7900'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      <tspan x={x} dy="0">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="20">{data[index].p}</tspan>
    </text>
  );
};

const Expense = () => {
  return (
    <div className='w-[30%] h-[350px] bg-white  py-3 px rounded-xl'>
      <h1 className=' text-[22px] font-[500] ml-5'>Investment</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Expense;

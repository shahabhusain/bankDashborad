import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Weekly = () => {
  const data = [
    {
      name: 'Sunday',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Monday',
      uv: 3000,
      pv: 5398,
      amt: 2210,
    },
    {
      name: 'Tuesday',
      uv: 7000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Wednesday',
      uv: 2780,
      pv: 9908,
      amt: 2000,
    },
    {
      name: 'Thursday',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Friday',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Saturday',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className=' w-[65%] h-[350px] bg-white py-5 px-5 rounded-xl '>
      <h1 className=' text-[22px] font-[500] pb-3 '>Weekly Activity</h1>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          barSize={20}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#1814F3" radius={[100, 100, 0, 0]} />
          <Bar dataKey="uv" fill="#16DBCC" radius={[100, 100, 0, 0]}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Weekly
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2011",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2012",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2013",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2014",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2015",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2016",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2017",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Yearly = () => {
  return (
    <div className=" w-[50%]">
      <h1 className=" text-[22px] font-[600] text-[#333B69] my-5">
        Yearly Total Investment
      </h1>
      <div className=" bg-white pr-6 pt-8 h-[350px] rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis axisLine={false} tikLine={false} dataKey="name" />
            <YAxis axisLine={false} tikLine={false} />
            <Tooltip />
            <Legend />
            <Line
              strokeWidth={3}
              type="monotone"
              dataKey="pv"
              stroke="#FCAA0B"
              activeDot={{ r: 12 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Yearly;

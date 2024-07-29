import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts'; // Import Tooltip from Recharts
import sim from '../../assets/sim.png';
import sim1 from '../../assets/sim1.png';

const Cart = () => {
  const data = [
    {$: 4000,},
    {$: 3000,},
    {$: 2000,},
    {$: 2780,},
    {$: 1890,},
    {$: 2390,},
    {$: 3490,},
  ];

  return (
    <div className='flex items-center justify-between mr-6 mt-8'>
      {/* cart1 */}
      <div className='flex flex-col gap-3 w-[30%]'>
        <h1 className='text-[22px] font-[500]'>My Cards</h1>
        <div className='bg-[#4C49ED] py-3 px-5 rounded-xl text-white flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h4>Balance</h4>
              <h1 className='text-[22px] font-medium'>$5,726</h1>
            </div>
            <img src={sim} alt="SIM" />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-[#d8d7d7]'>CARD HOLDER</h1>
              <h2 className='text-[19px] font-[500]'>Eddy Consuma</h2>
            </div>
            <div>
              <h1 className='text-[#d8d7d7]'>7</h1>
              <h2 className='text-[19px] font-[500]'>12/12</h2>
            </div>
          </div>
          <div>
            <h1 className='text-[22px] font-[500]'>3377 ************** 1234</h1>
          </div>
        </div>
      </div>
      {/* cart1 */}

      {/* cart2 */}
      <div className='mt-10 relative w-[30%]'>
        <h1 className='text-[17px] font-[500] absolute top-[-35px] right-3'>Sell all</h1>
        <div className='bg-[#fff] py-3 px-5 rounded-xl text-[#343C6A] flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h4>Balance</h4>
              <h1 className='text-[22px] font-medium'>$5,726</h1>
            </div>
            <img src={sim1} alt="SIM1" />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-[718EBF]'>CARD HOLDER</h1>
              <h2 className='text-[19px] font-[500]'>Eddy Consuma</h2>
            </div>
            <div>
              <h1 className='text-[718EBF]'>VALID THRU</h1>
              <h2 className='text-[19px] font-[500]'>12/12</h2>
            </div>
          </div>
          <div>
            <h1 className='text-[22px] font-[500]'>3377 ************** 1234</h1>
          </div>
        </div>
      </div>
      {/* cart2 */}

      {/* cart3 */}
      <div className='flex flex-col gap-3 w-[30%]'>
        <h1 className='text-[22px] font-[500]'>My Expence</h1>
        <div className='flex flex-col gap-3 bg-white py-2 px-5 rounded-xl h-[200px]'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
            <Tooltip 
                contentStyle={{ backgroundColor: '#16DBCC', color: '#fff', borderRadius: '20px' }} 
                labelStyle={{ color: '#fff', display:"none" }} 
                itemStyle={{ color: '#fff' }} 
              />
              <Bar radius={[10, 10, 10, 10]} dataKey="$" fill="#EDF0F7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* cart3 */}
    </div>
  );
}

export default Cart;

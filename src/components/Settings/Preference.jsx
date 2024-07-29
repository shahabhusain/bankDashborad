import React from 'react'
import { Switch } from 'antd';
const Preference = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <div className=' mt-12 pb-12'>
        <div className=' grid grid-cols-2 gap-5'>
        <div className=' flex flex-col gap-2'>
                        <label>Currency</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='USA ' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Time Zone</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='(GMT-12:00) International Date Line West ' />
                    </div>
        </div>

        <div className=' flex flex-col gap-3 mt-5'>
            <h1 className=' text-[#333B69] text-[17px] font-[500]'>Notification</h1>
            <div className=' flex items-center gap-3'>
             <Switch defaultChecked onChange={onChange} />
             <h1>I send or receive digita currency</h1>
             </div>

             <div className=' flex items-center gap-3'>
             <Switch defaultChecked onChange={onChange} />
             <h1>I receive merchant order</h1>
             </div>

             <div className=' flex items-center gap-3'>
             <Switch defaultChecked onChange={onChange} />
             <h1>There are recommendation for my account</h1>
             </div>
        </div>
    </div>
  )
}

export default Preference
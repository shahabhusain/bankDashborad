import React from 'react'

const Security = () => {
  return (
    <div className=' mt-12 pb-6'>
        <h1 className=' text-[22px] font-[600]'>Change Password</h1>
         <div className=' flex flex-col gap-4 mt-5'>
        <div className=' flex flex-col gap-2'>
                        <label>Currency</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='USA ' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Time Zone</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='(GMT-12:00) International Date Line West ' />
                    </div>
        </div>
    </div>
  )
}

export default Security
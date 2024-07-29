import React from 'react'
import avatar from '../../assets/s1.png'
const EditProfile = () => {
  return (
    <div className=' mt-12'>
        <div className=' flex justify-between gap-12'>
            <img className=' w-[20%] h-fit' src={avatar} alt="" />
            <div className=' w-[80%]'>
                <form className=' grid grid-cols-2 gap-5'>
                    <div className=' flex flex-col gap-2'>
                        <label>Your Name</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='Charlene Reed ' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>User Name</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='Charlene Reed ' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Email</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='charlenereed@gmail.com  ' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Password</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='*************' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Date of Birth</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="date" placeholder='' />
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label>Present Address</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='San Jose, California, USA ' />
                    </div>

                    
                    <div className=' flex flex-col gap-2'>
                        <label>Permanent Address</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='San Jose, California, USA' />
                    </div>


                    <div className=' flex flex-col gap-2'>
                        <label>City</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='San Jose' />
                    </div>


                    <div className=' flex flex-col gap-2'>
                        <label>Postal Code</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='74836' />
                    </div>


                    <div className=' flex flex-col gap-2'>
                        <label>Country</label>
                        <input className=' border-[1px] border-[#DFEAF2] py-3 px-6 rounded-md' type="text" placeholder='USA' />
                    </div>





                </form>
            </div>
        </div>
    </div>
  )
}

export default EditProfile
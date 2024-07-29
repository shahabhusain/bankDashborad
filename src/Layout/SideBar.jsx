import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoMdHome } from "react-icons/io";
import { IoSettings, IoTrainSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoInvertModeSharp } from "react-icons/io5";
import { SiScrapbox } from "react-icons/si";
import { AiFillContainer } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className=' border-r-[1px] border-[#f7f6f6] h-screen fixed'>
      <div className='flex flex-col items-center gap-3 pt-12 pl-5'>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className='flex flex-col gap-5 mt-12'>
          <Link className={`transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/'>
            {isActive('/') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF]'></span>}
            <IoMdHome className='text-[22px]' />
            Dashboard
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/trans') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/trans'>
            {isActive('/trans') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <IoTrainSharp className='text-[22px]' />
            Transection
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/account') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/account'>
            {isActive('/account') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <MdAccountCircle className='text-[22px]' />
            Accounts
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/invest') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/invest'>
            {isActive('/invest') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <IoInvertModeSharp className='text-[22px]' />
            Investment
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/credit') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/credit'>
            {isActive('/credit') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <SiScrapbox className='text-[22px]' />
            Credit Card
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/loan') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/loan'>
            {isActive('/loan') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <AiFillContainer className='text-[22px]' />
            Loan
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/services') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/services'>
            {isActive('/services') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <MdOutlineHomeRepairService className='text-[22px]' />
            Services
          </Link>
          <Link className={`hover:text-[#2D60FF] transition-all duration-200 ease-in font-[500] text-[22px] flex items-center gap-3 relative ${isActive('/setting') ? 'text-[#2D60FF]' : 'text-[#B1B1B1]'}`} to='/setting'>
            {isActive('/setting') && <span className='h-[52px] w-[5px] rounded-full bg-[#2D60FF] '></span>}
            <IoSettings className='text-[22px]' />
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

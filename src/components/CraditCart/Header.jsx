import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import img from "../../assets/avatar.svg";
const Header = () => {
  return (
    <div className=" flex items-center justify-between">
      <h1 className=" text-[33px] font-bold">Credit Cards</h1>

      <div className=" flex items-center gap-3">
        <button className=" flex items-center gap-3 bg-[#F5F7FA] text-[#718EBF] py-3 px-6 rounded-full">
          <span className=" text-[22px]">
            <CiSearch />
          </span>
          <input
            className=" focus:border-none focus:outline-none bg-transparent"
            type="text"
            placeholder="Search for something"
          />
        </button>
        <button className="bg-[#F5F7FA] text-[#718EBF] py-3 px-3 rounded-full text-[32px]">
          <CiSettings />
        </button>
        <button className="bg-[#F5F7FA] text-[#FE5C73] py-3 px-3 rounded-full text-[32px]">
          <CiBellOn />
        </button>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;

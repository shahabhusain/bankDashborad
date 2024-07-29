import React from "react";

const AddNewCard = () => {
  return (
    <div className="w-[70%] flex flex-col gap-3 mt-3">
      <h1 className=" text-[22px] font-[600] text-[#333B69]">Add New Card</h1>
      <div className=" bg-white py-3 px-5 rounded-xl">
        <p className=" text-[16px] font-[400] text-[#718EBF]">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <form className=" grid grid-cols-2 gap-6 mt-4">
          <div className=" flex flex-col gap-2">
            <label>Card Type</label>
            <input
              className=" border-[1px] border-[#DFEAF2] py-3 px-6 rounded-lg focus:border-none focus:outline-none bg-transparent"
              type="text"
              placeholder="Classic"
            />
          </div>

          <div className=" flex flex-col gap-2">
            <label>Name On Card</label>
            <input
              className=" border-[1px] border-[#DFEAF2] py-3 px-6 rounded-lg focus:border-none focus:outline-none bg-transparent"
              type="text"
              placeholder="My Cards"
            />
          </div>

          <div className=" flex flex-col gap-2">
            <label>Card Number</label>
            <input
              className=" border-[1px] border-[#DFEAF2] py-3 px-6 rounded-lg focus:border-none focus:outline-none bg-transparent"
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className=" flex flex-col gap-2">
            <label>Expiration Date</label>
            <input
              className=" border-[1px] border-[#DFEAF2] py-3 px-6 rounded-lg focus:border-none focus:outline-none bg-transparent"
              type="date"
              placeholder="25 January 2025"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCard;

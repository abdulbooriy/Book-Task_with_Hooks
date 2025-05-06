import React from "react";

const Popup = ({ setAdd }) => {
  return (
    <>
      <div></div>;
      <div className="fixed top-1/2 left-1/2 w-[600px] h-[600px] bg-[#1f2937] rounded-[20px] -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex px-5 py-5 justify-between items-center text-white border-b-[1px]  border-b-gray-600 pb-2.5">
          <h2 className="font-[500] text-[20px] ">Add Book</h2>
          <button
            onClick={() => setAdd(null)}
            className="transition 5.s hover:bg-gray-400 w-10 h-10 text-center rounded-[5px] text-[20px] font-bold">
            x
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
      ;
    </>
  );
};

export default Popup;

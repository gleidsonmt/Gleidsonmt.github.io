import React from "react";

const Divider = ({ orientation, customClass }) => {
  let component =
    orientation == "horizontal" || orientation == "hori" ? (
      <div
        className={`flex  items-center w-full ${
          customClass !== "" && customClass
        }`}
      >
        <div className="h-[1px] w-full border-gray-200 border-dashed  border-[3px] m-5" />
        <div className="m-4 flex flex-column items-center border-gray-400 border-2 p-2 rounded-full">
          <div className="dot w-[10px] h-[10px] bg-gray-500 rounded-full" />
        </div>
        <div className="h-[1px] w-full border-gray-200 border-dashed  border-[3px]  m-5" />
      </div>
    ) : (
      <div
        className={`${
          customClass !== undefined ? customClass : ""
        } w-[1px] border-gray-200 border-dashed border-[3px] max-md:hidden `}
      />
    );

  return component;
};

export default Divider;

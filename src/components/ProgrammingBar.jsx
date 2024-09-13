import React from "react";

const ProgrammingBar = ({ language, percent }) => {
  return (
    <div className="w-full mx-10 flex flex-col gap-2 p-10 ">
      <h5 className="font-bold w-full text-start text-gray-500 flex justify-between">
        {language}
        <span className="text-end text-md font-normal">{percent}%</span>
      </h5>
      <div className="w-full bg-gray-300 rounded-full">
        {/* <div className="h-2 bg-teal-500 rounded-full w-[50%]" /> */}
        <div
          className="h-1 bg-accent rounded-full"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgrammingBar;

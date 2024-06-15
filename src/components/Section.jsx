import React from "react";

const Section = (props) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center p-10 my-16 max-2xl:bg-green-500">
      {props.children}
    </div>
  );
};

export default Section;

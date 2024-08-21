import React from "react";

const DoubleSection = ({ customClass, children }) => {
  return (
    <div
      className={`flex w-screen flex-col sm:flex-col md:flex-col xl:flex-row 2xl:flex-row  ${customClass}`}
    >
      {children}
    </div>
  );
};

export default DoubleSection;
// md:flex-col xl:flex-row max-sm:flex-col min-md:flex-row

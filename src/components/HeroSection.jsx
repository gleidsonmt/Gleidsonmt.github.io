import React from "react";

const HeroSection = (props) => {
  return (
    <div className={` flex flex-col  ${props.customClass}`}>
      {props.children}
    </div>
  );
};

export default HeroSection;

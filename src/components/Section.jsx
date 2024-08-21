import React from "react";

const Section = (props) => {
  return <div className={props.customClass}>{props.children}</div>;
};

export default Section;

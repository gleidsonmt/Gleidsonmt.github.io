import React from "react";

const LinkTop = (props) => {
  return (
    <li className="text-accent font-semibold text-md info-link w-full ">
      <a className="w-full block" href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default LinkTop;

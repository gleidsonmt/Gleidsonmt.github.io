import React from "react";

import { HashLink } from "react-router-hash-link";

const LinkTop = (props) => {
  return (
    <li className="text-accent font-semibold text-md info-link w-full ">
      {/* <a className="w-full block" href={props.link}>
        {props.children}
      </a> */}
      <HashLink smooth to={props.link}>
        {props.children}
      </HashLink>
    </li>
  );
};

export default LinkTop;

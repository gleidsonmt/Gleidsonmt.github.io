import React from "react";

const Button = (props) => {
  return (
    <a
      class="bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent cursor-pointer rounded active:animate-ping"
      href={props.link}
    >
      {props.children}
    </a>
  );
};

export default Button;

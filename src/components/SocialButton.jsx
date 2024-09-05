import React from "react";

const SocialButton = ({ social, link }) => {
  return (
    <li className="border-2 border-gray-500  rounded-full hover:bg-accent h-full text-2xl text-gray-500 hover:text-white hover:border-accent transition active:animate-ping  hover:animate-spin  ">
      <a href={link} className="w-full h-full flex p-4">
        {social}
      </a>
    </li>
  );
};

export default SocialButton;

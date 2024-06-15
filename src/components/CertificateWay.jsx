import React from "react";
import { FaDiamondTurnRight } from "react-icons/fa6";

export const CertifcateWay = ({ text, type, link }) => {
  return (
    <a
      href={link}
      className="flex border-2 flex-col p-2 items-center rounded-full  cursor-pointer"
    >
      {text} -
      <span className="flex flex-row gap-2 justify-start">
        {type} <FaDiamondTurnRight className="text-2xl" />
      </span>
    </a>
  );
};

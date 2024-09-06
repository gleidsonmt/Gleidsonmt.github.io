import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdLocationPin, MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full flex flex-col justify-around items-center p-10 gap-10 text-gray-500 md:flex-row footer">
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className=" flex flex-col items-start gap-4 max-w-60 w-full">
        <div className="flex flex-col items-start">
          <h5 className="font-bold">Phone</h5>
          <a
            href="https://contate.me/gleidsonmt"
            className="flex flex-row items-center gap-2
            hover:scale-110 transition-all duration-100 ease-in-out"
          >
            <FaWhatsapp />
            Whatsapp
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h5 className="font-bold">Email</h5>
          <a
            href="mailto:gleidsonmt@outlook.com"
            className="flex flex-row items-center gap-2 hover:scale-110 transition-all duration-100 ease-in-out"
          >
            <MdMailOutline />
            gleidsonmt@outlook.com
          </a>
          <a
            href="mailto:gleidisonmt@gmail.com"
            className="flex flex-row items-center gap-2 hover:scale-110 transition-all duration-100 ease-in-out"
          >
            <MdMailOutline />
            gleidisonmt@gmail.com
          </a>
        </div>
      </div>
      <div className=" max-w-60 w-full flex-col flex items-start ">
        <h5 className="font-bold">Location</h5>
        <div className="flex flex-col ">
          <h5 className="flex flex-row items-center gap-2">
            <MdLocationPin />
            Brazil
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

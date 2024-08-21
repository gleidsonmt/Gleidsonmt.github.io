import React from "react";

import img from "../assets/img/man.jpg";

const Wallpaper = () => {
  return (
    <div className="w-full col-span-12 lg:col-span-5 p-[22px] ">
      <img
        z-index="0"
        className="w-full max-h-[500px]  object-contain p-10 max-md:max-h-[800px] xl:max-h-[700px] rounded-full shado-box "
        src={img}
        alt="nerd IA photo"
      />
    </div>
  );
};

export default Wallpaper;

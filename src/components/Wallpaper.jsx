import React from "react";

import img from "../assets/img/man.jpg";

const Wallpaper = () => {
  return (
    <div className="w-full col-span-12 p-[22px] sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5 order-0 xl:order-3">
      <img
        z-index="0"
        // className="w-full max-h-[500px]  object-contain p-10 max-md:max-h-[800px] xl:max-h-[700px] rounded-full shado-box "
        className="w-full object-contain  max-w-screen-desktop mx-auto rounded-full
        sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]
         xl:max-h-[600px] 2xl:max-h-[700px] max-sm:max-h-10 min-h-[400px]"
        src={img}
        alt="nerd IA photo"
      />
    </div>
  );
};

export default Wallpaper;

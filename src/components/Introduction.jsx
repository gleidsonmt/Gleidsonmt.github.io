import React from "react";

import SocialButton from "./SocialButton";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const Introduction = () => {
  // w-full flex flex-col col-span-12 lg:col-span-5 p-[55px] hero h-screen lg:h-auto justify-center
  return (
    <div className="col-span-12 mx-20 flex flex-col items-center justify-center sm:col-span-12 md:col-span-12  lg:col-span-12 xl:col-span-5 h-screen xl:h-auto order-2 mb-20 sm:mb-0">
      <h1 className="instagram-bold font-bold text-gray-500 text-[48px] p-2">
        HEY! I'm Gleidson, A Front End Developer
      </h1>
      <p className="pt-10 text-gray-500 text-[22px] ">
        If you're looking for a software developer who is passionate about UI
        and has a knack for creating visually appealing and user-friendly
        applications, I would be thrilled to collaborate with you.
      </p>
      <p className="pt-10 text-gray-500 text-[22px] ">
        Let's bring your ideas to life and create software that not only
        performs flawlessly but also leaves a lasting impression on users.
      </p>
      <div className="flex flex-row flex-wrap gap-12 justify-center items-center p-10">
        <ul className="flex flex-center justify-center xl:gap-6 gap-2">
          <SocialButton
            link="https://www.facebook.com/gleidson.nevesdasilveira"
            social={<SlSocialFacebook />}
          />
          <SocialButton
            link="https://twitter.com/gleidisonmt"
            social={<BsTwitterX />}
          />
          <SocialButton
            link="https://github.com/gleidsonmt"
            social={<SlSocialGithub />}
          />
          <SocialButton
            link="https://www.linkedin.com/in/gleidson-neves-da-silveira-50353a1b2/"
            social={<SlSocialLinkedin />}
          />
          <SocialButton
            link="https://www.youtube.com/@gleidsonneves5895/about"
            social={<SlSocialYoutube />}
          />
        </ul>
        <button className="bg-accent px-4 py-2 border-0 rounded-xl text-white max-w-40 hover:scale-110 hover:border-[1px]  transition-all duration-100 ease-in-out">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Introduction;

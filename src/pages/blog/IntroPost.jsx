import React from "react";
import img from "../../assets/img/img.jpg";
import { GrGithub } from "react-icons/gr";

const IntroPost = () => {
  return (
    <div className="grid grid-cols-12 px-10 md:px-15 lg:px-32 place-items-center gap-8 w-full mt-20 mb-32 order-0">
      <img
        src={img}
        alt=""
        className="round object-contain w-full h-full lg:col-span-3 col-span-2 md:object-contain opacity-95"
      />
      <div className="flex flex-col items-center justify-center col-span-6 lg:col-span-9">
        <h4 className="text-accent instagram-headline font-bold">
          Welcome to my blog.
        </h4>
        {/* <h2 className="text-[23px] font-bold mt-5 text-gray-500">
          {data.title}
        </h2> */}
        <h4 className="line-clamp-6 text-gray-500 mt-5">
          Sometimes I like to study and explain things to myself.. that's the
          way to understand deeper.. if it helps you.. I love it.
        </h4>

        <a
          href=" https://github.com/gleidsonmt"
          className="h-full flex p-4 text-gray-600 font-bold text-2xl cursor-pointer items-center gap-2 hover:scale-110 transition-all duration-100 ease-in-out border-gray-600 border-2 rounded-lg mt-10"
        >
          <GrGithub className="text-gray-600 " />
          See More
        </a>
      </div>
    </div>
  );
};

export default IntroPost;

import React from "react";

const IntroPost = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8 post">
      <img
        src={data.img}
        alt=""
        className="rounded-2xl  object-cover w-full h-full"
      />
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-accent">{data.tag}</h4>
        <h2 className="text-[23px] font-bold mt-5 text-gray-500">
          {data.title}
        </h2>
        <h4 className="line-clamp-6 text-gray-400 mt-5">{data.desc}</h4>
        <div>
          <h3>24 Sept 2024</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroPost;

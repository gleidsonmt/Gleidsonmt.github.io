import React from "react";
import { useNavigate } from "react-router-dom";

const IntroPost = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-12 px-10 md:px-15 lg:px-32 place-items-center gap-8 w-full cursor-pointer mt-32 mb-32"
      onClick={() => {
        navigate("/blog-detail");
      }}
    >
      <img
        src={data.img}
        alt=""
        className="rounded-2xl object-cover w-full h-full lg:col-span-6 xl:max-h-[500px] min-h-[200px] col-span-12"
      />
      <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-6">
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

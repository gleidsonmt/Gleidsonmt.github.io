import React from "react";
import { useNavigate } from "react-router-dom";
import PostSuspense from "../posts/PostSuspense";

const Blogs = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`grid grid-cols-12  md:px-15 lg:px-32 place-items-center  mb-40 justify-center order-2`}
    >
      {posts.map((el, index) => (
        <div
          className={`m-4 cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out col-span-12 ${
            posts.length > 1 ? "md:col-span-6" : "md:col-span-12"
          } `}
          onClick={() => {
            navigate("/blog/post/" + el.id);
          }}
          key={index}
        >
          <img
            src={el.img}
            alt=""
            className="w-full rounded-2xl object-cover h-[200px]"
          />
          <h5 className="text-accent mt-4 font-bold instagram-headline text-lef">
            #{el.tag}
          </h5>
          <h4 className="font-bold text-gray-500 mt-3">{el.title}</h4>
          <h4 className="line-clamp-4 text-gray-600 mt-3">{el.desc}</h4>
          <div className="flex flex-col mt-2">
            <h5 className="text-gray-600">13 Sept 2024</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 md:px-15 lg:px-32 place-items-center  mb-40 justify-center">
      {posts.map((el, index) => (
        <div
          className="m-4 cursor-pointer hover:scale-90 transition-all duration-100 ease-in-out"
          onClick={() => {
            navigate("/post/" + el.id);
          }}
          key={index}
        >
          <img
            src={el.img}
            alt=""
            className="w-full rounded-2xl object-cover h-[200px]"
          />
          <h3 className="text-accent mt-3">{el.tag}</h3>
          <h3 className="font-bold text-gray-500 mt-3">{el.title}</h3>
          <h3 className="line-clamp-4 text-gray-400 mt-3">{el.desc}</h3>
          <div>
            <h3>24 Sept 2024</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

import React, { useState } from "react";
import img from "./../../assets/img/headphones-paint-color.jpg";
// import img from "./../../assets/img/mountain-sunset-river-scenery.jpg";
import { IoSearchOutline } from "react-icons/io5";
// import img from "./../../assets/img/man2.jpg";
const Search = () => {
  const tags = [
    {
      id: 1,
      name: "All",
    },

    {
      id: 2,
      name: "React",
    },

    {
      id: 3,
      name: "React Native",
    },

    {
      id: 4,
      name: "JavaFx",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center mt-20 flex-col gap-10 px-[20px] sm:px-[50px] lg:px-[100px] items-center">
      <div className="flex flex-col justify-center ">
        <img
          src={img}
          alt=""
          // opacity-65
          className="rounded-3xl opacity-65 responsive-img md:max-w-full"
        />
        <div className="bg-white shadow-lg p-4 rounded-lg mt-[-40px] mx-[10%] flex items-center z-0">
          <IoSearchOutline className="text-[20px] text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-start ml-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-10 justify-center mt-5">
        {tags.map((el, index) => (
          <ul
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${
              index == activeIndex ? `bg-accent shadow-xl text-white` : null
            } p-3 pb-2 rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-accent transition-all duration-100 ease-in-out`}
          >
            <li>{el.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import img from "./../../assets/img/headphones-paint-color.jpg";
// import img from "./../../assets/img/mountain-sunset-river-scenery.jpg";
import { IoSearchOutline } from "react-icons/io5";
// import img from "./../../assets/img/man.jpg";
const Search = ({ selectedTag, currentSearch, closeAction }) => {
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
      id: 4,
      name: "JavaFx",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [textSearch, setTextSearch] = useState("");
  const [hidden, setHidden] = useState(false);

  function appearClose(e) {
    console.log("wow");
    setHidden(true);
    setTextSearch("");
    currentSearch();
  }

  function handleChange(e) {
    setHidden(false);
    setTextSearch(e.target.value);
  }

  return (
    <div className="flex justify-center mt-24 flex-col gap-10 px-[20px] sm:px-[50px] lg:px-[100px] items-center z-10">
      <div className="flex flex-col justify-center ">
        <img
          src={img}
          alt=""
          // opacity-65
          className="rounded-3xl opacity-65 object-cover xl:max-h-[600px]"
        />

        <div className="bg-white shadow-lg p-4 rounded-lg mt-[-40px] mx-[10%] flex items-center z-10 h-16">
          <IoSearchOutline className="text-[20px] text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="outline-none text-start ml-2 w-full"
            onChange={currentSearch}
            // onInput={appearClose}
            value={textSearch}
            onInput={handleChange}
            // onChange={appearClose}
          />
          <button
            type="button"
            className={`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-gray-200 active:border-gray-500 ${
              hidden && "hidden"
            }`}
            onClick={() => {
              closeAction();
              appearClose();
            }}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-10 justify-center mt-5 text-gray-500 instagram-bold">
        {tags.map((el, index) => (
          <ul
            key={index}
            onClick={() => {
              setActiveIndex(index);
              selectedTag(el.name);
            }}
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

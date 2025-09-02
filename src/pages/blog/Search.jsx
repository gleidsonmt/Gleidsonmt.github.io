import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
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

  function appearClose() {
    setHidden(true);
    setTextSearch("");
    currentSearch();
  }

  function handleChange(e) {
    setHidden(false);
    setTextSearch(e.target.value);
  }

  return (
    <div className="flex justify-center flex-col gap-2 items-center z-10 order-1">
      <div className="flex flex-col justify-center max-w-4xl w-full">
        {/* <img
          src={img}
          alt=""
          // opacity-65
          className="rounded-xl opacity-65 xl:max-w-[1000px] max-h-[400px] object-cover"
        /> */}

        <div className=" bg-white shadow-xl p-4 rounded-lg mt-[-40px] items-center z-10 h-16 border-gray-700 flex mx-20 gap-2">
          <IoSearchOutline className="text-[20px] text-gray-400 " />
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="outline-none text-start w-full  "
            onChange={currentSearch}
            value={textSearch}
            onInput={handleChange}
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

      <div className="flex flex-col justify-center gap-2 w-full  text-gray-500 instagram-bold m-2 px-2 md:w-auto md:flex-wrap md:flex-row">
        {/* <div className="flex flex-wrap justify-center"> */}
        {tags.map((el, index) => (
          <ul
            key={index}
            onClick={() => {
              setActiveIndex(index);
              selectedTag(el.name);
            }}
            className={`${
              index == activeIndex ? `bg-accent shadow-sm text-white` : null
            } p-3 pb-2 rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]  transition-all duration-100 ease-in-out`}
          >
            <li>{el.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;

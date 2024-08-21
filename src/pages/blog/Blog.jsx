import React from "react";
import SideBar from "./SideBar";
import { BsArrow90DegDown, BsArrowBarLeft, BsArrowRight } from "react-icons/bs";
import { BiArrowFromRight, BiArrowToRight } from "react-icons/bi";

const Blog = () => {
  return (
    <div className="w-full h-full flex p-10 m-10 ">
      <div className="flex w-full h-full items-center justify-center ">
        <SideBar />
        <ol className="relative mt-60 border-s h-full border-gray-200 ">
          <li className="mb-10 ms-4 ">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 flex  text-sm font-normal leading-none text-gray-400 ">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 flex text-sm font-normal leading-none text-gray-400">
              March 2022
            </time>
            <h3 className="text-lg flex font-semibold text-gray-600">
              Marketing UI design in Figma
            </h3>
            <p className="text-base flex font-normal text-gray-500 ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
            <div className="w-full flex my-2">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700   "
              >
                Learn more
                <BsArrowRight />
              </a>
            </div>
          </li>
          <li className="ms-4">
            <div className="absolute flex w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 flex text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-500 flex ">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal flex text-gray-600 ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";

import Data from "../posts_data";
import { useLocation, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import { DiVim } from "react-icons/di";
import remarkGfm from "remark-gfm";

const BlogDetails = () => {
  let { id } = useParams();

  const post = Data.filter((el) => el.id == id)[0];
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`../posts/${post.md}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    // <div className="grid grid-cols-1 p-24 place-items-start">
    <div className="flex flex-col items-center justify-center mt-24 px-10">
      {/* <div className="bg-red-500 h-96 w-96"></div> */}
      <div className="flex flex-col items-start justify-start max-w-5xl gap-2">
        <h3 className="text-[20px] text-start text-accent font-bold instagram-headline">
          {post.tag}
        </h3>
        <h3 className="font-bold text-gray-600 ">{post.title}</h3>
        <img src={post.img} className="rounded-2xl " alt="" />
        <h4 className="mt-5 w-auto text-start text-gray-600 ">{post.desc}</h4>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          children={content}
          className="flex  flex-col justify-start items-start gap-10 h-full leading-9 text-gray-600 mt-10 mb-10"
        ></ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;

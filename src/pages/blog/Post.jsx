import React, { useEffect, useState } from "react";

import Data from "../posts_data";
import { useLocation, useParams } from "react-router-dom";

import "../codeblocks/web/styles/github.min.css";
import PostMarked from "./PostMarked";
import hljs from "../codeblocks/web/highlight";

import global from "../../Global";

const Post = () => {
  const { id } = useParams();

  const post = Data.filter((el) => el.id == id)[0];
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(global.assets + "/src/assets/posts/post_00.md")
      // fetch("/src/assets/posts/post_00.md") // local
      .then((res) => res.text())
      .then((text) => setContent(text));
    highCode();
  }, []);

  function highCode() {
    hljs.highlightAll();
  }

  return (
    // <div className="grid grid-cols-1 p-24 place-items-start">
    <div className="flex flex-col items-center justify-start mt-24 px-10 h-auto">
      <div className="h-full flex flex-col gap-10 ">
        <div className="flex flex-col items-start justify-start max-w-5xl gap-2">
          <h3 className="text-[20px] text-start text-accent font-bold instagram-headline">
            #{post.tag}
          </h3>
          <h3 className="font-bold text-gray-600 ">{post.title}</h3>
          <img src={post.img} className="rounded-2xl " alt="" />
          {/* <h4 className="mt-5 w-auto text-start text-gray-600 ">{post.desc}</h4> */}
        </div>

        <div className="flex flex-col justify-start items-start w-full max-w-5xl">
          <PostMarked content={content} />
          {hljs.highlightAll()}
        </div>
      </div>
    </div>
  );
};

export default Post;

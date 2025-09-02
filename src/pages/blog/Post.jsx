import React, { useEffect, useState } from "react";

import posts from "../../assets/posts/PostsData";
import { useLocation, useParams } from "react-router-dom";

import "../codeblocks/web/styles/github.min.css";
import PostMarked from "./PostMarked";
import hljs from "../codeblocks/web/highlight";
import { CommentEmbed, DiscussionEmbed } from "disqus-react";
import { GrGithub } from "react-icons/gr";

import global from "../../Global";

import dayjs from "dayjs";

const Post = () => {
  const { id } = useParams();

  const post = posts.filter((el) => el.id == id)[0];
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(post);
    fetch(global.assets + `/src/assets/posts/post_0${post.id}.md`)
      // fetch("/src/assets/posts/post_00.md") // local
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
    highCode();
  }, []);

  function highCode() {
    hljs.highlightAll();
  }

  // https://https-gleidsonmt-github-io.disqus.com/admin/settings/react/

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

        <a
          href="https://gist.github.com/gleidsonmt/e6bacc732b27c464fd80f0cbe3a135d8"
          className="h-full flex p-4 text-gray-600 font-bold text-2xl cursor-pointer items-center gap-2 hover:scale-105 transition-all duration-100 ease-in-out w-full bg-gray-100 rounded-lg"
        >
          <GrGithub className="text-gray-600" />
          GitHub Gist
        </a>
        <DiscussionEmbed
          shortname="https-gleidsonmt-github-io"
          config={{
            // url: this.props.article.url,
            url: "https://gleidsonmt.github.io/#/blog/post/" + post.id,
            // identifier: this.props.article.id,
            identifier: post.id.toString(),
            // title: this.props.article.title,
            // title: "Test",
            title: post.title,
            language: "en", //e.g. for Traditional Chinese (Taiwan)
          }}
        />
      </div>
    </div>
  );
};

export default Post;

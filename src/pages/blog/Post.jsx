import React, { useEffect, useState } from "react";

import Data from "../posts_data";
import { useLocation, useParams } from "react-router-dom";
import hljs from "../codeblocks/web/highlight";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../codeblocks/web/styles/github.min.css";

const Post = () => {
  const { id } = useParams();

  const post = Data.filter((el) => el.id == id)[0];
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`../posts/${post.md}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  // useEffect(() => {
  //   window.addEventListener("load", highCode);
  //   return () => {
  //     window.removeEventListener("load", highCode);
  //   };
  // });

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
          <Markdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            className="flex flex-col gap-2 w-full text-left"
            components={{
              // // Map `h1` (`# heading`) to use `h2`s.
              // h1: "h2",
              // // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              // em(props) {
              //   const { node, ...rest } = props;
              //   return <i style={{ color: "red" }} {...rest} />;
              // },
              // code: "code",

              // code(props) {
              //   const { node, className, ...rest } = props;
              //   console.log(className);
              //   return (
              //     // <BlockCode language="css" {...rest}>
              //     //   node
              //     // </BlockCode>
              //     <code
              //       id="block"
              //       className="text-left language-css bg-gray-600 w-full"
              //       {...rest}
              //     />
              //   );
              // },

              h2(props) {
                console.log("here");
                const { ...rest } = props;
                return <h2 className="text-gray-600 text-7xl mt-2" {...rest} />;
              },

              h3(props) {
                const { ...rest } = props;
                return <h2 className="text-gray-600 text-4xl mt-2" {...rest} />;
              },

              p(props) {
                const { ...rest } = props;
                return <p className="text-gray-500 text-3xl mt-2" {...rest} />;
              },

              img(props) {
                const { node, ...rest } = props;
                return <img className="max-w-3xl" {...rest} />;
              },

              pre(props) {
                const { node, children, ...rest } = props;
                let language = "java";
                if (children.props.className != undefined) {
                  language = children.props.className;
                }

                const { ...res } = children.props;
                return (
                  <pre className="text-left bg-gray-100 w-full p-4" {...rest}>
                    <code
                      id="block"
                      style={{
                        backgroundColor:
                          "rgb(243 244 246 / var(--tw-bg-opacity))",
                      }}
                      className={`text-left  w-full bg-gray-100 ${language}`}
                      {...res}
                    ></code>
                  </pre>
                );
              },

              // code(props) {
              //   const { children, className, node, ...rest } = props;
              //   const match = /language-(\w+)/.exec(className || "");
              //   return match ? (
              //     <SyntaxHighlighter
              //       {...rest}
              //       PreTag="div"
              //       children={String(children).replace(/\n$/, "")}
              //       language={match[1]}
              //       style={dark}
              //     />
              //   ) : (
              //     <code {...rest} className={className}>
              //       {children}
              //     </code>
              //   );
              // },
            }}
          >
            {content}
          </Markdown>

          {/* <BlockCode
          code={`.button {
              -fx-background-color: blue;
          }`}
          language="css"
        ></BlockCode>
        */}
        </div>
      </div>
      {hljs.highlightAll()}
    </div>
  );
};

export default Post;

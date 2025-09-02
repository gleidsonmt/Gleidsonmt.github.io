import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import hljs from "../codeblocks/web/highlight";

import global from "../../Global";

const PostMarked = ({ content }) => {
  return (
    <Markdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      className="flex flex-col w-full text-left my-20 h-full gap-y-10"
      components={{
        h2(props) {
          const { ...rest } = props;
          return <h2 className=" text-7xl text-gray-700 font-bold" {...rest} />;
        },

        h3(props) {
          const { ...rest } = props;
          return (
            <h2 className=" text-gray-600 font-bold text-4xl mt-2" {...rest} />
          );
        },

        p(props) {
          const { ...rest } = props;
          return <p className="text-gray-500 text-3xl mt-2" {...rest} />;
        },

        img(props) {
          const { node, ...rest } = props;
          //   return <img className="max-w-3xl" {...rest} />;
          return (
            <img src={props.src} alt={props.alt} className="object-contain" />
          );
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
                  backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  // wordWrap: "break-word",
                }}
                className={`text-left  w-auto bg-gray-100 ${language}`}
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
  );
};

export default PostMarked;

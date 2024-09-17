import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import hljs from "../codeblocks/web/highlight";

import Global from "../../Global";

const PostMarked = ({ content }) => {
  return (
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
          console.log(props.src);
          //   return <img className="max-w-3xl" {...rest} />;
          return (
            <img
              // src={`./src${props.src}`}

              src={"./src/assets/img/gif_circle.gif"}
              alt={props.alt}
              className="max-w-3xl"
            />
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
  );
};

export default PostMarked;

import React, { useEffect } from "react";
{
  /* <link id="style" rel="stylesheet" href="styles/github.min.css"> */
}
import "../codeblocks/web/styles/github.min.css";
import hljs from "../codeblocks/web/highlight";

const BlockCode = (props) => {
  useEffect(() => {
    window.addEventListener("load", highCode);
    return () => {
      window.removeEventListener("load", highCode);
    };
  });

  function highCode() {
    hljs.highlightAll();
  }

  return (
    <>
      <pre
        className=" p-8 text-left w-full"
        style={{
          backgroundColor: "rgb(229 231 235)",
          borderRadius: "10px",
        }}
      >
        <code
          id="block"
          className={`language-${props.language} bg-gray-200  `}
          style={{
            backgroundColor: "rgb(229 231 235)",
          }}
          // style="background-color:  #F5F7FA;"
        >
          {props.code}
        </code>
      </pre>
    </>
  );
};

export default BlockCode;

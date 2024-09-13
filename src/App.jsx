import React from "react";

import { useState } from "react";
import NavBar from "./components/NavBar";

import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

// import hljs from "../codeblocks/web/highlight";
import hljs from "./pages/codeblocks/web/highlight";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  {
    hljs.highlightAll();
  }

  return (
    <div
      className="body w-full h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <NavBar scrollPos={scrollPosition} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;

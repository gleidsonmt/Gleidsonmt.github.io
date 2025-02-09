import React, { createContext, useContext, useEffect } from "react";

import { useState } from "react";
import NavBar from "./components/global/NavBar";

import { Outlet } from "react-router-dom";
import Footer from "./pages/global/Footer";
import hljs from "./pages/codeblocks/web/highlight";

import global from "./Global";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  if (window.location.host.includes("localhost")) {
    global.assets = "";
  }

  return (
    // {
    //   hljs.highlightAll();
    // }
    <div
      className="body w-full h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <NavBar scrollPos={scrollPosition} global={global} />
      <Outlet />
      <Footer />
      {hljs.highlightAll()}
    </div>
  );
};

export default App;

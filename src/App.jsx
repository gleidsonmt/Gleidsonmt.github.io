import React, { createContext, useContext, useEffect } from "react";

import { useState } from "react";
import NavBar from "./components/global/NavBar";

import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import hljs from "./pages/codeblocks/web/highlight";

import global from "./Global";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  // function locationType() {
  //   if (window.location.protocol == "file:") {
  //     return 0;
  //   }
  //   if (!window.location.host.replace(/localhost|127\.0\.0\.1/i, "")) {
  //     return 2;
  //   }
  //   console.log("location", window.location);
  //   console.log("protocol", window.location.protocol);
  //   console.log("host", window.location.host);
  //   return 1;
  // }

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

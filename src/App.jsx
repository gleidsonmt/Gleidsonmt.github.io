import React, { useEffect } from "react";

import { useState } from "react";
import NavBar from "./components/NavBar";

import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import hljs from "./pages/codeblocks/web/highlight";

export const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  function locationType() {
    if (window.location.protocol == "file:") {
      return 0;
    }
    if (!window.location.host.replace(/localhost|127\.0\.0\.1/i, "")) {
      return 2;
    }
    return 1;
  }

  console.log(locationType());
  return (
    // {
    //   hljs.highlightAll();
    // }
    <div
      className="body w-full h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <NavBar scrollPos={scrollPosition} />
      <Outlet />
      <Footer />
      {hljs.highlightAll()}
    </div>
  );
};

export default App;

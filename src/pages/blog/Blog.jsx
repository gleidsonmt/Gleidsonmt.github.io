import React, { useState } from "react";
import IntroPost from "./IntroPost";
import Search from "./Search";
import Blogs from "./Blogs";
import NavBar from "../../components/NavBar";
import Data from "../posts_data";
import Footer from "../Footer";

const Blog = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  return (
    <div className="body w-full overflow-y-scroll " onScroll={handleScroll}>
      <Search />
      <NavBar scrollPos={scrollPosition} />
      <IntroPost data={Data[0]} />
      <Blogs posts={Data} />
      <Footer></Footer>
    </div>
  );
};

export default Blog;

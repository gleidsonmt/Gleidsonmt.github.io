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
    // <div
    //   className="body w-full h-screen overflow-y-scroll "
    //   onScroll={handleScroll}
    // >
    //   <div className="flex flex-col justify-center max-w-screen-2xl mx-auto">
    //     <Search />
    //     <NavBar scrollPos={scrollPosition} />
    //     <IntroPost data={Data[1]} />
    //     <Blogs posts={Data} />
    //     <Footer></Footer>
    //   </div>
    // </div>
    <div>
      <Search />
      <IntroPost data={Data[1]} />
      <Blogs posts={Data} />
    </div>
  );
};

export default Blog;

import React, { useState } from "react";
import IntroPost from "./IntroPost";
import Search from "./Search";
import Blogs from "./Blogs";
import NavBar from "../../components/NavBar";
import Data from "../posts_data";
import Footer from "../Footer";
import { SiYoutubetv } from "react-icons/si";

const Blog = () => {
  const [orgPost, setOrgPost] = useState(Data);
  const [currentTag, setCurrentTag] = useState("All");
  const [currentSearch, setCurrentSearch] = useState("");
  const [order, setOrder] = useState(0);

  function filterPost(tag, name) {
    if (tag.toLowerCase() == "all" && name.toLocaleLowerCase() === "") {
      setOrgPost(Data);
      return;
    }

    const result = Data.filter((item) =>
      tag.toLowerCase() == "all"
        ? item.title.toLowerCase().includes(currentSearch.toLocaleLowerCase())
        : name == ""
        ? item.tag.toLowerCase() == tag.toLowerCase()
        : item.tag.toLowerCase() == tag.toLowerCase() &&
          item.title.toLowerCase().includes(currentSearch.toLocaleLowerCase())
    );

    setOrgPost(result);
  }

  const filterPostTag = (tag) => {
    setCurrentTag(tag);
    return filterPost(tag, currentSearch);
  };

  const filterPostName = (e) => {
    if (e == undefined) {
      setOrder(0);
      return filterPost(currentTag, "");
    } else {
      setOrder(1);
    }
    setCurrentSearch(e.target.value);

    return filterPost(currentTag, e.target.value);
  };

  const closeAction = (e) => {
    setCurrentSearch("");
    filterPost(currentTag, "");
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-col">
      <IntroPost data={Data[0]} ordernation={order} />

      <Search
        selectedTag={(tag) => filterPostTag(tag)}
        currentSearch={(search) => filterPostName(search)}
        closeAction={(event) => closeAction(event)}
      />
      <Blogs posts={orgPost} />
    </div>
  );
};

export default Blog;

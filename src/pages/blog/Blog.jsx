import React, { useState } from "react";
import IntroPost from "./IntroPost";
import Search from "./Search";
import Blogs from "./Blogs";
import posts from "../../assets/posts/PostsData";

const Blog = () => {
  const [orgPost, setOrgPost] = useState(posts);
  const [currentTag, setCurrentTag] = useState("All");
  const [currentSearch, setCurrentSearch] = useState("");
  const [order, setOrder] = useState(0);

  function filterPost(tag, name) {
    if (tag.toLowerCase() == "all" && name.toLocaleLowerCase() === "") {
      setOrgPost(posts);
      return;
    }

    const result = posts.filter((item) =>
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
      <IntroPost data={posts[0]} ordernation={order} />

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

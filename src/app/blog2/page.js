import React from "react";
import BlogCard from "./components/BlogCard";
import BlogHome from "./components/BlogHome";
import FeaturedPost from "./components/FeaturedPost";

const page = () => {
  return (
    <div>
      <BlogCard />
      <BlogHome />
      <FeaturedPost />
    </div>
  );
};

export default page;

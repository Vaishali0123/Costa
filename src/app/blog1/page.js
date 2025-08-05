import React from "react";
import HeadSection from "./components/HeadSection";
import PopularBlogs from "./components/PopularBlogs";
import Card from "./components/Card";
import TrendingBlog from "./components/TrendingBlog";

const page = () => {
  return (
    <div>
      <HeadSection />
      <PopularBlogs />
      <TrendingBlog />
      <Card />
    </div>
  );
};

export default page;

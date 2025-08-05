"use client";

import React from "react";

const blogData = [
  {
    title: "Ultimate Guide to Solo Travel: Tips and Tricks for Every Adventurer",
    author: "Emily Foster",
    date: "Nov 29, 2024",
    image: "/blog/tc1.png",
    avatar: "/blog/card1logo.png",
  },
  {
    title:
      "A Food Lover’s Journey: Top Culinary Destinations Around the World",
    author: "Liam Taylor",
    date: "Nov 29, 2024",
    image: "/blog/tc2.png",
    avatar: "/blog/card3logo.png",
  },
  {
    title: "Adventure Awaits: The Best National Parks to Visit in 2025",
    author: "Clara Wilson",
    date: "Nov 29, 2024",
    image: "/blog/tc3.png",
    avatar: "/blog/card2logo.png",
  },
  {
    title: "Island Escapes: The Most Beautiful Islands to Visit in 2025",
    author: "Sophia Turner",
    date: "Nov 29, 2024",
    image: "/blog/tc4.png",
    avatar: "/blog/card1logo.png",
  },
  {
    title: "Cultural Journeys: Exploring the Rich Heritage of Asia",
    author: "Ethan Walker",
    date: "Nov 29, 2024",
    image: "/blog/tc5.png",
    avatar: "/blog/card3logo.png",
  },
  {
    title: "Luxury on a Budget: Affordable High-End Travel Experiences",
    author: "Laura Martinez",
    date: "Nov 29, 2024",
    image: "/blog/tc6.png",
    avatar: "/blog/card2logo.png",
  },
];

const TrendingBlog = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Trending Blogs</h2>
        <p className="text-gray-600 text-lg">
          Discover how innovation and creativity drive meaningful change
        </p>
      </div>

      {/* Blog Cards in Flex Row Wrap */}
      <div className="flex flex-wrap gap-10 justify-center max-w-[1860px] w-full">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col bg-white overflow-hidden  w-full sm:w-[48%] lg:w-[31%]"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-[300px] object-cover "
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.avatar}
                    alt={blog.author}
                    className="w-8 h-8  object-cover rounded-full"
                  />
                  <span>{blog.author}</span>
                </div>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlog;

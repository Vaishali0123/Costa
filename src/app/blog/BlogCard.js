"use client";
import React from "react";
import { CalendarDays, Users } from "lucide-react";

const cards = [
  { img: "/card1.png", logo: "/card1logo.png", tag: "Tips and Tricks", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card2.png", logo: "/card2logo.png", tag: "Exploring", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card3.png", logo: "/card3logo.png", tag: "Off Topic", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card4.png", logo: "/card4logo.png", tag: "Travel", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card5.png", logo: "/card5logo.png", tag: "Tips and Tricks", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card6.png", logo: "/card6logo.png", tag: "How to", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card7.png", logo: "/card7logo.png", tag: "Travel", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card8.png", logo: "/card5logo.png", tag: "Tips and Tricks", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
  { img: "/card9.png", logo: "/card6logo.png", tag: "How to", title: "Convergent and divergent plate margins", author: "Isabelle O'Conner", date: "25 May, 2021", views: 180 },
];

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 bg-[#FAF7F5] ">
      <div className="flex flex-wrap  justify-center max-w-[1400px] gap-x-4 gap-y-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white text-[#1C1C1E] pb-4 "
          >
            {/* Card Image */}
            <div className="relative">
              <img
                src={card.img}
                className="rounded-xl object-cover w-full h-75"
                alt="card"
              />
              {/* Tag */}
              <div className="absolute top-3 left-3 bg-[#23262F] text-white text-xs px-3 py-1 rounded-full font-medium">
                {card.tag}
              </div>
            </div>

            {/* Title + Avatar */}
            <div className="flex mt-3 items-center ">
              <img src={card.logo} className="h-8 w-8 rounded-full " alt="logo" />
              <div className="ml-3 text-[21px] font-semibold">{card.title}</div>
            </div>

            {/* Author */}
      <p className="pl-11 py-2 text-gray-500 text-sm border-b border-[#E6E8EC]">
        {card.author}
      </p>

            {/* Date and Views */}
            <div className="flex items-center justify-between mt-3 px-2 text-gray-400 text-xs">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} /> {card.date}
              </div>
              <div className="flex items-center gap-2 ">
                <Users size={16} /> {card.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

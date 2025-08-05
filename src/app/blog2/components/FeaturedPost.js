"use client";
import React from "react";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-8 bg-white rounded-[30px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] overflow-hidden h-auto md:h-[600px]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
        <Image
          src="/featuredpost.png"
          alt="Jeep parked by a lake"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col justify-center">
        <span className="bg-[#23262F] text-white text-sm font-semibold px-6 py-2 rounded-full w-fit mb-4">
          Tips and Tricks
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] leading-snug">
          Convergent and <br /> divergent plate{" "}
          <br className="hidden md:block" /> margins
        </h1>

        <p className="text-[#777E90] mt-4 md:mt-6 text-base md:text-[20px] max-w-md">
          Track your workouts, get better results, and be the best version of
          you. Less thinking
        </p>

        <button className="group mt-6 md:mt-10 bg-[#23C55E] text-white font-semibold py-3 px-6 rounded-full flex items-center transition hover:bg-[#1ea94f] w-fit">
          Read more
          <MdArrowForward className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;

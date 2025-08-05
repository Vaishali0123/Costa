"use client";
import React from "react";
import bg from "../../blog/blogbg.png";
import Image from "next/image";

const HeadSection = () => {
  const tt =
    "https://admin.costaricaninsurance.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-16.26.06_145707cb.jpg";
  return (
    <div className="w-full flex flex-wrap justify-between items-center px-6 py-10 bg-white">
      {/* Left Content */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
        <div className="text-black">
          <div className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-tight font-bold font-inter mt-0  sm:mt-28 sm:ml-25 ml-0">
            Make better <br />
            life with insurance
          </div>
          <div className="text-[20px] sm:text-[28px] md:text-[32px] text-[#4B5563] mt-2 font-inter sm:ml-25 ml-0">
            why learn how to blog?
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center w-full lg:w-1/2">
        <div className="w-full max-w-[600px]">
          <img
            src={tt}
            alt="Blog Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadSection;

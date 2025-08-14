"use client";
import React from "react";

const PopularBlogs = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Popular Blogs</h2>
        <p className="text-gray-600 text-lg">
          Ideas, trends, and inspiration for a brighter future
        </p>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] sm:ml-27">
        {/* Left Column: One Tall Card */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md lg:h-[550px] w-full">
            <img
              src="/blog/popularcard1.png"
              alt="Blog"
              className="w-full h-[200px] lg:h-2/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 mb-3 break-words">
                Sustainable Travel Tips: Reducing Your Carbon Footprint
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src="/blog/card1logo.png"
                    alt="Clara Wilson"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Clara Wilson</span>
                </div>
                <span>Nov 29, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Two Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-md w-full lg:h-[260px]">
            {/* Image */}
            <div className="w-full lg:w-[40%] h-[200px] lg:h-full">
              <img
                src="/blog/popularcard2.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[60%] p-4 flex flex-col justify-between">
              <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 mb-3 break-words">
                Chasing Sunsets: The World’s Most Scenic Destinations
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src="/blog/card2logo.png"
                    alt="Amelia Scott"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Amelia Scott</span>
                </div>
                <span>Nov 29, 2024</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-md w-full lg:h-[260px]">
            {/* Image */}
            <div className="w-full lg:w-[40%] h-[200px] lg:h-full">
              <img
                src="/blog/popularcard3.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-[60%] p-4 flex flex-col justify-between">
              <h3 className="text-[24px] lg:text-[30px] font-bold text-gray-900 mb-3 break-words">
                Hidden Gems: Europe’s Best Kept Secret Destinations
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src="/blog/card3logo.png"
                    alt="Oliver Grant"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Oliver Grant</span>
                </div>
                <span>Nov 29, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBlogs;

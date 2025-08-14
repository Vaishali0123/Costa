"use client";
import Link from "next/link";
import React from "react";

function stripImages(html) {
  if (!html) return "";
  return html.replace(/<img[^>]*>/g, ""); // Remove all <img ...> tags
}
// Card component for individual reviews
const ReviewCard = ({ featuredImage, title, content }) => (
  <div
    className="bg-stone-50 hover:scale-105 hover:shadow-2xl hover:mb-4 rounded-2xl overflow-hidden  duration-300 flex flex-col"
    style={{
      width: "299px",
      height: "414px",
      top: "193px",
      opacity: 1,
      transform: "rotate(0deg)",
    }}
  >
    <img
      src={featuredImage?.node?.sourceUrl}
      alt="Insurance review"
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/600x400/d1d5db/374151?text=Image+Not+Found";
      }}
    />
    <div className="p-6 flex flex-col h-full   ">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 ">
        {title}
      </h3>
      {/* <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {content}
      </p> */}
      <div
        className="text-gray-600 text-sm leading-relaxed    mb-4  flex-grow line-clamp-3 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: stripImages(content) }}
      />
      <Link
        href="https://admin.costaricaninsurance.com/understanding-medical-insurance-a-comprehensive-guide/"
        className="text-sm  font-semibold text-gray-800 hover:text-black transition-colors duration-300 flex items-center"
      >
        READ MORE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
);

// Main component
export default function App({ reviewdata }) {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <button className="bg-white border border-gray-300 text-gray-600 text-md font-semibold py-2 px-6 rounded-full   mb-4">
            Genuine Reviews
          </button>
          <h1 className="font-[marcellus] text-4xl font-normal text-gray-800 leading-none tracking-normal">
            Costa Rican Insurance & Mortgages: Genuine Reviews
          </h1>
        </div>

        {/* Flex layout with fixed-size cards */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 ">
          {reviewdata.slice(0, 3).map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="text-center mt-16 ">
          <button className="bg-white border border-gray-300 text-gray-600 text-md font-semibold py-2 px-6 rounded-full  ">
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

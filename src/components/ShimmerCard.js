import React from "react";

const ShimmerCard = () => (
  <div className="w-full max-w-sm bg-white rounded-lg shadow animate-pulse">
    <div className="h-48 bg-gray-300 rounded-t-lg"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
    </div>
  </div>
);

export default ShimmerCard;

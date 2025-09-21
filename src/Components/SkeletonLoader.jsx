// src/components/SkeletonLoader.jsx
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 animate-pulse">
      {/* Title Placeholder */}
      <div className="h-6 w-1/3 bg-gray-300 rounded mb-6"></div>

      {/* Card Placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-xl shadow-md space-y-3 w-full"
          >
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
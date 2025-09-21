// src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Unique Dual Ring Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-indigo-500 border-t-transparent rounded-full animate-spin-fast"></div>
          <div className="absolute w-12 h-12 top-2 left-2 border-4 border-pink-500 border-b-transparent rounded-full animate-spin-fast-reverse"></div>
        </div>

        {/* Animated Text */}
        <p className="text-gray-700 text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
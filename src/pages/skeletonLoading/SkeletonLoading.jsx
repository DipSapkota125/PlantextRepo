import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      {/* Skeleton Card */}
      <div className="bg-white shadow-md p-4 mb-4 rounded-md animate-pulse">
        {/* Skeleton Image */}
        <div className="rounded-md bg-gray-300 h-32 mb-4"></div>

        {/* Skeleton Text Lines */}
        <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2"></div>
      </div>

      {/* Multiple Skeleton Cards (Repeat as needed) */}
      <div className="bg-white shadow-md p-4 mb-4 rounded-md animate-pulse">
        <div className="rounded-md bg-gray-300 h-32 mb-4"></div>
        <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;

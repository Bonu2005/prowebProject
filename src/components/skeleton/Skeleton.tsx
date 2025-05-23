import React from 'react';
import { SkeletonProps } from '../../types';

const Skeleton: React.FC<SkeletonProps> = ({ count }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {Array(count)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md animate-pulse"
          >
            <div className="h-[260px] w-full bg-gray-700"></div>

            <div className="p-5 space-y-3">
              <div className="h-5 w-3/4 bg-gray-600 rounded"></div>
              <div className="h-4 w-full bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
              <div className="flex justify-between items-center pt-3">
                <div className="h-5 w-1/4 bg-gray-600 rounded"></div>
                <div className="h-8 w-20 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Skeleton);

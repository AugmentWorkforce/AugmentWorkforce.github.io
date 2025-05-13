'use client';

import { useState, useEffect } from 'react';

export default function TeachingItem({ course }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only start interval if there are multiple photos
  useEffect(() => {
    if (course.photos?.length > 1) {
      const id = setInterval(() => {
        setCurrentSlide((p) => (p + 1) % course.photos.length);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [course.photos]);

  // Decide what to render for the left side:
  const PhotoBlock = () => {
    if (!course.photos?.length) return null;

    // Multiple images → slideshow
    if (course.photos.length > 1) {
      return (
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-video">
            <img
              src={course.photos[currentSlide]}
              alt={`${course.title} slide ${currentSlide + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      );
    }

    // Exactly one image → static
    return (
      <div className="w-full md:w-1/3">
        <div className="relative w-full aspect-video">
          <img
            src={course.photos[0]}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-neutral-800">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: either static image or slideshow */}
        <PhotoBlock />

        {/* Right: text */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-white">{course.title}</h2>
          <p className="text-foreground-secondary mt-2">{course.description}</p>
          <p className="text-gray-400 mt-2">Semester: {course.semester}</p>
        </div>
      </div>
    </div>
  );
}
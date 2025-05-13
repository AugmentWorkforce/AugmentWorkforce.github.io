'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function TeachingItem({ course }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = useMemo(() => {
    return Array.isArray(course.photos)
      ? course.photos
      : course.photo
      ? [course.photo]
      : [];
  }, [course.photos, course.photo]);

  useEffect(() => {
    if (photos.length > 1) {
      const id = setInterval(() => {
        setCurrentSlide((p) => (p + 1) % photos.length);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [photos]);


  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-neutral-800">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: Image / Slideshow */}
        {photos.length > 0 && (
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-video">
              <Image
                src={photos.length > 1 ? photos[currentSlide] : photos[0]}
                alt={photos.length > 1 ? `${course.title} slide ${currentSlide + 1}` : course.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Right: text */}
        <div className={`w-full ${photos.length > 0 ? 'md:w-2/3' : 'md:w-full'} flex flex-col justify-center`}>
          <h2 className="text-xl font-semibold text-white">{course.title}</h2>
          <p className="text-foreground-secondary mt-2">{course.description}</p>
          <p className="text-gray-400 mt-2">Semester: {course.semester}</p>
        </div>
      </div>
    </div>
  );
}
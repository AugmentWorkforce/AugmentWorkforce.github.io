'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function ResearchProject({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ensure we always have an array
  const images = useMemo(() => {
    return Array.isArray(project.images)
      ? project.images
      : project.image
      ? [project.image]
      : [];
  }, [project.images, project.image]);

  // Auto-advance only when there's more than one
  useEffect(() => {
    if (images.length > 1) {
      const id = setInterval(() => {
        setCurrentSlide((p) => (p + 1) % images.length);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [images]);

  if (!images.length) return null;

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-neutral-800 flex flex-col md:flex-row items-center gap-4">
      {/* Image / Slideshow */}
      <div className="w-full md:w-1/3">
        <div className="relative w-full aspect-video">
          <Image
            src={images.length > 1 ? images[currentSlide] : images[0]}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-foreground-secondary mt-2">{project.description}</p>
      </div>
    </div>
  );
}
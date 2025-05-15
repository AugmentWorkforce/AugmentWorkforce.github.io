"use client";

import Image from 'next/image';
import newsData from '../data/news.json';
import slidesData from '../data/slides.json';
import { useState, useEffect } from 'react';

export default function Home() {
  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="px-4">
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row gap-6 items-center mb-12">
        {/* Left: Description */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-purple-lsue mb-4">
            Workforce Augmentation Lab
          </h1>
          <p className="text-lg text-foreground-secondary">
            The Workforce Augmentation Lab at LSU&apos;s Bert S. Turner Department of Construction Management pioneers the integration of advanced robotics, AI, and wearable technologies to empower workers and redefine productivity in high-risk industries like construction. Our research focuses on designing intelligent systems that collaborate seamlessly with humans, enhancing physical and cognitive capabilities while prioritizing safety, ergonomics, and energy efficiency. By merging sensor-driven automation, real-time hazard mitigation, and data-driven workflows, we create adaptive tools and environments that reduce injuries, optimize resource use, and elevate workforce potential. Committed to human-centric innovation, the lab bridges engineering, occupational health, and machine learning to foster safer, smarter, and more sustainable industries for tomorrow&apos;s workforce.
          </p>
        </div>

        {/* Right: Photo Collage */}
        <div className="relative w-full max-w-xl aspect-[3/2] mx-auto">
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '10%', left: '5%' }}
          >
            <Image
              src="/images/simulator1.jpg"
              alt="Workforce Augmentation Lab research example 1"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '50%', left: '65%' }}
          >
            <Image
              src="/images/SPOT1.jpg"
              alt="Workforce Augmentation Lab research example 2"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '10%', left: '35%' }}
          >
            <Image
              src="/images/EXO.stand1.jpg"
              alt="Workforce Augmentation Lab research example 3"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '50%', left: '5%' }}
          >
            <Image
              src="/images/robotic.arm1.jpg"
              alt="Workforce Augmentation Lab research example 4"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '10%', left: '65%' }}
          >
            <Image
              src="/images/image5.jpg"
              alt="Workforce Augmentation Lab research example 5"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div
            className="photo-collage absolute w-[30%] aspect-square rounded-full border-4 border-transparent overflow-hidden"
            style={{ top: '50%', left: '35%' }}
          >
            <Image
              src="/images/image6.jpg"
              alt="Workforce Augmentation Lab research example 6"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="mb-12 mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <Image
              src={slidesData[currentSlide].src}
              alt={slidesData[currentSlide].caption}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 py-2">
              <p className="text-center text-white text-sm">
                {slidesData[currentSlide].caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block">
          Latest News
        </h2>
        <div className="space-y-6">
          {sortedNews.map((news, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white">
                {news.title}
              </h3>
              <p className="text-sm text-[#FDD023] mb-2">{news.date}</p>
              <p className="text-foreground-secondary">
                {news.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
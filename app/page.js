"use client";

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
  }, [slidesData.length]);

  return (
    <div>
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Left: Description */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-purple-lsue mb-4">
            Workforce Augmentation Lab
          </h1>
          <p className="text-lg text-foreground-secondary">
            The Workforce Augmentation Lab at LSU's Department of Construction Management pioneers the integration of advanced robotics, AI, and wearable technologies to empower workers and redefine productivity in high-risk industries like construction. Our research focuses on designing intelligent systems that collaborate seamlessly with humans, enhancing physical and cognitive capabilities while prioritizing safety, ergonomics, and energy efficiency. By merging sensor-driven automation, real-time hazard mitigation, and data-driven workflows, we create adaptive tools and environments that reduce injuries, optimize resource use, and elevate workforce potential. Committed to human-centric innovation, the lab bridges engineering, occupational health, and machine learning to foster safer, smarter, and more sustainable industries for tomorrow’s workforce.
          </p>
        </div>

        {/* Right: Circular Photo Collage */}
        <div className="w-full md:w-1/2 flex justify-center relative h-80 md:h-80">
          <img
            src="/images/intro1.png"
            alt="intro 1"
            className="photo-collage absolute w-36 h-36 md:w-43 md:h-43 rounded-full border-4 border-transparent"
            style={{ top: '10%', left: '10%' }}
          />
          <img
            src="/images/intro2.png"
            alt="intro 2"
            className="photo-collage absolute w-36 h-36 md:w-43 md:h-43 rounded-full border-4 border-transparent"
            style={{ top: '50%', left: '50%' }}
          />
          <img
            src="/images/intro3.png"
            alt="intro 3"
            className="photo-collage absolute w-36 h-36 md:w-43 md:h-43 rounded-full border-4 border-transparent"
            style={{ top: '10%', left: '40%' }}
          />
          <img
            src="/images/intro4.png"
            alt="intro 4"
            className="photo-collage absolute w-36 h-36 md:w-43 md:h-43 rounded-full border-4 border-transparent"
            style={{ top: '50%', left: '20%' }}
          />
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="mb-12 mt-12">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-opacity duration-1000 ease-in-out relative"
              style={{ opacity: 1 }}
            >
              <img
                src={slidesData[currentSlide].src}
                alt={slidesData[currentSlide].caption}
                className="w-full object-contain md:h-96 md:object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 opacity-70 py-2">
                <p className="text-center text-white text-sm">
                  {slidesData[currentSlide].caption}
                </p>
              </div>
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
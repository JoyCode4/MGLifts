import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({
  images = [],
  alt = "Product",
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Ensure images is always an array
  const imageArray = Array.isArray(images) ? images : [images];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || imageArray.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageArray.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, imageArray.length, autoPlayInterval]);

  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + imageArray.length) % imageArray.length
    );
  };

  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const goToSlide = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Resume auto-play when mouse leaves
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className="relative w-full h-full group"
      onMouseLeave={handleMouseLeave}
    >
      {/* Images */}
      <div className="relative w-full h-full overflow-hidden">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image}
              alt={`${alt} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show if multiple images */}
      {imageArray.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
            aria-label="Next image"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToSlide(index, e)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-[#D4AF37]"
                    : "w-2 h-2 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm z-10">
            {currentIndex + 1} / {imageArray.length}
          </div>
        </>
      )}

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ImageCarousel;

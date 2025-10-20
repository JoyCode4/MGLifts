import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const ImageLightbox = ({
  images = [],
  initialIndex = 0,
  isOpen,
  onClose,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Ensure images is always an array
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + imageArray.length) % imageArray.length
    );
  }, [imageArray.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  }, [imageArray.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
        aria-label="Close lightbox"
      >
        <FaTimes className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Image Counter */}
      {imageArray.length > 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
          <span className="text-white font-semibold text-lg">
            {currentIndex + 1} / {imageArray.length}
          </span>
        </div>
      )}

      {/* Title */}
      {title && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] px-8 py-3 rounded-full shadow-2xl">
          <span className="text-white font-bold text-lg">{title}</span>
        </div>
      )}

      {/* Main Content */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {imageArray.length > 1 && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 z-50 p-4 bg-white/10 hover:bg-[#D4AF37] rounded-full backdrop-blur-md transition-all duration-300 group shadow-2xl hover:scale-110"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Image Display */}
        <div className="relative max-w-7xl max-h-full flex items-center justify-center">
          <div className="relative">
            {imageArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title || "Product"} - Image ${index + 1}`}
                className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0"
                }`}
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            ))}

            {/* Image Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] opacity-20 blur-2xl rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Next Button */}
        {imageArray.length > 1 && (
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 z-50 p-4 bg-white/10 hover:bg-[#D4AF37] rounded-full backdrop-blur-md transition-all duration-300 group shadow-2xl hover:scale-110"
            aria-label="Next image"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {imageArray.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 max-w-full overflow-x-auto px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
          {imageArray.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#D4AF37] scale-110 shadow-lg shadow-[#D4AF37]/50"
                  : "border-white/30 hover:border-white/60 hover:scale-105"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Navigation Dots (Alternative for many images) */}
      {imageArray.length > 8 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
          {imageArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-[#D4AF37]"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;

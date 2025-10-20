import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll animations
 * @param {string} animationType - Type of animation: 'fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'zoomIn', 'flipIn'
 * @param {number} threshold - Percentage of element visibility to trigger animation (0-1)
 * @param {number} delay - Delay before animation starts (in ms)
 */
export const useScrollAnimation = (
  animationType = "fadeIn",
  threshold = 0.1,
  delay = 0
) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, isVisible]);

  const animationClasses = {
    fadeIn: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
    slideUp: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",
    slideLeft: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-12",
    slideRight: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-12",
    zoomIn: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
    flipIn: isVisible ? "opacity-100 rotateX-0" : "opacity-0 rotateX-90",
  };

  return {
    ref: elementRef,
    className: `transition-all duration-1000 ease-out ${
      animationClasses[animationType] || animationClasses.fadeIn
    }`,
    isVisible,
  };
};

export default useScrollAnimation;

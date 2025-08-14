"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
const images = [
  {
    src: "/cars.jpg",
  },
  {
    src: "/lifes.jpg",
  },
  {
    src: "/education.jpg",
  },
];

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

const AnimatedOverlayCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  const total = useMemo(() => images.length, []);

  useEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setContainerWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + total) % total === index;
    const isRight = (activeIndex + 1) % total === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        transform: `translateX(-${gap}px) translateY(-${
          gap * 0.8
        }px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        transform: `translateX(${gap}px) translateY(-${
          gap * 0.8
        }px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
    };
  }

  return (
    <div
      className="relative w-full max-w-sm md:max-w-none md:w-[20.6vw] h-[48vh] md:h-[52vh] mb-10 sm:mb-10 md:mb-0 md:mt-0 min-[1101px]:ml-[13vw]"
      ref={ref}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute w-full h-full rounded-3xl overflow-hidden shadow-lg"
          style={getImageStyle(index)}
        >
          <img
            src={image.src}
            // alt={`Slide ${index}`}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
          />
          {/* Overlay only for center image */}
          {/* {index === activeIndex && (
            <>
              <div className="absolute inset-0 rounded-3xl bg-black/30 z-10"></div>
              <div className="absolute inset-0 z-20 flex h-full flex-col items-center justify-end p-6 text-center text-white">
                <h2 className="text-xl font-semibold">MY INSURANCE ACCOUNT</h2>
                <p className="my-4 text-base max-w-[85%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <button className="w-full max-w-xs rounded-full bg-[#1E3161] px-6 py-3 font-semibold transition duration-300 hover:bg-opacity-90 hover:scale-105 transform cursor-pointer">
                  MY-ACCESS
                </button>
              </div>
            </>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default AnimatedOverlayCarousel;

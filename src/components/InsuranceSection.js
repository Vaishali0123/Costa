"use client";

import React, { useState, useEffect } from "react";
import { FaCarAlt, FaPaw, FaHeart, FaPlane } from "react-icons/fa";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
function stripImages(html) {
  if (!html) return "";
  return html.replace(/<img[^>]*>/g, ""); // Remove all <img ...> tags
}
// Insurance data for each category
const insuranceData = {
  car: {
    title: "Car Insurance",
    description:
      "Make a plan for the emergence of life. We protect your most precious assets.",
    subDescription:
      "Discover the most appropriate fit for you and your Family.",
    image: "/car.jpg",
  },
  life: {
    title: "Life Insurance",
    description:
      "Secure your family's financial future. Our life insurance plans provide peace of mind.",
    subDescription: "Choose a policy that grows with your life's milestones.",
    image: "/life.jpg",
  },
  pet: {
    title: "Pet Insurance",
    description:
      "From check-ups to emergency procedures, our pet insurance helps you afford the best care.",
    subDescription: "Because they're not just pets, they're family.",
    image: "/dog.jpg",
  },
  travel: {
    title: "Travel Insurance",
    description:
      "Travel worry-free with coverage for delays, emergencies, and more.",
    subDescription: "Your safety net wherever you go.",
    image: "/travel.jpg",
  },
};

// Icon map using react-icons
const iconMap = {
  car: <FaCarAlt className="w-6 h-6" />,
  life: <FaHeart className="w-6 h-6" />,
  pet: <FaPaw className="w-6 h-6" />,
  travel: <FaPlane className="w-6 h-6" />,
};

// Icon navigation component
const InsuranceMainCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <LayoutGroup>
      <div className="z-10 flex gap-4 lg:flex-col lg:gap-6">
        {Object.keys(iconMap).map((key) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`h-12 w-12 rounded-full flex items-center justify-center hover:scale-105 transition
              ${
                activeCategory === key
                  ? "bg-orange-500 text-white scale-125"
                  : "bg-orange-100 text-orange-500"
              }`}
            layout
            layoutId={key}
            transition={{ duration: 2 }}
          >
            {iconMap[key]}
          </motion.button>
        ))}
      </div>
    </LayoutGroup>
  );
};

// Main section layout
const Insurance = ({ insurancedata }) => {
  const [activeCategory, setActiveCategory] = useState("car");

  // Auto-switch logic
  useEffect(() => {
    const keys = Object.keys(insuranceData);
    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = keys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = insuranceData[activeCategory];

  return (
    <section
      className="bg-white py-16"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex w-full  max-w-6xl flex-col lg:flex-row gap-10 px-4 sm:px-6 lg:px-8 items-start">
        {/* Left - Icons */}
        <InsuranceMainCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Center - Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            exit={{ opacity: 0, x: 20, transition: { duration: 0.4 } }}
            className="flex-1 max-w-md text-center lg:text-left "
          >
            <h2 className="text-4xl font-bold text-gray-800">{data.title}</h2>
            <p className="mt-6 text-gray-600">{data.description}</p>
            <p className="mt-4 text-gray-500">{data.subDescription}</p>
            <button className="mt-8 h-12 w-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition">
              →
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right - Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            className="flex-1 max-w-lg relative"
          >
            <div className="absolute  top-4 left-4 w-[376px] h-[277px] bg-orange-100/50 rounded-3xl"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto object-cover rounded-2xl aspect-[4/3]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Insurance;

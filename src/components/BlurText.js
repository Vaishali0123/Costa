"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BlurText({
  delay = 0,
  animateBy = "words", // "words" or "letters"
  direction = "top",
  className = "",
  style = {},
}) {
  const text = "We guarantee the future of the things you care about!";
  const items = animateBy === "letters" ? text.split("") : text.split(" ");

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "top" ? -20 : 20,
      filter: "blur(4px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: delay / 1000 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={className} style={style}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="inline-block"
        >
          {item}
          {animateBy === "words" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </div>
  );
}

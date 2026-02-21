"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { HERO_IMAGES } from "@/constants/hero";

export function HeroCards({
  isDark,
  containerRef,
}: {
  isDark: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const images = HERO_IMAGES;

  return (
    <div
      className="absolute inset-0 z-10 w-full h-full pointer-events-auto"
      ref={containerRef}
    >
      {images.map((img, i) => (
        <DraggableCard
          key={i}
          containerRef={containerRef}
          src={img.src}
          alt={img.alt}
          rotate={img.rotate}
          top={img.top}
          left={img.left}
          // We increase the base size by using a scale or replacing the class dynamically
          // Or we can just let the Card component apply a scale-125 transform.
          className={img.width}
          isDark={isDark}
          index={i}
        />
      ))}
    </div>
  );
}

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  isDark: boolean;
  index: number;
}

function DraggableCard({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  isDark,
  index,
}: CardProps) {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      const z = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
      );
      if (!isNaN(z) && z > maxZIndex) {
        maxZIndex = z;
      }
    });
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut" as const,
      }}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute rounded-xl cursor-grab active:cursor-grabbing transition-shadow duration-300",
        // Scaled up by 25% to make them "a bit large and well organized"
        "scale-[1.15] xl:scale-[1.25]", // Increased size
        isDark
          ? "bg-[#0f1a3a] p-1.5 pb-2 border border-white/15 shadow-2xl shadow-black/40 hover:shadow-primary/20"
          : "bg-white p-1.5 pb-2 border border-[#d6e6ff] shadow-xl shadow-blue-900/10 hover:shadow-primary/20",
        className,
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0}
      whileHover={{ scale: 1.35, zIndex: 999 }} // Pop out beautifully on hover
      whileTap={{ scale: 1.25 }}
    >
      <div className="relative w-full h-auto rounded-lg overflow-hidden select-none">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover pointer-events-none select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

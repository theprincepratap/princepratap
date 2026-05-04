"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "https://picsum.photos/600/600?random=1",
      alt: "AI Project 1",
      code: "AI & ML",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=2",
      alt: "ML Project 2",
      code: "Machine Learning",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=3",
      alt: "Deep Learning 3",
      code: "Deep Learning",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=4",
      alt: "NLP Project 4",
      code: "NLP",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=5",
      alt: "Computer Vision 5",
      code: "Vision",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=6",
      alt: "Data Science 6",
      code: "Data Science",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=7",
      alt: "AI Solutions 7",
      code: "AI Solutions",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=8",
      alt: "ML Pipeline 8",
      code: "ML Pipeline",
      link: "#",
    },
    {
      src: "https://picsum.photos/600/600?random=9",
      alt: "Development 9",
      code: "Development",
      link: "#",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <HoverExpand_001 className="" images={images} />{" "}
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string; link: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "24rem" : "5rem",
                height: activeImage === index ? "24rem" : "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-between p-4"
                  >
                    <div></div>
                    <div className="flex flex-col gap-2">
                      <p className="text-left text-xs text-white/50">
                        {image.code}
                      </p>
                      <a
                        href={image.link}
                        className="px-3 py-1 text-xs bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };

/**
 * Skiper 52 HoverExpand_001 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

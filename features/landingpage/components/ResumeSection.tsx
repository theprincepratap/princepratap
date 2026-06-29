"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ResumeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="resume"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
      }}
      className="w-full px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden"
    >
      {/* ── Section Header ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16 md:mb-20"
      >
        <h2
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #a0a8ff 50%, #6c77ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Resume
        </h2>
        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          A quick overview of my education, technical skills, projects,
          certifications, and achievements. You can also download my complete
          resume.
        </p>
      </motion.div>

      {/* ── Two-Column Layout ───────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-16">
        {/* ── Left Column: Resume Preview Card ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex-1 flex flex-col items-center gap-6"
          style={{ minWidth: 0 }}
        >
          {/* Card */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative"
            style={{
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.6), 0 2px 12px rgba(108,119,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Subtle glow accent at top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(160,168,255,0.6), transparent)",
              }}
            />

            <div className="p-4 md:p-6">
              <Image
                src="/resume.png"
                alt="Prince Pratap Resume Preview"
                width={900}
                height={1200}
                className="w-full h-auto object-contain"
                style={{ borderRadius: "10px" }}
                priority
              />
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.a
            href="/resume.png"
            download="PrincePratap_Resume.png"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 32px rgba(108,119,255,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white text-sm font-semibold tracking-wide"
            style={{
              background:
                "linear-gradient(135deg, #6c77ff 0%, #4f5bd5 50%, #3949ab 100%)",
              boxShadow: "0 4px 20px rgba(108,119,255,0.35)",
              border: "1px solid rgba(160,168,255,0.3)",
            }}
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>

        {/* ── Right Column: Portrait ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="flex-1 flex items-start justify-center"
          style={{ minWidth: 0 }}
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative w-full"
          >
            {/* Soft ground glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(108,119,255,0.35) 0%, transparent 70%)",
                filter: "blur(16px)",
                zIndex: 0,
              }}
            />
            <Image
              src="/princeimgg.png"
              alt="Prince Pratap"
              width={1654}
              height={2339}
              className="w-full h-auto relative z-10"
              style={{
                filter:
                  "drop-shadow(0 24px 56px rgba(108,119,255,0.3)) drop-shadow(0 8px 24px rgba(0,0,0,0.55))",
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

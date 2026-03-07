"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];
import { cn } from "@/lib/utils";
import { bodoniModa, inter, geist } from "@/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

// ── Variants ──────────────────────────────────────────────────────────────────

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ── SVG Noise ─────────────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none z-1 opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="hero-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" />
    </svg>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const gsapImageRef = useRef<HTMLDivElement>(null);
  const gsapTextRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 65, damping: 22 };
  const smX = useSpring(mouseX, springCfg);
  const smY = useSpring(mouseY, springCfg);

  const rotateX = useTransform(smY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smX, [-0.5, 0.5], [-10, 10]);
  const bgTxtX  = useTransform(smX, [-0.5, 0.5], [-28, 28]);
  const bgTxtY  = useTransform(smY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // GSAP scroll parallax — bg image scales subtly on scroll
  useGSAP(
    () => {
      if (!gsapImageRef.current || !heroRef.current) return;
      gsap.to(gsapImageRef.current, {
        scale: 1.03,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
      if (gsapTextRef.current) {
        gsap.to(gsapTextRef.current, {
          y: "-8%",
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.8 },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Film grain */}
      <NoiseOverlay />

      {/* ── FULL-SCREEN BACKGROUND IMAGE ──────────────────────────────────── */}
      <div ref={gsapImageRef} className="absolute inset-0 z-1">
        <motion.div
          className="w-full h-full"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/hero.png"
              alt="Prince Kumar"
              fill
              priority
              sizes="100vw"
              className="object-cover md:object-contain object-center brightness-[0.55] contrast-[1.08]"
            />
          </motion.div>
        </motion.div>
      </div>

      
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <motion.header
        className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-7 md:px-14 md:py-9"
        variants={fadeUp} initial="hidden" animate="visible"
      >
        <div className={cn("flex items-center gap-1.5", geist.className)}>
          <span className="text-white/90 text-[13px] font-medium tracking-[0.18em] uppercase">Prince</span>
          <span className="text-white/35 text-[13px] font-light tracking-[0.18em] uppercase">Kumar</span>
        </div>

        <motion.button
          aria-label="Open menu"
          className={cn(
            "flex items-center gap-2.5 px-5 py-2.5 rounded-full",
            "border border-white/12 bg-white/3 backdrop-blur-sm",
            "text-white/50 text-[11px] tracking-[0.25em] uppercase",
            inter.className
          )}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.24)", color: "rgba(255,255,255,0.82)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.18 }}
        >
          <Menu className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Menu</span>
        </motion.button>
      </motion.header>

      {/* ── BACKGROUND GIANT TYPOGRAPHY ────────────────────────────────────── */}
      <div ref={gsapTextRef} className="absolute inset-0 z-5 pointer-events-none select-none flex items-center justify-center">
        <motion.div style={{ x: bgTxtX, y: bgTxtY }}>
          <motion.h1
            className={cn("font-black tracking-[-0.02em] leading-none whitespace-nowrap", bodoniModa.className)}
            style={{ fontSize: "clamp(86px, 10.2vw, 192px)", color: "rgba(255,255,255,0.065)" }}
            initial={{ opacity: 0, scale: 0.974 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.55 }}
          >
          
          </motion.h1>
        </motion.div>
      </div>

      {/* ── VIGNETTE EDGES ─────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 z-3 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px 60px rgba(0,0,0,0.75)",
        }}
      />

      {/* ── LEFT CONTENT — desktop ─────────────────────────────────────────── */}
      <motion.div
        className="absolute z-15 left-8 md:left-14 top-1/2 -translate-y-[52%] hidden md:flex flex-col gap-7 max-w-[38%]"
        variants={stagger} initial="hidden" animate="visible"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <div className="h-px w-9 bg-white/20" />
          <span className={cn("text-white/35 text-[10px] tracking-[0.35em] uppercase", inter.className)}>
            AI Engineer
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className={cn("text-white font-black leading-[0.9] tracking-[-0.03em]", bodoniModa.className)}
          style={{ fontSize: "clamp(46px, 4.8vw, 86px)" }}
        >
          Buil<span className="text-red-500">d</span>ing
          <br />
          <span className="text-white/22">inte<span className="text-red-500/50">ll</span>igent</span>
          <br />
          sys<span className="text-red-500">t</span>ems
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className={cn("text-white/28 text-[13px] leading-[1.8] max-w-64", inter.className)}
        >
          Designing and deploying AI-powered products — from LLMs and RAG pipelines to intelligent web interfaces.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <motion.button
            className={cn("px-6 py-2.5 rounded-full bg-white text-[#0A0A0A] text-[11px] font-semibold tracking-[0.18em] uppercase", inter.className)}
            whileHover={{ scale: 1.05, backgroundColor: "#e6e6e6" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            View Work
          </motion.button>

          <motion.button
            className={cn("px-6 py-2.5 rounded-full border border-white/12 text-white/48 text-[11px] tracking-[0.18em] uppercase", inter.className)}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.28)", color: "rgba(255,255,255,0.82)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── RIGHT CONTENT — desktop ────────────────────────────────────────── */}
      <motion.div
        className="absolute z-15 right-8 md:right-14 top-1/2 -translate-y-[52%] hidden md:flex flex-col gap-8 items-end max-w-[30%]"
        variants={stagger} initial="hidden" animate="visible"
      >
        {/* Available badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-2.5">
          <span className={cn("text-white/35 text-[10px] tracking-[0.35em] uppercase", inter.className)}>
            Available
          </span>
          <div className="h-px w-9 bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Skills list */}
        <motion.div variants={fadeUp} className="flex flex-col items-end gap-3">
          {[
            { label: "LLMs",      value: "GPT-4 · Claude · Gemini" },
            { label: "Frameworks", value: "LangChain · LlamaIndex"  },
            { label: "ML / DL",   value: "PyTorch · HuggingFace"   },
            { label: "Infra",     value: "FastAPI · Docker · GCP"  },
          ].map(({ label, value }, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className={cn("text-white/22 text-[10px] tracking-[0.28em] uppercase", inter.className)}>
                {value}
              </span>
              <span className={cn(i % 2 === 0 ? "text-red-500/70" : "text-white/50", "text-[10px] tracking-[0.35em] uppercase font-semibold", inter.className)}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp} className="w-full h-px bg-white/10" />

        {/* Experience stat */}
        <motion.div variants={fadeUp} className="flex flex-col items-end gap-1">
          <span className={cn("text-white font-black text-5xl tracking-[-0.04em]", bodoniModa.className)}>
            <span className="text-red-500">2</span>+
          </span>
          <span className={cn("text-white/30 text-[10px] tracking-[0.32em] uppercase", inter.className)}>
            Years buil<span className="text-red-500/60">d</span>ing AI
          </span>
        </motion.div>

        {/* Projects stat */}
        <motion.div variants={fadeUp} className="flex flex-col items-end gap-1">
          <span className={cn("text-white font-black text-5xl tracking-[-0.04em]", bodoniModa.className)}>
            2<span className="text-red-500">0</span>+
          </span>
          <span className={cn("text-white/30 text-[10px] tracking-[0.32em] uppercase", inter.className)}>
            AI mo<span className="text-red-500/60">d</span>els deployed
          </span>
        </motion.div>
      </motion.div>

      {/* ── MOBILE CONTENT ─────────────────────────────────────────────────── */}
      <motion.div
        className="absolute z-15 left-6 bottom-28 flex md:hidden flex-col gap-3"
        variants={stagger} initial="hidden" animate="visible"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2.5">
          <div className="h-px w-7 bg-white/20" />
          <span className={cn("text-white/35 text-[9px] tracking-[0.3em] uppercase", inter.className)}>
            AI Engineer
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className={cn("text-white font-black leading-[0.9] tracking-[-0.03em]", bodoniModa.className)}
          style={{ fontSize: "clamp(36px, 9vw, 58px)" }}
        >
          Buil<span className="text-red-500">d</span>ing
          <br />
          <span className="text-white/22">inte<span className="text-red-500/50">ll</span>igent</span>
          <br />
          sys<span className="text-red-500">t</span>ems
        </motion.h2>
      </motion.div>

      {/* ── BOTTOM META ────────────────────────────────────────────────────── */}
      <motion.footer
        className="absolute bottom-6 md:bottom-9 inset-x-8 md:inset-x-14 z-20 flex items-end justify-between"
        variants={stagger} initial="hidden" animate="visible"
      >
    

        {/* Social icons — visible on all screen sizes */}
        <motion.div
          variants={fadeUp}
          className="flex absolute left-1/2 -translate-x-1/2 bottom-0 items-center gap-3"
        >
          {socials.map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 bg-white/3 backdrop-blur-sm text-white/40"
              whileHover={{ scale: 1.15, borderColor: "rgba(255,255,255,0.32)", color: "rgba(255,255,255,0.85)", backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={fadeUp} className="hidden md:flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-10 origin-top"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className={cn("text-white/20 text-[9px] tracking-[0.35em] uppercase [writing-mode:vertical-lr]", inter.className)}>
            Scroll
          </span>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Hero;

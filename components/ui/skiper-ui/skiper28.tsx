"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { Skiper62 } from "./skiper62";
import { bodoniModa } from "@/lib/fonts";

interface para{
  text?:string;
  arr?:string[]
}

const p = " Jatt seeweyan cho langheya chudail takkri jaani badi sohni bhoot female takkri .. kehndi jatta .. oye jatta.... kehndi jatta .. darke ho ja katha .. nai tan aah kar du ... nai tan waah kardu... tenu ethe khade khade nu swah kardu ... jatt kehnda hor menu kichahida ... jatt kehnda hor menu ki chahida .. avein gallan-baatan vich bohta sama na gva aaja chimbad ja ... mein keha chimbad ja .. . aaja chimbad ja ... mein keha chimbad ja .. ."

const Skiper28 = ({text,arr}:para) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const transform = useMotionTemplate`translateY(${yMotionValue}px)`;

  return (
      <div
        ref={targetRef}
        className="relative z-0 h-[300vh] w-screen bg-black text-white overflow-hidden"
      >
        {/* <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div> */}
        <div className=" grid grid-cols-2 absolute w-full top-82  items-center">
          <div className=" flex justify-end " >
           <Skiper62 arr={arr} /> 
          </div>
          
          <h1  className={`text-[140px]  px-7 ${bodoniModa.className} `} >PRINCE</h1>
        </div>
        
        <div
          className="sticky top-0 h-screen w-full mx-auto flex items-center justify-center bg-transparent py-0"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            style={{
              transform,
              opacity: opacityValue,
            }}
            className="font-geist w-full max-w-2xl px-6 text-center text-lg md:text-2xl font-normal leading-relaxed tracking-normal text-white/90"
          >
            {/* Jatt seeweyan cho langheya chudail takkri jaani badi sohni bhoot
            female takkri .. kehndi jatta .. oye jatta.... kehndi jatta .. metho
            darke ho ja katha .. nai tan aah kar du ... nai tan waah kardu...
            tenu ethe khade khade nu swah kardu ... jatt kehnda hor menu ki
            chahida ... jatt kehnda hor menu ki chahida .. avein gallan-baatan
            vich bohta sama na gva aaja chimbad ja ... mein keha chimbad ja .. .
            aaja chimbad ja ... mein keha chimbad ja .. . */}
            {text}
            <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-linear-to-b from-transparent to-black" />
          </motion.div>
        </div>
      </div>
  );
};

export { Skiper28 };

/**
 * Skiper 28 PerspectiveTextScroll — React + framer motion + lenis
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

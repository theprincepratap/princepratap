"use client";

import { Skiper28 } from '@/components/ui/skiper-ui/skiper28';
import React from 'react'

const AboutMe = () => {
  const aboutText = `A passionate full-stack developer with expertise in modern web technologies. I create elegant solutions for complex problems, combining design thinking with clean code. My journey in tech is driven by curiosity and the desire to build products that make a difference. Always learning, always growing.`;
  
  const techStack = [
    "/mac/vsCode.png",
    "/mac/Github.png",
    "/mac/figma.png",
    "/mac/Framer.png"
  ];

  return (
    <section className="w-full">
      <Skiper28 text={aboutText} arr={techStack} />
    </section>
  )
}

export default AboutMe

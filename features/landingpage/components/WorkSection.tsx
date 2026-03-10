"use client";

import { StickyCard002 } from '@/components/ui/skiper-ui/skiper17';
import ReactLenis from 'lenis/react';
import React from 'react'

const WorkSection = () => {
  const workCards = [
    {
      id: 1,
      image: "https://i.ibb.co/nqM9s8rw/img.jpg",
      alt: "Project 1"
    },
    {
      id: 2,
      image: "https://i.ibb.co/MDqx45Gk/dsc-017.jpg",
      alt: "Project 2"
    },
    {
      id: 3,
      image: "https://i.ibb.co/xqmdBD2y/img5.jpg",
      alt: "Project 3"
    },
    {
      id: 4,
      image: "https://i.ibb.co/pvX8S80B/img1.jpg",
      alt: "Project 4"
    },
    {
      id: 5,
      image: "https://i.ibb.co/C556xQpf/img2.jpg",
      alt: "Project 5"
    },
  ];

  return (
    <ReactLenis root>
      <section className="w-full">
        <StickyCard002 cards={workCards} />
      </section>
    </ReactLenis>
  )
}

export default WorkSection

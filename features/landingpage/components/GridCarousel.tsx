import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
  "https://i.ibb.co/nqM9s8rw/img.jpg",
  "https://i.ibb.co/N2sRGwmv/img4.jpg",
  "https://i.ibb.co/xqmdBD2y/img5.jpg",
  "https://i.ibb.co/pvX8S80B/img1.jpg",
  "https://i.ibb.co/C556xQpf/img2.jpg",
  "https://i.ibb.co/BHBMmwmr/ph3.png",
  "https://i.ibb.co/nq188vbC/hero-portrait-jpg.jpg",
  "https://i.ibb.co/mFgCSx6t/IMG-6831.png",
  "https://i.ibb.co/nqM9s8rw/img.jpg",
  "https://i.ibb.co/N2sRGwmv/img4.jpg",
  "https://i.ibb.co/xqmdBD2y/img5.jpg",
  "https://i.ibb.co/pvX8S80B/img1.jpg",
];
  return (
    <div>
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel

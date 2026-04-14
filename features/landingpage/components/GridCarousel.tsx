import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
  "https://i.ibb.co/6czGrjLr/IMG-7679.jpg",
  "https://i.ibb.co/MDqx45Gk/dsc-017.jpg",
  "https://i.ibb.co/xqmdBD2y/img5.jpg",
  "https://i.ibb.co/mFFZRsQy/IMG-7676.jpg",
  "https://i.ibb.co/C556xQpf/img2.jpg",
  "https://i.ibb.co/BHBMmwmr/ph3.png",
  "https://i.ibb.co/BVD0jLXK/IMG-6921.jpg",
  "https://i.ibb.co/ZphTXdsC/BEF8-C176-174-F-4-E52-A8-D4-10519-E4-E29-D5.png",
 "https://i.ibb.co/N2sRGwmv/img4.jpg",
  "https://i.ibb.co/pvX8S80B/img1.jpg",
  "https://i.ibb.co/xqmdBD2y/img5.jpg",
    "https://i.ibb.co/MDqx45Gk/dsc-017.jpg",
];
  return (
    <div>
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel

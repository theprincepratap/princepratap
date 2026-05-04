import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
  "https://i.ibb.co/9m4zQXsv/stage.jpg",
  "https://i.ibb.co/MDqx45Gk/dsc-017.jpg",
  "https://i.ibb.co/xqmdBD2y/img5.jpg",
  "https://i.ibb.co/mFFZRsQy/IMG-7676.jpg",
  "https://i.ibb.co/C556xQpf/img2.jpg",
  "https://i.ibb.co/BHBMmwmr/ph3.png",
  "https://i.ibb.co/BVD0jLXK/IMG-6921.jpg",
  "https://i.ibb.co/nM13FWY3/hackthon.png",
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

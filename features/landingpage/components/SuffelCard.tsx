"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Carousel_002 } from '@/components/ui/skiper-ui/skiper48';
import React, { useState } from 'react'


const SuffelCard = () => {
  const [cIn, setcIn] = useState(0);
     const images = [
         {
      src: "https://i.pinimg.com/1200x/b0/c2/be/b0c2be636f602b8b21a421d6c4619b4b.jpg",
      alt: "FAV Teacher",
    },
    {
      src: "https://i.pinimg.com/736x/b1/fc/73/b1fc734e8ff725e3ad8f16db7c432222.jpg",
      alt: "FAV DOST",
    },
    {
      src: "https://i.pinimg.com/736x/13/8d/5f/138d5f4490e0f1857ead96d053645efb.jpg",
      alt: "FAV QUOTE",
    },
 
    {
      src: "https://i.pinimg.com/736x/08/f0/a1/08f0a1410579c711e89a2382b85e5eb7.jpg",
      alt: "FAV HOBBY",
    }, {
      src: "https://i.pinimg.com/736x/ff/07/b8/ff07b8a21e6fa9e19a9d515c8de5d403.jpg",
      alt: "MY BEHAVIOUR",
    },
  
    // ... more images 	
  ];
  return (
    <div
      style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    }}
    className=' w-full flex  pt-10  ' >
      <div className='w-full grid grid-cols-1 md:grid-cols-3' >
 <ShimmerText className='hidden md:flex md:items-center md:justify-center text-7xl' text={images[cIn].alt.split(" ")[0]} />
       <Carousel_002
       className=' '
       cIndex={(i)=>{setcIn(i)}}
      images={images}
      showPagination={true}
      showNavigation={true}
      loop={true}
      //autoplay={true}
      spaceBetween={40}
    />
   
    <ShimmerText className='hidden md:flex md:items-center md:justify-center text-amber-300 text-7xl' text={images[cIn].alt.split(" ")[1]} />
      </div>
   
      
    </div>
  )
}

export default SuffelCard

import ShimmerText from '@/components/kokonutui/shimmer-text';
import { Carousel_003 } from '@/components/ui/skiper-ui/skiper49';
import React from 'react'

const FavSongs = () => {
     const images = [
    {
      src: "https://i.ibb.co/mVHFsHkH/8005d10f-8aa7-43b4-846a-7f4d7eae4e99.jpg",
      alt: "Description 1",
    },
    {
      src: "https://i.ibb.co/gZcPcpPz/e9ce20d6-15e2-4342-ab99-62cd7a25024c.jpg",
      alt: "Description 2",
    },
    {
      src: "https://i.ibb.co/SwdNJd7g/169bf9aa-6cfc-499c-a49b-dbf656fc2911.jpg",
      alt: "Description 3",
    }, {
      src: "https://i.ibb.co/4nyZCm30/00b8cdf4-6478-4ee7-b8a6-fb20c3b13142.jpg",
      alt: "Description 4",
    }, {
      src: "https://i.ibb.co/Jw1NJNB2/948ebf83-7ee3-468f-85fb-b4ebd940edeb.jpg",
      alt: "Description 5",
    }, {
      src: "https://i.ibb.co/xtPdRpHm/937f3489-41ec-42c5-8013-11eb9357ca8c.jpg",
      alt: "Description 6",
    }, {
      src: "https://i.ibb.co/d0JSXDyr/26e475a6-6f26-473b-bcae-5764855c32b2.jpg",
      alt: "Description 7",
    }, {
      src: "https://i.ibb.co/LXCnC4P7/94c64efb-dc1a-4efd-84c4-6515391719fa.jpg",
      alt: "Description 8",
    },
    // ... more images
  ];
  return (
    <div
     style={{
            background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
          }}
    className='   flex justify-center flex-col pt-10  bg-transparent w-full'>
      <ShimmerText className=' p-3 text-4xl md:text-6xl' text={'Current Playlist'}/>
         <Carousel_003
      images={images}
      showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={0}
    />
      
    </div>
  )
}

export default FavSongs

import React from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { Skiper52 } from '@/components/ui/skiper-ui/skiper52'

const MyDetails = () => {
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}
      className='pb-4 pt-10'
    >
      <div className="flex justify-center flex-col mt-10 mb-8 md:mt-30 md:mb-15">
        <ShimmerText className='text-4xl md:text-6xl' text={"WORK"} />
      </div>
      <div className='flex justify-center px-4'>
        <Skiper52 />
      </div>
    </div>
  )
}

export default MyDetails

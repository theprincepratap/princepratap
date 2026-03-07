"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import ContributionGraph, { ContributionData } from '@/components/smoothui/contribution-graph'
import React, { useEffect, useState } from 'react'

const Contributions = () => {
  const year = new Date().getFullYear();
  const [data, setData] = useState<ContributionData[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/theprincepratap?y=${year}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.contributions ?? []);
        setTotal(json.total?.[year] ?? 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [year]);

  return (
     <div 
      style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}
     className="space-y-6 px-4 md:px-8 flex flex-col justify-center items-center ">
          <div className=" flex justify-center flex-col mt-10 mb-8 md:mt-30 md:mb-11 ">
                    <ShimmerText className='  text-4xl md:text-6xl' text={"MY CONTRIBUTIONS"} />
                    <ShimmerText className=' text-3xl md:text-5xl' text={"THIS YEAR"} />
                </div>
      {/* Contribution Graph */}
      <div className=" w-full mx-0 md:mx-10 rounded-lg border text-white p-2">
        <div className="flex items-center gap-4 mb-2">
          <h1 className='text-2xl text-[#39D353]'>{year}</h1>
          {!loading && (
            <span className="text-white/40 text-sm">{total} contributions</span>
          )}
        </div>
        {loading ? (
          <div className="w-full h-32 flex items-center justify-center text-white/30 text-sm tracking-widest">
            Loading...
          </div>
        ) : (
          <ContributionGraph
            className="w-full"
            data={data}
            showLegend={true}
            showTooltips={true}
            year={year}
          />
        )}
      </div>
    </div>
  )
}

export default Contributions


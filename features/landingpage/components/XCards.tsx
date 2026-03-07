"use client";
import ShimmerText from "@/components/kokonutui/shimmer-text";
import SocialButton from "@/components/kokonutui/social-button";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type VideoData = {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
};

function YouTubeCard({ video }: { video: VideoData }) {
  const date = new Date(video.publishedAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-white/3 backdrop-blur-sm hover:border-red-500/40 transition-colors duration-300"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="#FF0000" className="w-4 h-4 shrink-0">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">{video.channelTitle}</span>
        </div>
        <p className="text-white/80 text-sm leading-snug line-clamp-2">{video.title}</p>
        <span className="text-white/25 text-[11px]">{date}</span>
      </div>
    </a>
  );
}

const XCards = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    fetch("/api/latest-video")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setVideos(d.slice(0, 3)); })
      .catch(() => {});
  }, []);

  return (
    <div 
         style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
    className=" flex flex-col ">
        <div className="flex justify-center mt-16 md:mt-30 gap-6 flex-wrap">
            <ShimmerText className=' text-4xl md:text-6xl' text={"LATEST"} />
            <ShimmerText className=' text-4xl md:text-6xl bg-linear-to-r from-red-950 via-red-400 to-red-950 dark:from-red-500 dark:via-red-300 dark:to-red-500' text={"YOUTUBE"} />
        </div>
      <div className="items-center w-full flex flex-col md:flex-row justify-evenly gap-6 py-6">
        {videos.map((video) => (
          <YouTubeCard key={video.videoId} video={video} />
        ))}
      </div>
      <div className=" p-10 flex justify-center ">
        <SocialButton />
      </div>
    </div>
  );
};

export default XCards;

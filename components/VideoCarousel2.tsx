"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const videos = [1, 2, 3].map((i) => `/videos/video_${i}.mp4`)

const clampIndex = (i: number) => {
  const len = videos.length
  return (i + len) % len
}

const VideoCarousel2 = () => {
  const [centerIndex, setCenterIndex] = useState(0)

  const leftIndex = clampIndex(centerIndex - 1)
  const rightIndex = clampIndex(centerIndex + 1)

  const slideTo = (index: number) => {
    setCenterIndex(clampIndex(index))
  }

  const VideoBox = ({
    src,
    isCenter = false,
    onClick,
  }: {
    src: string
    isCenter?: boolean
    onClick?: () => void
  }) => (
    <motion.div
      onClick={onClick}
      whileHover={!isCenter ? { scale: 1.05 } : undefined}
      className={`relative overflow-hidden shadow-2xl rounded-xl transition duration-300 ${
        isCenter ? "w-80 h-140" : "w-40 h-72 cursor-pointer group"
      }`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {!isCenter && (
        <div className="absolute inset-0 bg-white/50 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
      )}
    </motion.div>
  )

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex justify-center items-center py-20">
        <div className="relative flex items-center gap-6">
          <VideoBox
            src={videos[leftIndex]}
            onClick={() => slideTo(centerIndex - 1)}
          />
          <VideoBox src={videos[centerIndex]} isCenter />
          <VideoBox
            src={videos[rightIndex]}
            onClick={() => slideTo(centerIndex + 1)}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoCarousel2

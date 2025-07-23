"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [3, 1, 2].map((i) => `/videos/video_${i}.mp4`)

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
      className={`relative overflow-hidden rounded-xl transition duration-300 ${
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
    <section className="bg-white min-h-[15vh] flex flex-col justify-center py-5 overflow-hidden relative">
      <div className="w-full flex justify-center items-center py-5">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) {
              slideTo(centerIndex + 1)
            } else if (info.offset.x > 50) {
              slideTo(centerIndex - 1)
            }
          }}
          className="relative flex items-center gap-2"
        >
          <VideoBox
            src={videos[leftIndex]}
            onClick={() => slideTo(centerIndex - 1)}
          />
          <VideoBox src={videos[centerIndex]} isCenter />
          <VideoBox
            src={videos[rightIndex]}
            onClick={() => slideTo(centerIndex + 1)}
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 text-sm">
        <ChevronLeft className="w-4 h-4" />
        Swipe to explore
        <ChevronRight className="w-4 h-4" />
      </div>
    </section>
  )
}

export default VideoCarousel2

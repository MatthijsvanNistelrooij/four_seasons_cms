"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Video from "next-video"

import video4 from "../../videos/video_4.MOV.json"
import video5 from "../../videos/video_5.MOV.json"
import video6 from "../../videos/video_6.MOV.json"
import video7 from "../../videos/video_7.MOV.json"
import video8 from "../../videos/video_8.MOV.json"
import video9 from "../../videos/video_9.MOV.json"
import video10 from "../../videos/video_10.MOV.json"
import video11 from "../../videos/video_11.MOV.json"
import video13 from "../../videos/video_13.MOV.json"
import video14 from "../../videos/video_14.MOV.json"
import video15 from "../../videos/video_15.MOV.json"
import video16 from "../../videos/video_16.MOV.json"
import video17 from "../../videos/video_17.MOV.json"
import video18 from "../../videos/video_18.MOV.json"

const videos = [
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video13,
  video14,
  video15,
  video16,
  video17,
  video18,
]

const clampIndex = (i: number) => {
  const len = videos.length
  return (i + len) % len
}

const VideoCarousel = () => {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    src: any
    isCenter?: boolean
    onClick?: () => void
  }) => (
    <motion.div
      onClick={onClick}
      whileHover={!isCenter ? { scale: 1.05 } : undefined}
      className={`relative rounded-2xl overflow-hidden transition duration-300 ${
        isCenter ? "w-80 h-[38rem]" : "w-40 h-72 cursor-pointer group"
      }`}
    >
      <Video
        muted
        autoPlay
        loop
        preload="auto"
        playsInline
        src={src}
        className="w-full h-full object-cover shadow-xl rounded-2xl"
      />
      {!isCenter && (
        <div className="absolute rounded-2xl inset-0 bg-white/50 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
      )}
    </motion.div>
  )

  return (
    <section className="bg-white min-h-[15vh] flex flex-col justify-center py-5 overflow-hidden">
      <div className="w-full flex justify-center items-center pb-5">
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
    </section>
  )
}

export default VideoCarousel

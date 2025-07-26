"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Loading from "../shared/Loading"
import Swipe from "../shared/Swipe"

const videos = [4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18].map(
  (i) => `/videos/video_${i}.mp4`
)

const clampIndex = (i: number) => (i + videos.length) % videos.length

const preloadVideos = (urls: string[]) => {
  urls.forEach((url) => {
    const vid = document.createElement("video")
    vid.src = url
    vid.preload = "auto"
    vid.muted = true
    vid.playsInline = true
    vid.load()
  })
}

const VideoCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    preloadVideos(videos)
  }, [])

  const slideTo = (index: number) => {
    setVideoReady(false)
    setCenterIndex(clampIndex(index))
  }

  const centerVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = centerVideoRef.current
    if (!video) return

    const checkReady = () => {
      if (video.readyState >= 3) {
        setVideoReady(true)
      } else {
        setTimeout(checkReady, 100)
      }
    }

    checkReady()
  }, [centerIndex])

  const VideoBox = ({
    src,
    isCenter = false,
    onClick,
  }: {
    src: string
    isCenter?: boolean
    onClick?: () => void
  }) => (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
        isCenter ? "w-80 h-140" : "w-40 h-72 cursor-pointer group"
      }`}
    >
      <video
        ref={isCenter ? centerVideoRef : undefined}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-cover ${
          !videoReady ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />
      {!isCenter && (
        <div className="absolute inset-0 bg-white/70 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
      )}
      {!videoReady && isCenter && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 text-sm text-gray-600">
          <Loading />
        </div>
      )}
    </div>
  )

  const leftIndex = clampIndex(centerIndex - 1)
  const rightIndex = clampIndex(centerIndex + 1)

  return (
    <section className="bg-white min-h-[15vh] flex flex-col justify-center items-center py-5 overflow-hidden relative">
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
      <Swipe
        slideLeft={() => slideTo(centerIndex - 1)}
        slideRight={() => slideTo(centerIndex + 1)}
      />
    </section>
  )
}

export default VideoCarousel

"use client"

import React from "react"
import { motion } from "framer-motion"

type VideoBoxProps = {
  src: string
  className?: string
}

const VideoBox: React.FC<VideoBoxProps> = ({ src, className = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden shadow-2xl rounded-xl w-100 h-190 ${className}`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

export default VideoBox

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [1, 2, 3, 4, 5, 6].map((i) => `/images/photo_${i}.jpg`)

const clampIndex = (i: number) => {
  const len = images.length
  return (i + len) % len
}

const PhotoCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0)

  const leftIndex = clampIndex(centerIndex - 1)
  const rightIndex = clampIndex(centerIndex + 1)

  const slideTo = (index: number) => {
    setCenterIndex(clampIndex(index))
  }

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="relative flex items-center gap-6">
        {/* Left Image */}
        <motion.div
          onClick={() => slideTo(centerIndex - 1)}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer w-40 h-72 relative shadow-2xl rounded-xl overflow-hidden transition duration-300 group"
        >
          <Image
            src={images[leftIndex]}
            alt="left"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
        </motion.div>

        <motion.div
          key={centerIndex}
          layout
          className="w-80 h-140 relative shadow-2xl shadow-white rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[centerIndex]}
            alt="center"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          onClick={() => slideTo(centerIndex + 1)}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer w-40 h-72 relative shadow-2xl rounded-xl overflow-hidden transition duration-300 group"
        >
          <Image
            src={images[rightIndex]}
            alt="right"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  )
}

export default PhotoCarousel

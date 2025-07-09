"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [1, 2, 3, 4, 5, 6].map((i) => `/images/nails_${i}.jpeg`)

const clampIndex = (i: number) => {
  const len = images.length
  return (i + len) % len
}

const CenteredImageCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0)

  const leftIndex = clampIndex(centerIndex - 1)
  const rightIndex = clampIndex(centerIndex + 1)

  const slideTo = (index: number) => {
    setCenterIndex(clampIndex(index))
  }

  return (
    <section className="bg-white min-h-[15vh] flex flex-col justify-center py-10 lg:py-20 overflow-hidden w-full">
      <div className="w-full flex justify-center items-center py-10">
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
          className="relative flex items-center gap-6"
        >
          <motion.div
            onClick={() => slideTo(centerIndex - 1)}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer w-40 h-72 relative shadow-2xl shadow-white rounded-xl overflow-hidden transition duration-300 group"
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
            className="cursor-pointer w-40 h-72 relative shadow-2xl shadow-white rounded-xl overflow-hidden transition duration-300 group"
          >
            <Image
              src={images[rightIndex]}
              alt="right"
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/50 group-hover:bg-white/0 transition duration-300 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CenteredImageCarousel

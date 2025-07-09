// components/PageSection.tsx
"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import React from "react"

type PageSectionProps = {
  heading: string
  description: string
  image: StaticImageData | string
  bgColor?: string
  imageLeft?: boolean
}

const PageSection = ({
  heading,
  description,
  image,
  bgColor = "white",
  imageLeft = false,
}: PageSectionProps) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="min-h-[20vh] flex flex-col justify-center py-10 lg:py-20"
    >
      <div
        className={`flex flex-col lg:flex-row ${
          imageLeft ? "lg:flex-row-reverse" : ""
        } container mx-auto items-stretch px-8 md:px-20 gap-5 lg:gap-12`}
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full p-5 rounded-md shadow-xl flex flex-col justify-center text-center"
          >
            <Image
              src={image}
              alt="section image"
              width={1400}
              height={1400}
              className="object-cover h-[250px] lg:h-[350px]"
            />
          </motion.div>
        </div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-xl md:mb-40"
          >
            <h2
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              {heading}
            </h2>
            <p className="text-gray-800 leading-7">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PageSection

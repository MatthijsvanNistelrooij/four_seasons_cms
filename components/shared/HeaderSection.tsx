"use client"
import React from "react"
import { motion } from "framer-motion"
import { StaticImageData } from "next/image"

type HeaderSectionProps = {
  hero_image: StaticImageData
  title: string
  subtitle: string
}

const HeaderSection = ({ hero_image, title, subtitle }: HeaderSectionProps) => {
  return (
    <section
      className="relative w-full min-h-[40vh] md:h-[50vh] bg-center bg-cover"
      style={{ backgroundImage: `url(${hero_image.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-8 md:px-20 flex flex-col text-white py-20 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="md:text-md leading-relaxed">{subtitle}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection

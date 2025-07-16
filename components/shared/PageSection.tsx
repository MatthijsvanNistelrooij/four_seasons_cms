// components/PageSection.tsx
"use client"

import { motion } from "framer-motion"
import React from "react"

type PageSectionProps = {
  heading: string
  description: string
  Carousel?: React.ReactNode
  bgColor?: string
  imageLeft?: boolean
  CTA?: React.ReactNode
}

const PageSection = ({
  heading,
  description,
  Carousel,
  bgColor = "bg-white",
  imageLeft = false,
  CTA,
}: PageSectionProps) => {
  return (
    <>
      <section
        className={`${bgColor} min-h-[15vh] flex flex-col justify-center`}
      >
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch py-12 md:py-16 lg:py-20 gap-12 lg:gap-12">
          <div
            className={`flex flex-col lg:flex-row ${
              imageLeft ? "lg:flex-row-reverse" : ""
            } container mx-auto items-stretch px-8 md:px-20 gap-5 lg:gap-12`}
          >
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex flex-col justify-start"
            >
              <div className="space-y-6 w-full max-w-xl mr-22">
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  {heading}
                </h2>
                <p className="text-base text-gray-800 leading-7 mb-15">
                  {description}
                </p>
                <p>{CTA}</p>
              </div>
            </motion.div>
            {Carousel}
          </div>
        </div>
      </section>
    </>
  )
}

export default PageSection

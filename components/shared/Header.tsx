import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

type HeaderProps = {
  image: StaticImageData
  headerText: string | ReactNode
  subText?: string | ReactNode
  opacity?: string
  textCenter: boolean
  bold: boolean
}

const Header = ({
  image,
  headerText,
  subText,
  opacity,
  bold,
  textCenter,
}: HeaderProps) => {
  return (
    <>
      <section className="relative bg-black overflow-hidden w-full flex flex-col justify-center min-h-[80vh] xl:h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-black"
        >
          <Image
            src={image}
            alt="Slide"
            fill
            className={`object-cover ${opacity}`}
            priority
          />
        </motion.div>

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col py-20 text-white gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full h-full space-y-5"
            >
              <h2
                className={`text-xl md:text-2xl lg:md:text-3xl  font-bold mb-4 ${
                  textCenter ? "text-center" : ""
                }`}
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                {headerText}
              </h2>

              <p
                className={`md:text-md leading-relaxed ${
                  bold ? "font-bold tracking-wide" : ""
                }`}
              >
                {subText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header

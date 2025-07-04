"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarRange, ChevronLeft, ChevronRight, Mail } from "lucide-react"

import Link from "next/link"
import { slides } from "@/constants"

type HeroProps = {
  onOpenDialog: () => void
}

const Hero = ({ onOpenDialog }: HeroProps) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 16000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoSlide()
  }

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
    startAutoSlide()
  }

  const appointmentText = "MAAK EEN AFSPRAAK"
  const contactText = "CONTACT"

  return (
    <section className="relative bg-black overflow-hidden w-full flex flex-col justify-center min-h-[70vh] xl:h-[80vh]">
      <motion.div
        key={`image-${index}`}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={slides[index].image}
          alt="Slide"
          fill
          className="object-cover opacity-50"
          priority
        />
      </motion.div>
      <div className="flex container w-full h-full mx-auto items-center py-4 px-8 md:px-20">
        <div className="w-full">
          <button
            aria-label="Previous slide"
            onClick={goToPrevious}
            className="hidden md:flex cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)] text-white p-2 py-4 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="hidden md:flex cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)] text-white p-2 py-4 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative z-10 flex flex-col items-start justify-center h-full text-white"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            <motion.h1
              key={`heading-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-4xl lg:text-6xl font-bold mb-2"
            >
              {slides[index].heading}
            </motion.h1>

            <motion.div
              key={`sub-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-left text-xl lg:text-2xl max-w-xl"
            >
              <h1 className="leading-[2.3rem] md:leading-[2.7rem] md:mt-4">
                <span className="bg-[rgba(0,0,0,0.5)] inline p-1">
                  {slides[index].subtext}
                </span>
              </h1>
            </motion.div>

            <div className="mt-6 md:mt-8">
              <motion.div
                key={`contact-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex flex-col md:flex-row gap-2">
                  <Button
                    style={{ fontFamily: "sans-serif" }}
                    onClick={onOpenDialog}
                    className="bg-[#e9207e] hover:bg-pink-600 w-full md:w-2/3 px-20 p-6 tracking-widest rounded-full text-white 
                    font-bold text-sm md:text-lg cursor-pointer transition transform hover:-translate-y-0.5 hover:shadow-pink-600 hover:shadow"
                  >
                    <CalendarRange className="w-4 h-4" /> {appointmentText}
                  </Button>
                  <Link href={"/contact"}>
                    <Button
                      style={{ fontFamily: "sans-serif" }}
                      className="bg-[#e9207e] hover:bg-pink-600 p-6 transition-transform w-48 md:w-64 font-bold duration-200 
                      rounded-full text-sm md:text-lg tracking-widest cursor-pointer hover:-translate-y-0.5 hover:shadow-pink-600 hover:shadow"
                    >
                      <Mail className="w-4 h-4" /> {contactText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex gap-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              startAutoSlide()
            }}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === i
                ? "border-2 border-white bg-transparent"
                : "bg-gray-800 border-2 border-transparent"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

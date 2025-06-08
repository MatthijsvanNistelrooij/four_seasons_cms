"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarRange, Phone, ChevronLeft, ChevronRight } from "lucide-react"

import hero from "../public/assets/hero.jpg"
import hero1 from "../public/assets/hero_1.jpg"
import hero2 from "../public/assets/hero_2.jpg"
import hero3 from "../public/assets/hero_3.jpg"
import hero4 from "../public/assets/hero_4.jpg"

const slides = [
  {
    image: hero1,
    heading: "Kapsalon Four Seasons",
    subtext:
      "Dames & herenkapper - Persoonlijke aandacht - 35+ jaar ervaring - Gespecialiseerd in opsteken, föhnen, stylen, verven, highlights en balayages",
  },
  {
    image: hero2,
    heading: "Gezichtsmassage",
    subtext:
      "Ontspan en geniet van een luxueuze gezichtsbehandeling in Groningen",
  },
  {
    image: hero3,
    heading: "Beauty behandelingen",
    subtext:
      "Ontspan en geniet van een luxueuze gezichtsbehandeling in Groningen",
  },
  {
    image: hero4,
    heading: "Manicure behandelingen",
    subtext:
      "Ontspan en geniet van een luxueuze manicure behandeling in Groningen",
  },
  {
    image: hero,
    heading: "Nagel ontwerpen",
    subtext: "Verwen jezelf met de mooiste nagel ontwerpen",
  },
]

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
    }, 7000)
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
    <section className="relative bg-black overflow-hidden w-full h-[80vh]">
      <motion.div
        key={`image-${index}`}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={slides[index].image}
          alt="Slide"
          fill
          className="object-cover opacity-70"
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

          <div className="relative z-10 flex flex-col items-start justify-center h-full text-white">
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-left text-xl lg:text-2xl max-w-xl"
            >
              <h1 className="leading-[1.8rem] md:leading-[2.6rem] md:mt-4">
                <span className="bg-[rgba(0,0,0,0.3)] inline p-1">
                  {slides[index].subtext}
                </span>
              </h1>
            </motion.div>

            <div className="mt-6 md:mt-12">
              <motion.div
                key={`contact-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="flex flex-col md:flex-row gap-2">
                  <Button
                    onClick={onOpenDialog}
                    className="bg-[#e9207e] hover:bg-[#e9207e] transition-transform duration-200 rounded-full lg:p-6 lg:text-lg tracking-widest cursor-pointer"
                  >
                    <CalendarRange className="w-4 h-4" /> {appointmentText}
                  </Button>
                  <Button className="bg-[#e9207e] hover:bg-[#e9207e] transition-transform duration-200 rounded-full lg:p-6 lg:text-lg tracking-widest cursor-pointer">
                    <Phone className="w-4 h-4" /> {contactText}
                  </Button>
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
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

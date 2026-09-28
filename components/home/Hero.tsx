"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSwipeable } from "react-swipeable"
import { Button } from "@/components/ui/button"
import { CalendarRange, ChevronLeft, ChevronRight, Mail } from "lucide-react"

import Link from "next/link"
import { slides } from "@/constants"
import { SHOW_ONLINE_APPOINTMENTS } from "@/constants/features"
import styles from "./Hero.module.css"

type HeroProps = {
  onOpenDialog: () => void
}

const Hero = ({ onOpenDialog }: HeroProps) => {
  const [index, setIndex] = useState(0)
  const [readyImage, setReadyImage] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 8500)
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    delta: 50,
  })

  const appointmentText = "MAAK EEN AFSPRAAK"
  const contactText = "CONTACT"

  return (
    <section className="relative bg-black overflow-hidden w-full flex flex-col justify-center min-h-[80vh] xl:h-[80vh]">
      <div
        key={`bg-${index}`}
        className={`absolute inset-0 z-0 ${styles.background} ${
          readyImage === slides[index].image.src ? styles.ready : ""
        }`}
        aria-hidden="true"
      >
        <Image
          src={slides[index].image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onLoad={() => setReadyImage(slides[index].image.src)}
        />
      </div>

      <div
        {...swipeHandlers}
        className="relative z-10 w-full h-full"
        style={{ touchAction: "pan-y" }}
      >
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
              <h1
                className="text-4xl lg:text-6xl font-bold mb-2"
              >
                {slides[index].heading}
              </h1>

              <div
                className="text-left text-xl lg:text-2xl max-w-xl"
              >
                <p className="leading-[2.3rem] md:leading-[2.7rem] mt-2">
                  <span className="bg-[rgba(0,0,0,0.5)] inline p-1">
                    {slides[index].subtext}
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-6">
                <div>
                  <div className="flex flex-col md:flex-row gap-2">
                    {SHOW_ONLINE_APPOINTMENTS && <Button
                      style={{ fontFamily: "sans-serif" }}
                      onClick={onOpenDialog}
                      className="bg-[#e9207e] hover:bg-pink-600 w-full md:w-2/3 px-20 p-6 tracking-widest rounded-full text-white 
                    font-bold text-sm md:text-lg cursor-pointer transition transform hover:-translate-y-0.5 hover:shadow-pink-600 hover:shadow"
                    >
                      <CalendarRange className="w-4 h-4" /> {appointmentText}
                    </Button>}
                    <Link href={"/contact"}>
                      <Button
                        style={{ fontFamily: "sans-serif" }}
                        className="bg-[#e9207e] hover:bg-pink-600 flex p-6 transition-transform w-40 md:w-56 font-bold duration-200 
                      rounded-full text-sm md:text-lg tracking-widest cursor-pointer hover:-translate-y-0.5 hover:shadow-pink-600 hover:shadow"
                      >
                        <Mail className="w-4 h-4" /> {contactText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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
            className={`w-3 h-3 mb-3 flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer ${
              index === i
                ? "border-2 border-white"
                : "border-2 border-transparent"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                index === i ? "bg-transparent" : "bg-[#94817c]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Hero

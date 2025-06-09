import Image from "next/image"
import React from "react"
import treatment_1 from "../public/assets/treatment_1.png"
import { Button } from "./ui/button"
import { ArrowRight, Minus } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const TreatmentSection = () => {
  return (
    <div>
      <section className="w-full bg-[#eaeaea]">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-24 gap-5 lg:gap-12">
          <div className="w-full h-[220px] mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
              className="w-full h-full"
            >
              <Image
                src={treatment_1}
                alt="logo"
                width={1400}
                height={1400}
                className="object-cover h-[250px] lg:h-[350px] rounded-xl shadow-2xl"
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ook voor beauty behandelingen
              </h2>
              <p
                className="lg:text-lg text-black leading-7"
                style={{ fontFamily: "sans-serif" }}
              >
                Je gezicht weer laten stralen? Wees klaar voor elke gelegenheid
                met onze beauty behandelingen. U bent bij ons aan het juiste
                adres voor harsen, wimpers kleuren, tijdelijke wimpers,
                lamineren van de wimpers en wenkbrauwen, make-up. liftende
                gezichtmassages, gezichtsverzorgingen en wenkbrauw ontwerpen.
              </p>

              <Link href={"/info"}>
                <Button
                  style={{ fontFamily: "sans-serif" }}
                  className="group cursor-pointer bg-black hover:bg-gray-900 text-white flex items-center gap-2 rounded-full mt-5 overflow-hidden relative px-4 py-2"
                >
                  <span className="relative h-5 w-5 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-6">
                      <Minus />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-6 transition-transform duration-300 group-hover:translate-y-0 delay-350">
                      <ArrowRight />
                    </span>
                  </span>
                  Meer Lezen
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TreatmentSection

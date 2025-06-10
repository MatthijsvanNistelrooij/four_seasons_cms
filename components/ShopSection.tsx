import Image from "next/image"
import React from "react"
import shop from "../public/assets/shop.png"
import { motion } from "framer-motion"

const ShopSection = () => {
  return (
    <div>
      <section className="bg-white min-h-[30vh] flex flex-col justify-center py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-12 lg:gap-12">
          <div className="w-full h-[220px] mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={shop}
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
              <h2
                className="text-2xl lg:text-3xl font-bold mb-4 "
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Verven, knippen, in model brengen en meer!
              </h2>
              <p className="text-gray-800 leading-7">
                Bij onze kapsalon in het hart van Groningen zijn wij specialist
                in verven, knippen, in model brengen en nog veel meer! Wij staan
                voor je klaar om aan jouw wensen te voldoen. We gebruiken alleen
                hoogwaardige producten en werken met de nieuwste technieken om
                ervoor te zorgen dat je tevreden bent met het resultaat. Maak
                een afspraak bij onze kapper in Groningen en we helpen je graag
                bij het bereiken van de perfecte look!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopSection

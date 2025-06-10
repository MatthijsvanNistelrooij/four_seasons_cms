import Image from "next/image"
import React from "react"
import logo_header from "../public/assets/logo_header.png"
import { motion } from "framer-motion"

const InfoSection = () => {
  return (
    <section className="bg-white min-h-[20vh] flex flex-col justify-center py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-5 lg:gap-12">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={logo_header}
              alt="logo"
              width={1400}
              height={1400}
              className="object-cover h-[250px] lg:h-[350px] rounded-md shadow-xl"
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
              Ervaren dames & herenkapper in Groningen
            </h2>
            <p className="text-gray-800 leading-7">
              Bij ons kun je terecht voor een professionele en betaalbare
              knipbeurt. Wil je een nieuwe look uitproberen? Wij staan voor je
              klaar met een passend advies. Ook als je jouw haar wil laten
              bijwerken of gewoon wilt ontspannen met een kappersbehandeling,
              helpen we je graag. Als vertrouwde kapper in Groningen, begrijpen
              we dat jouw tijd kostbaar is. De combinatie van ruim 35 jaar
              ervaring en persoonlijke aandacht, maken het mogelijk om snel en
              efficiënt te werken zonder afbreuk te doen aan de kwaliteit. Dat
              maakt onze kapsalon zo uniek én gezellig!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection

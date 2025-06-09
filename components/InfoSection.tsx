import Image from "next/image"
import React from "react"
import logo_header from "../public/assets/logo_header.png"
import { motion } from "framer-motion"

const InfoSection = () => {
  return (
    <div>
      <section className="bg-white text-white py-24">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            <div className="bg-transparent relative w-full h-64 lg:h-80 rounded-xl overflow-hidden ">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full h-full shadow-2xl rounded-lg"
              >
                <Image
                  src={logo_header}
                  alt="Team member 1"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex flex-col justify-start"
          >
            <h2 className="text-xl lg:text-3xl font-semibold text-black mb-4">
              Ervaren dames & herenkapper in Groningen
            </h2>
            <p
              className="text-black lg:text-lg leading-7"
              style={{ fontFamily: "sans-serif" }}
            >
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
      </section>
    </div>
  )
}

export default InfoSection

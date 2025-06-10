"use client"

import Image from "next/image"
import hero from "../public/assets/hero_1.jpg"
import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import petros from "../public/assets/petros.png"
import olga from "../public/assets/olga.png"
import { motion } from "framer-motion"

export default function AboutPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <main className="">
      <section
        className="relative w-full min-h-[40vh] md:h-[80vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col text-white py-20 gap-12">
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
                Welkom bij Four Seasons:
                <br />
                De kapper in Groningen die weet wat je nodig hebt!
              </h2>
              <p className="md:text-md leading-relaxed">
                Wij zitten al meer dan 35 jaar in het vak en hebben veel
                ervaring met het knippen, kleuren en stijlen van haar. Daarnaast
                bieden we ook tal van schoonheidsbehandelingen aan.
                <br />
                Wil jij helemaal herboren weer naar buiten lopen? Dan ben je bij
                ons aan het juiste adres! Kom je snel een keer langs?
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-[15vh] flex flex-col justify-center py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <h2
              className="text-xl lg:text-3xl font-semibold text-black mb-10"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Ons geheim? De perfecte combinatie van haar- en
              schoonheidsbehandelingen
            </h2>
            <p className="text-base text-gray-800 leading-8">
              Het geheim van Four Seasons in Groningen is onze perfecte
              combinatie van haar- en schoonheidsbehandelingen. Bij ons kun je
              niet alleen terecht voor professionele haar behandelingen, maar
              ook voor schoonheidsbehandelingen die gericht zijn op het
              verbeteren van je huid en het versterken van je natuurlijke
              schoonheid. Door deze combinatie van diensten bieden wij onze
              klanten een totaalpakket aan haar- en schoonheidsverzorging,
              waardoor je bij ons terecht kunt voor al je beauty wensen. Ons
              ervaren team van haarstylisten en schoonheidsspecialisten werkt
              nauw met elkaar samen om een unieke en persoonlijke service te
              bieden, die jouw natuurlijke schoonheid naar voren brengt. Bij
              Kapsalon Four Seasons streven we ernaar om jou te laten stralen
              van top tot teen. Daarom blijven we ons continu ontwikkelen om de
              beste diensten en behandelingen aan te bieden.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eaeaea] min-h-[15vh] flex flex-col justify-center py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-5 lg:gap-12">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
            >
              <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow">
                <Image
                  src={petros}
                  alt="Team member 1"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
            >
              <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow">
                <Image
                  src={olga}
                  alt="Team member 2"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex flex-col justify-start mb-20"
          >
            <div className="w-full flex flex-col justify-start">
              <h2
                className="text-xl lg:text-3xl font-semibold text-black mb-4"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Ons team
              </h2>
              <p className="text-base text-black leading-7">
                Maak kennis met ons team van kappers, schoonheidsspecialisten en
                visagisten die voor je klaar staan om je weer te laten stralen.
                Wij hebben allemaal passie voor het vak en behandelen elke klant
                als koning(in). Kom je gezellig langs?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white min-h-[25vh] flex flex-col justify-center py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex flex-col justify-start"
          >
            <div className="space-y-6 w-full max-w-xl mr-22">
              <h2
                className="text-xl lg:text-3xl font-semibold text-black"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Gebruik van kwaliteitsproducten voor gezond en glanzend haar
              </h2>
              <p className="text-base text-gray-800 leading-7">
                Het gebruik van goede haarproducten is essentieel voor gezond en
                glanzend haar. Daarom werken wij uitsluitend met hoogwaardige
                producten van gerenommeerde merken, die zorgvuldig zijn
                geselecteerd op basis van kwaliteit en effectiviteit. We zijn
                getraind om te werken met deze producten en kunnen je adviseren
                over welke producten het beste passen bij jouw haartype en
                behoeften. Door het gebruik van de juiste producten, kun je niet
                alleen de gezondheid en glans van je haar verbeteren, maar ook
                de levensduur van je kapsel verlengen. Bij Kapsalon Four Seasons
                geloven we dat investeren in goede haarproducten een investering
                is in de gezondheid en schoonheid van je haar. Wil je ook mooi
                glanzend haar hebben? Maak snel een afspraak hieronder.
              </p>
              <div className="my-10">
                <AppointmentDialog
                  title="Maak een afspraak"
                  open={openDialog}
                  onOpenChange={setOpenDialog}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <div className="bg-[#e9207e] text-white p-5 w-full mb-20 py-14 lg:py-24 rounded-xl flex flex-col text-center justify-center">
              <h3 className="font-semibold mb-6 text-white text-xl">
                Openingstijden & contact
              </h3>
              <OpeningHours text="white" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

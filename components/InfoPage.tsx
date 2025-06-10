"use client"

import hero from "../public/assets/hero_1.jpg"
import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import { motion } from "framer-motion"

export default function InfoPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <main className="">
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col text-white gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-full"
            >
              <h2
                className="text-xl lg:text-3xl md:text-3xl text-center font-bold mb-4"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Klaar om te stralen? Boek nu een afspraak bij onze kapsalon met
                <br />
                schoonheidsspecialiste in Groningen en ontdek onze exclusieve
                behandelingen
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-48 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <h2
              className="text-xl lg:text-3xl font-semibold text-black"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Ervaren kapper bij Reitemakersrijge Groningen
            </h2>
            <p className="text-base text-black leading-relaxed mt-5">
              Welkom bij Four Seasons in Groningen gelegen aan het
              Reitemakersrijge! Onze kapsalon biedt een breed scala aan
              haarbehandelingen voor zowel mannen als vrouwen. Of je nu op zoek
              bent naar een frisse knipbeurt, of een speciale kleurbehandeling,
              bij ons ben je aan het juiste adres. Ons ervaren team van
              haarstylisten staat klaar om je te adviseren en te helpen bij het
              kiezen van de perfecte behandeling die bij jouw wensen past. Naast
              de haarbehandelingen binnen onze kapsalon bieden we ook nog
              gezichtsbehandelingen, het plaatsen van wimperextensions,
              wenkbrauwbehandelingen en visagie aan. Ontdek hieronder onze
              behandelingen en maak vandaag nog een afspraak om te genieten van
              een professionele kapperservaring bij Four Seasons.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white text-white">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-48 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <div className="space-y-6 w-full max-w-xl mt-15">
              <h2
                className="text-xl lg:text-2xl font-semibold text-black"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Ervaren kapper bij Reitemakersrijge
              </h2>
              <div className="text-base flex flex-col text-black leading-7">
                <p>Dames kort haar knippen € 28,50</p>
                <p>Dames half-lang haar knippen € 32,50</p>
                <p>Dames lang haar knippen € 37,50</p>
                <p>Heren knippen € 28,50</p>
              </div>

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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <div className="bg-[#e9207e] text-white p-5 w-full py-24 rounded-xl flex flex-col text-center justify-center mb-20">
              <h3 className="font-semibold mb-6 text-white text-xl">
                Openingstijden & contact
              </h3>
              <OpeningHours text="white" />
            </div>
          </motion.div>{" "}
        </div>
      </section>

      <section className="bg-[#6d6d6a] text-white">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-48 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-full"
          >
            <div className="space-y-6 w-full flex justfy-center text-center flex-col py-18">
              <h2
                className="text-xl lg:text-4xl font-semibold text-white text-center text-shadow-lg"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                De ultieme beauty ervaring bij kapsalon Four Seasons
              </h2>
              <p
                className="text-base flex flex-col text-white leading-relaxed text-center text-shadow-lg"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
                }}
              >
                Bij Kapsalon Four Seasons in Groningen geloven we dat de
                perfecte beauty behandeling begint bij een gezonde basis. Daarom
                bieden we naast onze haarbehandelingen ook een scala aan
                schoonheidsbehandelingen aan. Of je nu op zoek bent naar een
                ontspannende gezichtsbehandeling, een verjongende
                huidbehandeling of een professionele make-up sessie, wij hebben
                alles in huis om jouw schoonheid naar een hoger niveau te
                tillen. Onze schoonheidsspecialiste is getraind in de nieuwste
                technieken en werkt uitsluitend met hoogwaardige producten. Bij
                Kapsalon Four Seasons kun je rekenen op een professionele en
                persoonlijke service, zodat jij je na elke behandeling stralend
                en vol zelfvertrouwen voelt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

"use client"

import hero from "../public/assets/hero_3.png"
import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import { motion } from "framer-motion"
import { treatmentSections } from "@/constants"
import Head from "next/head"

export default function InfoPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <Head>
        <title>Behandelingen | Kapsalon Four Seasons Groningen</title>
        <meta
          name="description"
          content="Leer ons team kennen en ontdek waarom Kapsalon Four Seasons in Groningen dé plek is voor haar- en schoonheidsbehandelingen."
        />
      </Head>
      <main className="">
        <section
          className="relative w-full min-h-[30vh] md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${hero.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-8 md:px-20 flex flex-col py-20 text-white gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                className="w-full h-full"
              >
                <h1
                  className="text-xl lg:text-3xl md:text-2xl text-center font-bold mb-4"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Klaar om te stralen? Boek nu een afspraak bij onze kapsalon
                  met
                  <br />
                  schoonheidsspecialiste in Groningen en ontdek onze exclusieve
                  behandelingen
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-8 md:px-20">
            <h1
              className="text-xl lg:text-3xl font-semibold text-black text-center mb-10"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Onze Behandelingen
            </h1>

            <div className="space-y-10">
              {treatmentSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-bold mb-2 text-[#e9207e]">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-center" />
        </section>

        <section className="bg-[#eaeaea] py-16 text-black">
          <div className="container mx-auto px-8 md:px-20">
            <h2
              className="text-xl lg:text-3xl font-semibold text-center mb-10"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Wat levert onze behandeling op?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 text-sm leading-relaxed">
              <article className="space-y-3">
                <h3 className="text-lg font-semibold">Laminatie van Wimpers</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Natuurlijke lift en krul van de wimpers</li>
                  <li>Visuele verlenging en toename van de dichtheid</li>
                  <li>Voeding en versterking dankzij keratine en vitaminen</li>
                  <li>Langdurig effect - tot 6-8 weken</li>
                  <li>Tijdbesparend - geen dagelijkse mascara nodig</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Voordelen van Wenkbrauwlaminering
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Zorgt voor perfecte vorm en fixatie van de haartjes</li>
                  <li>Verzorgde look zonder gel en wax</li>
                  <li>Versterkt en voedt de wenkbrauwen</li>
                  <li>Geen schade aan de haartjes</li>
                  <li>Langdurig effect - tot 6 weken</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-lg font-semibold">
                  HydraFacial Technologie
                </h3>
                <p>
                  Dit innovatieve huidverzorgingssysteem lost diverse problemen
                  op:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vertraagt veroudering</li>
                  <li>Vermindert fijne lijntjes</li>
                  <li>Vernauwt poriën</li>
                  <li>Verbetert huidtextuur en kleur</li>
                  <li>Lost hyperpigmentatieproblemen op</li>
                  <li>Helpt zonschade herstellen</li>
                  <li>Elimineert een vette, acnegevoelige huid</li>
                  <li>Elimineert rosacea</li>
                </ul>
                <p className="mt-2">
                  Snelle, effectieve en langdurige resultaten zijn direct na de
                  behandeling zichtbaar.
                </p>
              </article>

              <article className="space-y-3">
                <h3 className="text-lg font-semibold">Chemische Peelings</h3>
                <p>De peelingprocedure wordt uitgevoerd voor:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Behandeling van post-acne en littekens</li>
                  <li>Behandeling van acne (witte en zwarte comedonen)</li>
                  <li>Vergrote poriën</li>
                  <li>Verminderen of elimineren van fijne rimpeltjes</li>
                  <li>Behandeling van droge huidgedeelten</li>
                  <li>Behandeling bij pigmentatiestoornissen</li>
                  <li>Verbeteren van structuur en kleur van de huid</li>
                </ul>
              </article>
            </div>

            <div className="mt-12 flex justify-center" />
          </div>
        </section>

        <section className="bg-white min-h-[20vh] flex flex-col justify-center py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full h-full"
            >
              <div className="space-y-6 w-full max-w-xl mt-5">
                <div className="my-1">
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
              viewport={{ once: true, amount: 0.25 }}
              className="w-full h-full"
            >
              <div className="bg-[#e9207e] text-white p-5 w-full py-14 lg:py-24 rounded-xl flex flex-col text-center justify-center mb-20">
                <h3 className="font-semibold mb-6 text-white text-xl">
                  Openingstijden & contact
                </h3>
                <OpeningHours text="white" />
              </div>
            </motion.div>{" "}
          </div>
        </section>
      </main>
    </>
  )
}

"use client"

import skincare from "../public/images/skin_care_1.png"

import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import { motion } from "framer-motion"
import video_3 from "../videos/video_3.mp4"
import Video from "next-video"
import ImageCarousel from "./ImageCarousel"
// import ImageCarousel2 from "./ImageCarousel2"
// import ImageCarousel3 from "./ImageCarousel3"
import Header from "./Header"
import InstagramEmbed from "./InstagramEmbed"
import NextHeader from "./shared/NextHeader"

const BeautyPage = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <NextHeader />

      <main className="">
        <Header />

        <section className="bg-white min-h-[15vh] flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-20 gap-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex flex-col justify-start"
            >
              <div className="space-y-6 w-full max-w-xl mr-22">
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Perfect gevormde wenkbrauwen in Groningen: laat je natuurlijke
                  schoonheid naar voren brengen
                </h2>
                <p className="text-base text-gray-800 leading-7 mb-15">
                  Wij weten als geen ander dat perfect gevormde wenkbrauwen de
                  sleutel zijn tot een verzorgde uitstraling. Onze getrainde
                  schoonheidsspecialisten bieden een breed scala aan wenkbrauw
                  behandelingen aan, waaronder waxen, threading en verven. Wij
                  accentueren de natuurlijke vorm van jouw wenkbrauwen om jouw
                  gezicht perfect te complementeren en te laten stralen. Of je
                  nu op zoek bent naar een subtiele of dramatische verandering,
                  ons team staat klaar om jouw wenkbrauwen perfect te vormen.
                </p>
              </div>
            </motion.div>
            {/* <ImageCarousel3 /> */}
          </div>
        </section>

        <section className="bg-[#eaeaea] min-h-[15vh] flex flex-col justify-center mb-20">
          <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-20 gap-12 lg:gap-12">
            {/* <ImageCarousel2 /> */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex flex-col justify-start"
            >
              <div className="space-y-6 w-full max-w-xl mr-22">
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Perfect verzorgde nagels in Groningen: straal tot in de
                  vingertoppen
                </h2>
                <p className="md:text-md leading-relaxed max-w-6xl">
                  Bij Four Seasons ben je aan het juiste adres voor
                  professionele nagelverzorging en stijlvolle nagelstyling. Of
                  je nu kiest voor een klassieke manicure, een verzorgde French
                  manicure of een opvallend nagelontwerp, wij zorgen ervoor dat
                  jouw handen er altijd tiptop uitzien. Onze specialisten werken
                  met hoogwaardige producten en nemen de tijd voor een
                  nauwkeurige afwerking. Laat jezelf verwennen met een
                  spa-manicure of geef je nagels extra stevigheid met een
                  BIAB-coating. Kom langs en ervaar hoe mooie nagels bijdragen
                  aan jouw uitstraling!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <ImageCarousel />

        <section className="bg-[#eaeaea] min-h-[70vh] flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-20 gap-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex flex-col justify-start"
            >
              <div className="space-y-6 w-full max-w-xl mr-22">
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Ontspan en geniet van een luxueuze gezichtsbehandeling in
                  Groningen
                </h2>
                <p className="text-base text-gray-800 leading-7 mb-15">
                  Heb je een speciale gelegenheid waarvoor je er stralend wil
                  uitzien? Onze visagiste staat klaar om een prachtige make-up
                  look te maken die volledig is afgestemd op jouw wensen. Je kan
                  kiezen om langs te komen in onze zaak aan het Reitemakersrijge
                  of laat onze visagiste bij je thuis komen. Benieuwd wat we
                  voor jou kunnen betekenen? Neem vandaag nog contact met ons
                  op!
                </p>

                <div>
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
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0 }}
              className="w-full h-full"
            >
              <div className="bg-[#e9207e] text-white space-y-5 pb-20 w-full rounded-xl flex flex-col text-center justify-center gap-10">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Video
                      muted
                      autoPlay
                      loop
                      playsInline
                      src={video_3}
                      className="object-cover shadow-xl"
                    />
                  </div>
                </div>

                <h3
                  className="font-semibold text-xl md:text-2xl mb-5 text-white"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Openingstijden & contact
                </h3>
                <OpeningHours text="white" center={true} />
              </div>
            </motion.div>
          </div>
        </section>

        <InstagramEmbed />
        <section
          className="relative w-full min-h-[30vh] md:h-[100vh] flex justify-center bg-center bg-cover"
          style={{ backgroundImage: `url(${skincare.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-8 md:px-20 flex flex-col py-20 text-white gap-20">
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                className="w-full h-full space-y-5"
              >
                <h2
                  className="text-xl md:text-2xl font-bold text-center"
                  style={{ fontFamily: "var(--font-roboto-slab)" }}
                >
                  Stralend voor de dag met onze visagie service in Groningen:
                  Laat ons je beste features benadrukken
                </h2>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BeautyPage

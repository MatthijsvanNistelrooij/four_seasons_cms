"use client"

import hero from "../public/assets/hero_4.jpg"
import skincare from "../public/photos/skin_care_2.jpeg"

import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import { motion } from "framer-motion"
import video_3 from "../videos/video_3.mp4"
import Video from "next-video"

const BeautyPage = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <main className="">
      <section
        className="relative w-full min-h-[30vh] md:h-[60vh] flex justify-center bg-center bg-cover"
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
              className="w-full h-full space-y-5"
            >
              <h2
                className="text-xl md:text-2xl lg:md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                Je gezicht weer laten stralen met schoonheidsbehandelingen in
                Groningen
              </h2>
              <p className="md:text-md leading-relaxed max-w-6xl">
                Wij bieden onder andere professionele wimperextensions aan voor
                wie op zoek is naar vollere en langere wimpers. Onze getrainde
                wimperstylisten gebruiken alleen hoogwaardige materialen en
                technieken om ervoor te zorgen dat de extensions op de juiste
                manier worden geplaatst. Of je nu op zoek bent naar subtiele
                wimpers of volle wimpers, ons team staat klaar om jou te helpen.
                Kom langs bij Four Seasons in Groningen en ontdek hoe wij jouw
                wimpers kunnen laten stralen!
              </p>
              <p className="md:text-md leading-relaxed tracking-wide font-bold">
                Onze diensten: Huidverzorging, vacuüm gezichtsreiniging, SOS
                schoonheidsprocedures, darsonval, liftende gezichtsmassage,
                sculpturale gezichtsmassage, anti-aging gezichtsmassage, pellen,
                manicuristische diensten, correctie van nagelcoating,
                basismanicure, Franse manicure, spa manicure, lak en
                biab-coating, nagel ontwerp
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white min-h-[70vh] flex flex-col justify-center mb-20">
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
                gezicht perfect te complementeren en te laten stralen. Of je nu
                op zoek bent naar een subtiele of dramatische verandering, ons
                team staat klaar om jouw wenkbrauwen perfect te vormen.
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
              <OpeningHours text="white" />
            </div>
          </motion.div>
        </div>
      </section>
      <section
        className="relative w-full min-h-[30vh] md:h-[60vh] flex justify-center bg-center bg-cover"
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
                Stralend voor de dag met onze visagie service in Groningen: Laat
                ons je beste features benadrukken
              </h2>
              <p className="md:text-md leading-relaxed text-center">
                Heb je een speciale gelegenheid waarvoor je er stralend wil
                uitzien? Onze visagiste staat klaar om een prachtige make-up
                look te maken die volledig is afgestemd op jouw wensen. Je kan
                kiezen om langs te komen in onze zaak aan het Reitemakersrijge
                of laat onze visagiste bij je thuis komen. Benieuwd wat we voor
                jou kunnen betekenen? Neem vandaag nog contact met ons op!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BeautyPage

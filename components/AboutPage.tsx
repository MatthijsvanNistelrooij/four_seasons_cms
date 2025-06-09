"use client"

import Image from "next/image"
import hero from "../public/assets/hero_1.jpg"
import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"
import { CalendarRange } from "lucide-react"

export default function AboutPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <main className="">
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text container */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col text-white gap-12">
            {" "}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Welkom bij Four Seasons:
              <br />
              De kapper in Groningen die weet wat je nodig hebt!
            </h2>
            <p
              className="md:text-md leading-relaxed"
              style={{ fontFamily: "sans-serif" }}
            >
              Wij zitten al meer dan 35 jaar in het vak en hebben veel ervaring
              met het knippen, kleuren en stijlen van haar. Daarnaast bieden we
              ook tal van schoonheidsbehandelingen aan.
              <br />
              Wil jij helemaal herboren weer naar buiten lopen? Dan ben je bij
              ons aan het juiste adres! Kom je snel een keer langs?
            </p>
          </div>
        </div>
      </section>
      {/* Section 1: White background */}
      <section className="bg-white">
        <div className="container mx-auto px-8 md:px-20 flex flex-col gap-12 py-24">
          {" "}
          <h2 className="text-xl lg:text-3xl font-semibold text-black">
            Ons geheim? De perfecte combinatie van haar- en
            schoonheidsbehandelingen
          </h2>
          <p
            className="text-base text-black leading-8"
            style={{ fontFamily: "sans-serif" }}
          >
            Het geheim van Four Seasons in Groningen is onze perfecte combinatie
            van haar- en schoonheidsbehandelingen. Bij ons kun je niet alleen
            terecht voor professionele haar behandelingen, maar ook voor
            schoonheidsbehandelingen die gericht zijn op het verbeteren van je
            huid en het versterken van je natuurlijke schoonheid. Door deze
            combinatie van diensten bieden wij onze klanten een totaalpakket aan
            haar- en schoonheidsverzorging, waardoor je bij ons terecht kunt
            voor al je beauty wensen. Ons ervaren team van haarstylisten en
            schoonheidsspecialisten werkt nauw met elkaar samen om een unieke en
            persoonlijke service te bieden, die jouw natuurlijke schoonheid naar
            voren brengt. Bij Kapsalon Four Seasons streven we ernaar om jou te
            laten stralen van top tot teen. Daarom blijven we ons continu
            ontwikkelen om de beste diensten en behandelingen aan te bieden.
          </p>
        </div>
      </section>

      {/* Section 2: Gray background with images */}
      <section className="bg-[#eaeaea] text-white py-24">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            {/* Image 1 */}
            <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={hero}
                alt="Team member 1"
                fill
                className="object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={hero}
                alt="Team member 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right: Text */}
          <div className="w-full flex flex-col justify-start">
            <h2 className="text-xl lg:text-3xl font-semibold text-black mb-4">
              Ons team
            </h2>
            <p
              className="text-base text-black leading-7"
              style={{ fontFamily: "sans-serif" }}
            >
              Maak kennis met ons team van kappers, schoonheidsspecialisten en
              visagisten die voor je klaar staan om je weer te laten stralen.
              Wij hebben allemaal passie voor het vak en behandelen elke klant
              als koning(in). Kom je gezellig langs?
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: White background */}
      <section className="bg-white text-white py-24 mb-56">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          {" "}
          <div className="space-y-6 w-full max-w-xl mr-22">
            <h2 className="text-xl lg:text-3xl font-semibold text-black">
              Gebruik van kwaliteitsproducten voor gezond en glanzend haar
            </h2>
            <p
              className="text-base text-black leading-7"
              style={{ fontFamily: "sans-serif" }}
            >
              Het gebruik van goede haarproducten is essentieel voor gezond en
              glanzend haar. Daarom werken wij uitsluitend met hoogwaardige
              producten van gerenommeerde merken, die zorgvuldig zijn
              geselecteerd op basis van kwaliteit en effectiviteit. We zijn
              getraind om te werken met deze producten en kunnen je adviseren
              over welke producten het beste passen bij jouw haartype en
              behoeften. Door het gebruik van de juiste producten, kun je niet
              alleen de gezondheid en glans van je haar verbeteren, maar ook de
              levensduur van je kapsel verlengen. Bij Kapsalon Four Seasons
              geloven we dat investeren in goede haarproducten een investering
              is in de gezondheid en schoonheid van je haar. Wil je ook mooi
              glanzend haar hebben? Maak snel een afspraak hieronder.
            </p>
            <div>
              <AppointmentDialog
                title="Maak een afspraak"
                open={openDialog}
                onOpenChange={setOpenDialog}
              />
            </div>
          </div>
          <div className="bg-[#e9207e] text-white p-5 w-full py-24 rounded-xl flex flex-col text-center justify-center">
            <OpeningHours text="white" />
          </div>
        </div>
      </section>
    </main>
  )
}

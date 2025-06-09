"use client"

import hero from "../public/assets/hero_1.jpg"
import OpeningHours from "./OpeningHours"
import { AppointmentDialog } from "./AppointmentDialog"
import { useState } from "react"

export default function InfoPage() {
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
            <h2 className="text-2xl lg:text-3xl md:text-3xl text-center font-bold mb-4">
              Klaar om te stralen? Boek nu een afspraak bij onze kapsalon met
              <br />
              schoonheidsspecialiste in Groningen en ontdek onze exclusieve
              behandelingen
            </h2>
          </div>
        </div>
      </section>
      {/* Section 1: White background */}
      <section className="bg-white">
        <div className="container mx-auto px-8 md:px-20 flex flex-col gap-12 py-24">
          {" "}
          <h2 className="text-xl lg:text-3xl font-semibold text-black">
            Ervaren kapper bij Reitemakersrijge Groningen
          </h2>
          <p
            className="text-base text-black leading-relaxed"
            style={{ fontFamily: "sans-serif" }}
          >
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
        </div>
      </section>

      <section className="bg-white text-white py-24 mb-56">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          {" "}
          <div className="space-y-6 w-full max-w-xl mt-15">
            <h2 className="text-xl lg:text-2xl font-semibold text-black">
              Ervaren kapper bij Reitemakersrijge
            </h2>
            <p className="text-base flex flex-col text-black leading-7">
              <p>Dames kort haar knippen € 28,50</p>
              <p>Dames half-lang haar knippen € 32,50</p>
              <p>Dames lang haar knippen € 37,50</p>
              <p>Heren knippen € 28,50</p>
            </p>
            <div>
              <AppointmentDialog
                title="Maak een afspraak"
                open={openDialog}
                onOpenChange={setOpenDialog}
              />
            </div>
          </div>
          <div className="bg-[#e9207e] text-white p-5 w-full py-24 rounded-xl flex text-center justify-center">
            <OpeningHours text="white" />
          </div>
        </div>
      </section>

      <section className="bg-[#6d6d6a] text-white py-24">
        <div className="container mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12">
          <div className="space-y-6 w-full mt-15 flex justfy-center flex-col">
            <h2 className="text-xl lg:text-2xl font-semibold text-white text-center">
              De ultieme beauty ervaring bij kapsalon Four Seasons
            </h2>
            <p
              className="text-base flex flex-col text-white leading-relaxed text-center"
              style={{ fontFamily: "sans-serif" }}
            >
              Bij Kapsalon Four Seasons in Groningen geloven we dat de perfecte
              beauty behandeling begint bij een gezonde basis. Daarom bieden we
              naast onze haarbehandelingen ook een scala aan
              schoonheidsbehandelingen aan. Of je nu op zoek bent naar een
              ontspannende gezichtsbehandeling, een verjongende huidbehandeling
              of een professionele make-up sessie, wij hebben alles in huis om
              jouw schoonheid naar een hoger niveau te tillen. Onze
              schoonheidsspecialiste is getraind in de nieuwste technieken en
              werkt uitsluitend met hoogwaardige producten. Bij Kapsalon Four
              Seasons kun je rekenen op een professionele en persoonlijke
              service, zodat jij je na elke behandeling stralend en vol
              zelfvertrouwen voelt.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

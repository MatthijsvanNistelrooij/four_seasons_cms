"use client"

import hero from "../../public/assets/hero_3.png"
import OpeningHours from "../shared/OpeningHours"
import { treatmentSections } from "@/constants"
import VideoCarousel2 from "../video/VideoCarousel2"
import VideoCarousel from "../video/VideoCarousel"
import NextHeader from "../shared/NextHeader"
import { AppointmentDialog } from "../modals/AppointmentDialog"
import { useState } from "react"
import Header from "../shared/Header"
import { infoPageVariables } from "@/constants"

export default function InfoPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <NextHeader title="Behandelingen" />

      <main className="">
        <Header
          bold={false}
          opacity={"opacity-40"}
          image={hero}
          textCenter={true}
          headerText={infoPageVariables.headerText}
        />

        <section className="bg-white py-16">
          <div className="container mx-auto px-8 md:px-20">
            <h1
              className="text-xl lg:text-3xl font-semibold text-black text-center mb-10"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Onze Behandelingen
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800 text-sm leading-relaxed">
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
              <div className="">
                <VideoCarousel />

                <div className="flex justify-center mt-10">
                  <AppointmentDialog
                    hover="hover:bg-pink-500"
                    title="Maak een afspraak"
                    open={openDialog}
                    onOpenChange={setOpenDialog}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center" />
        </section>

        <section className="bg-[#eaeaea] py-16 text-black">
          <div className="container mx-auto px-8 md:px-20">
            <h2
              className="text-xl lg:text-3xl font-semibold text-center mb-20"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Wat levert onze behandeling op?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800 text-sm leading-relaxed">
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

        <section className="bg-white py-16">
          <div className="container mx-auto px-8 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-800 text-sm leading-relaxed">
              <div className="">
                <VideoCarousel2 />
              </div>
              <div className="bg-[#e9207e] text-white p-5 w-full py-14 lg:py-24 rounded-xl flex flex-col text-center justify-center mb-5">
                <h3 className="font-semibold mb-6 text-white text-xl">
                  Openingstijden & contact
                </h3>
                <OpeningHours text="white" center={true} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

"use client"

import hero from "../public/assets/hero_3.jpg"
import hero2 from "../public/assets/hero_4.jpg"
import OpeningHours from "./OpeningHours"

export default function BeatyPage() {
  return (
    <main className="">
      <section
        className="relative w-full h-[60vh] md:h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col text-white gap-8">
            {" "}
            <h2 className="text-sm md:text-2xl lg:text-3xl font-bold">
              Je gezicht weer laten stralen met schoonheidsbehandelingen in
              Groningen
              <br />
            </h2>
            <p style={{ fontFamily: "sans-serif" }} className="leading-7">
              Wij bieden onder andere professionele wimperextensions aan voor
              wie op zoek is naar vollere en langere wimpers. Onze getrainde
              wimperstylisten gebruiken alleen hoogwaardige materialen en
              technieken om ervoor te zorgen dat de extensions op de juiste
              manier worden geplaatst. Of je nu op zoek bent naar subtiele
              wimpers of volle wimpers, ons team staat klaar om jou te helpen.
              Kom langs bij Four Seasons in Groningen en ontdek hoe wij jouw
              wimpers kunnen laten stralen!
            </p>
            <p
              style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}
              className="text-lg"
            >
              Onze diensten: Huidverzorging, vacuüm gezichtsreiniging, SOS
              schoonheidsprocedures, darsonval, liftende gezichtsmassage,
              sculpturale gezichtsmassage, anti-aging gezichtsmassage, pellen,
              manicuristische diensten, correctie van nagelcoating,
              basismanicure, Franse manicure, spa manicure, lak en biab-coating,
              nagel ontwerp
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-white py-24 mb-56">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          {" "}
          <div className="space-y-12 w-full max-w-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
              Ontspan en geniet van een luxueuze gezichtsbehandeling in
              Groningen
            </h2>
            <p
              className="text-base flex flex-col text-black leading-relaxed"
              style={{ fontFamily: "sans-serif" }}
            >
              Wij bieden professionele gezichtsbehandelingen aan om jouw huid te
              laten stralen. Onze ervaren schoonheidsspecialisten gebruiken
              alleen hoogwaardige producten en technieken om ervoor te zorgen
              dat jouw huid optimaal wordt verzorgd en gevoed. Of je nu last
              hebt van acne, fijne lijntjes en rimpels, of gewoon op zoek bent
              naar een verfrissende behandeling, wij hebben de oplossing voor
              jou. Kom langs bij ons aan het Reitemakersrijge en geniet van een
              ontspannende en effectieve gezichtsbehandeling die jouw huid weer
              doet stralen.
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
              Perfect gevormde wenkbrauwen in Groningen: laat je natuurlijke
              schoonheid naar voren brengen
            </h2>
            <p
              className="text-base flex flex-col text-black leading-relaxed"
              style={{ fontFamily: "sans-serif" }}
            >
              Wij weten als geen ander dat perfect gevormde wenkbrauwen de
              sleutel zijn tot een verzorgde uitstraling. Onze getrainde
              schoonheidsspecialisten bieden een breed scala aan wenkbrauw
              behandelingen aan, waaronder waxen, threading en verven. Wij
              accentueren de natuurlijke vorm van jouw wenkbrauwen om jouw
              gezicht perfect te complementeren en te laten stralen. Of je nu op
              zoek bent naar een subtiele of dramatische verandering, ons team
              staat klaar om jouw wenkbrauwen perfect te vormen.
            </p>
          </div>
          <div className="bg-[#e9207e] text-white p-5 w-full py-24 rounded-xl flex text-center justify-center text-xl">
            <OpeningHours text="white" />
          </div>
        </div>
      </section>
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-center bg-cover"
        style={{
          backgroundImage: `url(${hero2.src})`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Text container */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col text-white gap-12">
            {" "}
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center">
              Stralend voor de dag met onze visagie service in Groningen: <br />
              Laat ons je beste features benadrukken
            </h2>
            <p className="md:text-md leading-relaxed text-center">
              Heb je een speciale gelegenheid waarvoor je er stralend wil
              uitzien? Onze visagiste staat klaar om een prachtige make-up look
              te maken die volledig is afgestemd op jouw wensen. Je kan kiezen
              om langs te komen in onze zaak aan het Reitemakersrijge of laat
              onze visagiste bij je thuis komen. Benieuwd wat we voor jou kunnen
              betekenen? Neem vandaag nog contact met ons op!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

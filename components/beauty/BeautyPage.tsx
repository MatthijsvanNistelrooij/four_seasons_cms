"use client"

import skincare from "../../public/images/skin_care_1.png"
import { motion } from "framer-motion"

import { AppointmentDialog } from "../modals/AppointmentDialog"
import { useState } from "react"

import ImageCarousel from "../image/ImageCarousel"
import ImageCarousel3 from "../image/ImageCarousel3"
import ImageCarousel2 from "../image/ImageCarousel2"
import beauty from "../../public/assets/beauty.jpg"
import Header from "./Header"
import InstagramEmbed from "./InstagramEmbed"
import NextHeader from "../shared/NextHeader"
import PageSection from "../shared/PageSection"
import VideoCard from "./VideoCard"

const BeautyPage = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <NextHeader />

      <Header
        opacity={"opacity-50"}
        image={beauty}
        textCenter={false}
        headerText="Je gezicht weer laten stralen met schoonheidsbehandelingen in Groningen"
        subText="Onze diensten: Huidverzorging, vacuüm gezichtsreiniging, SOS
                   schoonheidsprocedures, darsonval, liftende gezichtsmassage,
                   sculpturale gezichtsmassage, anti-aging gezichtsmassage, pellen,
                   manicuristische diensten, correctie van nagelcoating,
                   basismanicure, Franse manicure, spa manicure, lak en
                   biab-coating, nagel ontwerp"
      />
      <PageSection
        heading="De ultieme beauty ervaring bij kapsalon Four Seasons"
        description="            Bij Kapsalon Four Seasons in Groningen geloven we dat de
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
                en vol zelfvertrouwen voelt."
        Carousel={<ImageCarousel />}
      />

      <PageSection
        heading="Perfect verzorgde nagels in Groningen: straal tot in de vingertoppen"
        description="            Bij Four Seasons ben je aan het juiste adres voor 
        professionele nagelverzorging en stijlvolle nagelstyling. Of je nu kiest 
        voor een klassieke manicure, een verzorgde French manicure of een opvallend 
        nagelontwerp, wij zorgen ervoor dat jouw handen er altijd tiptop uitzien. 
        Onze specialisten werken met hoogwaardige producten en nemen de tijd voor 
        een nauwkeurige afwerking. Laat jezelf verwennen met een spa-manicure 
        of geef je nagels extra stevigheid met een BIAB-coating. Kom langs en 
        ervaar hoe mooie nagels bijdragen aan jouw uitstraling!"
        Carousel={<ImageCarousel2 />}
        bgColor={"bg-[#eaeaea]"}
        imageLeft={true}
      />

      <PageSection
        heading="             Perfect gevormde wenkbrauwen in Groningen: laat je natuurlijke
                schoonheid naar voren brengen"
        description="                            Wij weten als geen ander dat perfect gevormde wenkbrauwen de
                sleutel zijn tot een verzorgde uitstraling. Onze getrainde
                schoonheidsspecialisten bieden een breed scala aan wenkbrauw
                behandelingen aan, waaronder waxen, threading en verven. Wij
                accentueren de natuurlijke vorm van jouw wenkbrauwen om jouw
                gezicht perfect te complementeren en te laten stralen. Of je nu
                op zoek bent naar een subtiele of dramatische verandering, ons
                team staat klaar om jouw wenkbrauwen perfect te vormen."
        Carousel={<ImageCarousel3 />}
        bgColor={"bg-white"}
        imageLeft={false}
      />

      <PageSection
        heading="                     Ontspan en geniet van een luxueuze gezichtsbehandeling in
                Groningen"
        description="                                        Heb je een speciale gelegenheid waarvoor je er stralend wil
                uitzien? Onze visagiste staat klaar om een prachtige make-up
                look te maken die volledig is afgestemd op jouw wensen. Je kan
                kiezen om langs te komen in onze zaak aan het Reitemakersrijge
                of laat onze visagiste bij je thuis komen. Benieuwd wat we voor
                jou kunnen betekenen? Neem vandaag nog contact met ons op."
        Carousel={<VideoCard />}
        bgColor={"bg-[#eaeaea]"}
        imageLeft={false}
        CTA={
          <AppointmentDialog
            hover="hover:bg-pink-500"
            title="Maak een afspraak"
            open={openDialog}
            onOpenChange={setOpenDialog}
          />
        }
      />
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
                Stralend voor de dag met onze visagie service in Groningen: Laat
                ons je beste features benadrukken
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BeautyPage

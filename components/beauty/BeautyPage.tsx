"use client"

import skincare from "../../public/images/skin_care_1.png"
import { AppointmentDialog } from "../modals/AppointmentDialog"
import { useState } from "react"
import beauty from "../../public/assets/beauty.jpg"
import Header from "../shared/Header"
// import InstagramEmbed from "./InstagramEmbed"
import NextHeader from "../shared/NextHeader"
import PageSection from "../shared/PageSection"
import VideoCard from "./VideoCard"
import ImageCarousel from "../image/ImageCarousel"
import ImageCarousel4 from "../image/ImageCarousel4"
import ImageCarousel3 from "../image/ImageCarousel3"
import { beautyPageVariables } from "@/constants"

const BeautyPage = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <NextHeader />

      <Header
        bold={true}
        opacity={"opacity-50"}
        image={beauty}
        textCenter={false}
        headerText={beautyPageVariables.headerText}
        subText={beautyPageVariables.subText}
      />

      <PageSection
        title={beautyPageVariables.sectionTitle1}
        description={beautyPageVariables.sectionDescription1}
        media={<ImageCarousel4 />}
      />

      <PageSection
        title={beautyPageVariables.sectionTitle2}
        description={beautyPageVariables.sectionDescription2}
        media={<ImageCarousel />}
        bgColor={"bg-[#eaeaea]"}
        imageLeft={true}
      />

      <PageSection
        title={beautyPageVariables.sectionTitle3}
        description={beautyPageVariables.sectionDescription3}
        media={<ImageCarousel3 />}
        bgColor={"bg-white"}
        imageLeft={false}
      />

      <PageSection
        title={beautyPageVariables.sectionTitle4}
        description={beautyPageVariables.sectionDescription4}
        media={<VideoCard />}
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

      {/* <InstagramEmbed /> */}

      <Header
        bold={true}
        opacity={"opacity-30"}
        image={skincare}
        textCenter={true}
        headerText={
          <>
            Stralend voor de dag met onze visagie service in Groningen: Laat ons
            je beste features benadrukken
          </>
        }
      />
    </>
  )
}

export default BeautyPage

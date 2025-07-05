"use client"

import Hero from "@/components/Hero"
import { useState } from "react"
import { AppointmentDialog } from "@/components/AppointmentDialog"

import GoogleReviews from "@/components/GoogleReviews"
import GoogleMaps from "@/components/GoogleMaps"
import InfoSection from "@/components/InfoSection"
import TreatmentSection from "@/components/TreatmentSection"
import ShopSection from "@/components/ShopSection"
import PricingSection from "@/components/PricingSection"
import Head from "next/head"

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="text-black flex flex-col justify-center">
      <Head>
        <title>Welkom | Kapsalon Four Seasons Groningen</title>
        <meta
          name="description"
          content="Leer ons team kennen en ontdek waarom Kapsalon Four Seasons in Groningen dé plek is voor haar- en schoonheidsbehandelingen."
        />
      </Head>
      <Hero onOpenDialog={() => setOpenDialog(true)} />
      <InfoSection />
      <TreatmentSection />
      <ShopSection />
      <GoogleMaps />
      <GoogleReviews />
      <PricingSection />
      <div className="hidden">
        <AppointmentDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          title="MAAK EEN AFSPRAAK"
        />
      </div>
    </div>
  )
}

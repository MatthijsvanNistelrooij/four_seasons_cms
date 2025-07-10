"use client"

import Hero from "@/components/home/Hero"
import { useState } from "react"
import { AppointmentDialog } from "@/components/modals/AppointmentDialog"

import GoogleReviews from "@/components/google/GoogleReviews"
import GoogleMaps from "@/components/google/GoogleMaps"
import InfoSection from "@/components/home/InfoSection"
import TreatmentSection from "@/components/home/TreatmentSection"
import ShopSection from "@/components/home/ShopSection"
import NextHeader from "@/components/shared/NextHeader"

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="text-black flex flex-col justify-center">
      <NextHeader />
      <Hero onOpenDialog={() => setOpenDialog(true)} />
      <InfoSection />
      <TreatmentSection />
      <ShopSection />
      <GoogleMaps />
      <GoogleReviews />
      <div className="hidden">
        <AppointmentDialog
          hover="hover:bg-pink-300"
          open={openDialog}
          onOpenChange={setOpenDialog}
          title="MAAK EEN AFSPRAAK"
        />
      </div>
    </div>
  )
}

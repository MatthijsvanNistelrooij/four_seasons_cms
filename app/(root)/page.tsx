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

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="text-black flex flex-col justify-center">
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

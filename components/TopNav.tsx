"use client"
import { useState } from "react"

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { AppointmentDialog } from "./AppointmentDialog"
import Link from "next/link"

const TopNav = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="bg-[#e9207e] z-50 hidden md:block">
      <div className="container mx-auto relative flex items-center justify-between py-3 md:px-20 px-8">
        <div className="flex gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/kapsalonfourseasons/"}
          >
            <FaFacebookF className="text-white font-bold cursor-pointer hover:text-black" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/olga_beautyfs/"}
          >
            <FaInstagram className="text-white font-bold cursor-pointer hover:text-black" />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <AppointmentDialog
            title="Klik hier om een afspraak te maken..."
            open={openDialog}
            onOpenChange={setOpenDialog}
          />
        </div>
        <div className="w-10" />
      </div>
    </div>
  )
}

export default TopNav

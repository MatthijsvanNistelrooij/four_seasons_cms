"use client"

import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import TopNav from "@/components/shared/TopNav"
import Maintenance from "@/components/maintenance/Maintenance"

const MAINTENANCE_MODE = true

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (MAINTENANCE_MODE) {
    return (
      <Maintenance />
    )
  }

  return (
    <main className="root">
      <div className="root-container font-roboto-slab">
        <TopNav />
        <Navbar />
        <div className="wrapper">{children}</div>
        <Footer />
      </div>
    </main>
  )
}

export default Layout
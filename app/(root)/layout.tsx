"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TopNav from "@/components/TopNav"

const Layout = ({ children }: { children: React.ReactNode }) => {
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

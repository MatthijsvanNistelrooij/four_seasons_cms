"use client"
import Navbar from "@/components/Navbar"
import TopNav from "@/components/TopNav"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div
        className="root-container font-roboto-slab"
        style={{ fontFamily: "var(--font-roboto-slab)" }}
      >
        <TopNav />
        <Navbar />

        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}

export default Layout

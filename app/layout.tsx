import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/context/AuthContext"

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Four Seasons | Ervaren Kapper en Beauty Specialist in Groningen",
  description: "Four Seasons Kapper Groningen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

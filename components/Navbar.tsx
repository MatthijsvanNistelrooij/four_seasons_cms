import Link from "next/link"
import React, { useState } from "react"
import logo from "../public/assets/kapsalon-four-seasons-groningen.png"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navLinks } from "@/constants"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = (path: string) =>
    `relative font-bold pb-1 border-b-2 transition-all transition-l-to-r duration-300 
   ${
     pathname === path
       ? "border-[#e9207e]"
       : "border-transparent hover:border-[#e9207e]"
   }`

  return (
    <div className="flex sticky top-0 shadow-lg z-50 bg-white">
      <div className="container mx-auto relative flex items-center justify-between py-1 lg:py-7 md:px-20 px-8 min-h-18">
        <div className="flex items-center mr-5 min-w-[300px] lg:min-w-[420px] max-w-[300px] lg:max-w-[420px]">
          <Link href="/">
            <Image src={logo} alt="Logo" className="" priority />
          </Link>
        </div>
        <div className="hidden lg:flex gap-11 items-center justify-end w-full ml-10 ">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className={linkClass(`${link.path}`)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className=" text-lg font-bold text-white bg-black hover:bg-gray-900 rounded-full px-4 py-1"
          >
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl cursor-pointer"
          >
            {isOpen ? (
              <X size={20} className="mt-2" />
            ) : (
              <Menu className="mt-1" />
            )}
          </button>
        </div>

        <div className="hidden w-full text-sm xl:flex flex-col justify-end items-end text-right">
          <div className="font-bold">Reitemakersrijge 3, </div>
          <div>Groningen</div>
        </div>
        {/* <div className="w-full hidden lg:flex" /> */}
      </div>
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md border-t z-40 flex flex-col items-start px-8 py-4 lg:hidden space-y-7">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="py-2 text-lg font-bold w-full"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/about"
            className="py-2 text-lg font-bold w-full"
          >
            Over
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/info"
            className="py-2 text-lg font-bold w-full"
          >
            Behandelingen
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/beauty"
            className="py-2 text-lg font-bold w-full"
          >
            Beauty
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="py-2 text-lg font-bold w-full text-white bg-black rounded-full text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar

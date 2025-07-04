import Image from "next/image"
import Link from "next/link"
import logo from "../public/assets/logo_header.png"
import OpeningHours from "./OpeningHours"
import matp from "../public/matp.png"

const Footer = () => {
  return (
    <>
      <footer
        className="bg-black text-white py-24"
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="container mx-auto px-8 md:px-20 flex flex-col md:flex-row gap-12">
          <div className="flex-shrink-0 flex flex-col">
            <Link href={"/"}>
              <div className="bg-[#e9207e] p-10 py-15 max-w-xs flex justify-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex w-44 mt-12">
              Copyright © 2025 Kapsalon Four Seasons All rights reserved.
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end flex-1 gap-12">
            <div>
              <h3 className="font-semibold mb-4 text-[#e9207e]">Pagina’s</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="hover:underline">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href="/beauty" className="hover:underline">
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link href="/behandelingen" className="hover:underline">
                    Behandelingen
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#e9207e]">
                Openingstijden & contact
              </h3>
              <OpeningHours />
            </div>
          </div>
        </div>
      </footer>
      <div className="flex w-full justify-end bg-black p-5">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.matthijsvannistelrooij.nl"}
          className="flex text-xs text-black hover:text-gray-500"
        >
          Powered by
          <Image
            src={matp}
            width={18}
            height={18}
            alt="logo"
            className="ml-2"
          />
        </Link>
      </div>
    </>
  )
}

export default Footer

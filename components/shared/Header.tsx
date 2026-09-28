"use client"

import React, { ReactNode, useState } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./Header.module.css"

type HeaderProps = {
  image: StaticImageData
  headerText: string | ReactNode
  subText?: string | ReactNode
  opacity?: string
  textCenter: boolean
  bold: boolean
}

const Header = ({
  image,
  headerText,
  subText,
  opacity,
  bold,
  textCenter,
}: HeaderProps) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null)

  return (
    <>
      <section className="relative bg-black overflow-hidden w-full flex flex-col justify-center min-h-[15vh] xl:h-[80vh]">
        <div
          className="absolute inset-0 z-0 bg-black"
          aria-hidden="true"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover ${opacity ?? ""} ${
              loadedImage === image.src ? styles.ready : ""
            }`}
            style={{ visibility: loadedImage === image.src ? "visible" : "hidden" }}
            onLoad={() => setLoadedImage(image.src)}
            priority
          />
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-8 md:px-20 flex flex-col py-20 text-white gap-12">
            <div
              className="w-full h-full space-y-5"
            >
              <h2
                className={`text-xl md:text-2xl lg:md:text-3xl  font-bold mb-4 ${
                  textCenter ? "text-center" : ""
                }`}
                style={{ fontFamily: "var(--font-roboto-slab)" }}
              >
                {headerText}
              </h2>

              <p
                className={`md:text-md leading-relaxed ${
                  bold ? "font-bold tracking-wide" : ""
                }`}
              >
                {subText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header

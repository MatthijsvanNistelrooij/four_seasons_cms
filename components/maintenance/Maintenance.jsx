import React from "react"
import Image from "next/image"

const Maintenance = () => {
  return (
    <main className="root flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <Image
          src="/logo.png"
          alt="Petros logo"
          width={250}
          height={250}
          className="mx-auto mb-8"
        />

        <h1 className="mb-6 text-3xl font-bold">
          We zijn bezig met een verhuizing
        </h1>

        <p className="text-lg leading-relaxed">
          Onze nieuwe locatie wordt momenteel voorbereid. Dit duurt naar
          verwachting ongeveer een maand. We houden jullie uiteraard op de
          hoogte zodra er meer nieuws is.
        </p>

        <p className="mt-8 text-lg">
          Met vriendelijke groet,
          <br />
          Uw kapper,
          <br />
          Petros
        </p>
      </div>
    </main>
  )
}

export default Maintenance

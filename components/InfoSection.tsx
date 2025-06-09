import Image from "next/image"
import React from "react"
import logo_header from "../public/assets/logo_header.png"

const InfoSection = () => {
  return (
    <div>
      <section className="bg-white text-white py-24">
        <div className="container mx-auto px-8 md:px-20 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            {/* Image 1 */}
            <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={logo_header}
                alt="Team member 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right: Text */}
          <div className="w-full flex flex-col justify-start">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              Ervaren dames & herenkapper in Groningen
            </h2>
            <p
              className="text-black lg:text-lg leading-relaxed"
              style={{ fontFamily: "sans-serif" }}
            >
              Bij ons kun je terecht voor een professionele en betaalbare
              knipbeurt. Wil je een nieuwe look uitproberen? Wij staan voor je
              klaar met een passend advies. Ook als je jouw haar wil laten
              bijwerken of gewoon wilt ontspannen met een kappersbehandeling,
              helpen we je graag. Als vertrouwde kapper in Groningen, begrijpen
              we dat jouw tijd kostbaar is. De combinatie van ruim 35 jaar
              ervaring en persoonlijke aandacht, maken het mogelijk om snel en
              efficiënt te werken zonder afbreuk te doen aan de kwaliteit. Dat
              maakt onze kapsalon zo uniek én gezellig!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoSection

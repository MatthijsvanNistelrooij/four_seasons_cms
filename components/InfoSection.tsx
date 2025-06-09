import Image from "next/image"
import React from "react"
import logo_header from "../public/assets/logo_header.png"

const InfoSection = () => {
  return (
    <div>
      <section className="w-full bg-white ">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-24 gap-5 lg:gap-12">
          <div className="w-full h-[220px] mb-10 bg-[#e9207e] rounded-xl">
            <Image
              src={logo_header}
              alt="logo"
              width={1400}
              height={1400}
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="w-full">
            <div className="max-w-xl md:mb-40">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ervaren dames & herenkapper in Groningen
              </h2>
              <p className="lg:text-lg text-gray-600">
                Bij ons kun je terecht voor een professionele en betaalbare
                knipbeurt. Wil je een nieuwe look uitproberen? Wij staan voor je
                klaar met een passend advies. Ook als je jouw haar wil laten
                bijwerken of gewoon wilt ontspannen met een kappersbehandeling,
                helpen we je graag. Als vertrouwde kapper in Groningen,
                begrijpen we dat jouw tijd kostbaar is. De combinatie van ruim
                35 jaar ervaring en persoonlijke aandacht, maken het mogelijk om
                snel en efficiënt te werken zonder afbreuk te doen aan de
                kwaliteit. Dat maakt onze kapsalon zo uniek én gezellig!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoSection

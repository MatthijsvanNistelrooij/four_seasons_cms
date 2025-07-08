import React from "react"
import { motion } from "framer-motion"
import hero from "../public/assets/hero_2.png"

const Header = () => {
  return (
    <section
      className="relative w-full min-h-[30vh] md:h-[80vh] bg-center bg-cover"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-8 md:px-20 flex flex-col py-20 text-white gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full h-full space-y-5"
          >
            <h2
              className="text-xl md:text-2xl lg:md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Je gezicht weer laten stralen met schoonheidsbehandelingen in
              Groningen
            </h2>

            <p className="md:text-md leading-relaxed tracking-wide font-bold">
              Onze diensten: Huidverzorging, vacuüm gezichtsreiniging, SOS
              schoonheidsprocedures, darsonval, liftende gezichtsmassage,
              sculpturale gezichtsmassage, anti-aging gezichtsmassage, pellen,
              manicuristische diensten, correctie van nagelcoating,
              basismanicure, Franse manicure, spa manicure, lak en biab-coating,
              nagel ontwerp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Header

import React from "react"
import OpeningHours from "../shared/OpeningHours"
import { motion } from "framer-motion"

const GoogleMaps = () => {
  return (
    <div>
      <section className="bg-[#e9207e] min-h-[25vh] flex flex-col justify-center py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 gap-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-[350px] lg:h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Westerhaven%2012%2C%209718%20AW%20Groningen&amp;output=embed" title="Westerhaven 12, 9718 AW Groningen"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-md shadow-md"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white w-full space-y-4 mb-20"
          >
            <h1
              className="text-xl lg:text-3xl font-medium font-sans"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Openingstijden & Contact
            </h1>
            <OpeningHours center={false} />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GoogleMaps

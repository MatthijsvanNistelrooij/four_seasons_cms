import React from "react"
import OpeningHours from "./OpeningHours"
import { motion } from "framer-motion"

const GoogleMaps = () => {
  return (
    <div>
      <section className="w-full bg-[#e9207e]">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch px-8 md:px-20 py-12 md:py-16 lg:py-48 gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
            className="w-full h-[350px] lg:h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.76340790475925!2d6.561769514987872!3d53.21515910574965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd28d615ca8b%3A0x665498987f6ab9d4!2sKapsalon%20Four%20Seasons!5e1!3m2!1sen!2snl!4v1749164707339!5m2!1sen!2snl"
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
            className="text-white w-full space-y-4"
          >
            <h1
              className="text-xl lg:text-3xl font-medium font-sans"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Openingstijden & Contact
            </h1>
            <OpeningHours />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GoogleMaps

"use client" // only needed if you're using Next.js 13+ App Router

import { useEffect } from "react"
import { motion } from "framer-motion"

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="mx-auto flex flex-col justify-center py-40 md:px-20 p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
        className="w-full h-full"
      >
        <div
          className="elfsight-app-f77e08e6-daaf-4860-9cf2-edac151cca1e"
          data-elfsight-app-lazy
        />
      </motion.div>
    </section>
  )
}

export default GoogleReviews

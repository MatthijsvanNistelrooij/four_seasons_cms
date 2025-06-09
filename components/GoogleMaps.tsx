import React from "react"
import OpeningHours from "./OpeningHours"

const GoogleMaps = () => {
  return (
    <div>
      <section className="w-full bg-[#e9207e]">
        <div className="flex flex-col lg:flex-row container mx-auto items-stretch md:px-20 px-8 py-24 gap-12">
          <div className="w-full h-[350px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.76340790475925!2d6.561769514987872!3d53.21515910574965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd28d615ca8b%3A0x665498987f6ab9d4!2sKapsalon%20Four%20Seasons!5e1!3m2!1sen!2snl!4v1749164707339!5m2!1sen!2snl"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-md shadow-md"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-white w-full space-y-8">
            <h1 className="text-3xl font-medium font-sans">
              Openingstijden & Contact
            </h1>
            <OpeningHours />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GoogleMaps

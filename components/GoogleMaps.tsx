import React from "react"

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

            <div className="space-y-1 lg:text-xl">
              <p>
                <span className="font-bold">Ma</span> : 12:00 – 18:00
              </p>
              <p>
                <span className="font-bold">Di</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Wo</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Do</span> : 10:00 – 20:00
              </p>
              <p>
                <span className="font-bold">Vr</span> : 10:00 – 19:00
              </p>
              <p>
                <span className="font-bold">Za</span> : 10:00 – 18:00
              </p>
              <p>
                <span className="font-bold">Zo</span> : Gesloten
              </p>
            </div>

            <div className="text-sm md:text-base space-y-3">
              <p className="mb-12">
                <strong>tel.</strong>{" "}
                <a href="tel:0630717774" className="">
                  06 307 17774
                </a>
              </p>
              <p>
                <a href="mailto:nl.butterfly@hotmail.com" className="">
                  nl.butterfly@hotmail.com
                </a>
              </p>
              <p>
                <a href="mailto:nl.fourseasons@gmail.com" className="">
                  nl.fourseasons@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GoogleMaps

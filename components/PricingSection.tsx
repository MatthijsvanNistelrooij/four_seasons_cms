import React from "react"

const PricingSection = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center  gap-14 py-32 bg-[#e9207e]">
        <div className="flex container h-full mx-auto items-center py-48 md:px-20 px-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-20 text-center text-white">
              Onze Prijzen
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                { title: "Dames kort haar knippen", price: "€ 28,50" },
                { title: "Dames half-lang haar knippen", price: "€ 32,50" },
                { title: "Dames lang haar knippen", price: "€ 37,50" },
                { title: "Heren knippen", price: "€ 28,50" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded text-center w-full h-48 flex items-center flex-col justify-center"
                >
                  <p className="text-sm text-gray-900 font-bold mb-5">
                    {item.title}
                  </p>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-950 to-pink-500">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingSection

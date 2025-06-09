"use client"
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import OpeningHours from "./OpeningHours"

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!form.current) return

    emailjs
      .sendForm(
        "your_service_id", // replace with your actual EmailJS Service ID
        "your_template_id", // replace with your EmailJS Template ID
        form.current,
        "your_public_key" // replace with your EmailJS Public Key
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)
        form.current?.reset()
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#eaeaea] py-40">
      <div className="container mx-auto px-8 md:px-20 flex justify-center flex-col lg:flex-row gap-12">
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6">Neem contact op</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Naam</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Telefoonnummer</label>
              <input
                type="tel"
                name="user_phone"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Bericht</label>
              <textarea
                name="message"
                rows={8}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#e9207e] text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
            >
              {loading ? "Verzenden..." : "Verstuur bericht"}
            </button>

            {success && (
              <p className="text-green-600 text-sm mt-2">
                Bericht succesvol verzonden!
              </p>
            )}
          </form>
        </div>

        <div className="bg-[#e9207e] text-white p-5 rounded-xl">
          <OpeningHours text="white" />
          <div className="w-full h-[150px] lg:h-[200px] mt-15">
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
        </div>
      </div>
    </section>
  )
}

export default ContactPage

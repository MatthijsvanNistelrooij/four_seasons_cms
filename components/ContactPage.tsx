"use client"
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import OpeningHours from "./OpeningHours"
import { Button } from "./ui/button"
import Head from "next/head"

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
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_TEMPLATE!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
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
    <>
      <Head>
        <title>Contact | Kapsalon Four Seasons Groningen</title>
        <meta
          name="description"
          content="Leer ons team kennen en ontdek waarom Kapsalon Four Seasons in Groningen dé plek is voor haar- en schoonheidsbehandelingen."
        />
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#eaeaea] py-10 lg:py-40 px-8 md:px-20">
        <div className="mb-24 space-y-5">
          <h2
            className="text-2xl lg:text-4xl text-gray-800 font-semibold text-center max-w-2xl"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            Benieuwd wat we voor jou kunnen betekenen?
          </h2>
          <p className="font-bold text-gray-800 text-center">
            Neem contact met ons op via het formulier of bel ons!
          </p>
        </div>

        <div className="container mx-auto md:px-20 flex justify-center flex-col lg:flex-row gap-5 max-w-4xl">
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8 w-full">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Neem contact op
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              <div>
                <label className="block text-sm mb-1">Naam</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">E-mail</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Bericht</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <input
                type="hidden"
                name="to_email"
                value={process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_TEMPLATE}
              />

              <Button
                type="submit"
                disabled={loading}
                className="bg-[#e9207e] text-white px-6 py-2 font-bold rounded-md hover:bg-pink-600 transition cursor-pointer"
                style={{ fontFamily: "sans-serif" }}
              >
                {loading ? "Verzenden..." : "Verstuur bericht"}
              </Button>

              {success && (
                <p className="text-green-600 text-sm mt-2">
                  Bericht succesvol verzonden!
                </p>
              )}
            </form>
          </div>

          <div className="bg-[#e9207e] text-white p-5 w-full lg:w-1/2 rounded-xl">
            <h3 className="font-semibold mb-6 text-white text-xl">
              Openingstijden & contact
            </h3>
            <OpeningHours text="white" />
            <div className="w-full h-[400px] lg:h-[200px] mt-15">
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
    </>
  )
}

export default ContactPage

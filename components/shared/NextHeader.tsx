import React from "react"
import Head from "next/head"

type NextHeaderProps = { 
  title: string
}

const NextHeader = ({ title } : NextHeaderProps) => {
  return (
    <Head>
      <title>{title} | Kapsalon Four Seasons Groningen</title>
      <meta
        name="description"
        content="Leer ons team kennen en ontdek waarom Kapsalon Four Seasons in Groningen dé plek is voor haar- en schoonheidsbehandelingen."
      />
    </Head>
  )
}

export default NextHeader

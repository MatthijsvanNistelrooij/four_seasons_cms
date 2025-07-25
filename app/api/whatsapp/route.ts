import { NextRequest, NextResponse } from "next/server"
import twilio from "twilio"

export async function POST(req: NextRequest) {
  const accountSid = process.env.TWILIO_SID!
  const authToken = process.env.TWILIO_TOKEN!
  const client = twilio(accountSid, authToken)

  const { name, time, service, date, phone } = await req.json()

  const formattedDate = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))

  try {
    const messageBody = `❗ Nieuwe afspraak:\n 👤 Naam: ${name}\n 📱 Tel: ${phone} \n 📅 Datum: ${formattedDate} \n 🕒 Tijd: ${time} \n 💇 Dienst: ${service}`

    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: process.env.WHATSAPP_NUMBER_2!,
      body: messageBody,
    })

    return NextResponse.json({ success: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

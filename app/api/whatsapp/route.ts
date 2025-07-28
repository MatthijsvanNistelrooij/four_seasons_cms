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
    const isKnippen = service.toLowerCase().includes("knippen")

    const to = isKnippen
      ? process.env.BOTROS_WHATSAPP!
      : process.env.OLGA_WHATSAPP!

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP!,
      to,
      contentSid: process.env.TWILIO_TEMPLATE_SID!,
      contentVariables: JSON.stringify({
        1: name,
        2: phone,
        3: formattedDate,
        4: time,
        5: service,
      }),
    })

    return NextResponse.json({ success: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

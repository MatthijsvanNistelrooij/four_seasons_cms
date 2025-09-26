import { NextRequest, NextResponse } from "next/server"
import twilio from "twilio"
import { generateGoogleCalendarLink } from "./generateGoogleCalendarLink"

const dagen = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
]
const maanden = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
]

export async function POST(req: NextRequest) {
  const accountSid = process.env.TWILIO_SID!
  const authToken = process.env.TWILIO_TOKEN!
  const client = twilio(accountSid, authToken)

  const { name, time, service, date, phone } = await req.json()

  try {
    const isKnippen = service.toLowerCase().includes("knippen")

    const to = isKnippen
      ? process.env.BOTROS_WHATSAPP!
      : process.env.OLGA_WHATSAPP!

    // Maak van date + time één lokale ISO string zonder tijdzone, bv "2025-08-15T12:00"
    const justDate = date.split("T")[0]
    const startLocalISO = `${justDate}T${time}`

    // Maak een Date object voor eindtijdberekening
    const [year, month, day] = justDate.split("-").map(Number)
    const [hours, minutes] = time.split(":").map(Number)
    const startDate = new Date(year, month - 1, day, hours, minutes)

    if (isNaN(startDate.getTime())) {
      throw new Error(`Ongeldige startdatum: ${justDate}T${time}`)
    }

    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000)
    const endLocalISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}T${String(endDate.getHours()).padStart(2, "0")}:${String(endDate.getMinutes()).padStart(2, "0")}`

    // Datum tekst voor WhatsApp
    const dag = dagen[startDate.getDay()]
    const dagNummer = startDate.getDate()
    const maand = maanden[startDate.getMonth()]

    // Genereer Google Calendar link
    const calendarLink = generateGoogleCalendarLink({
      title: `${service} met ${name}`,
      startDateTime: startLocalISO,
      endDateTime: endLocalISO,
      description: `Afspraak met ${name} (${phone}) - ${service}`,
    })

    const formattedDate = `${dag} ${dagNummer} ${maand} ${calendarLink}`

    // console.log("📦 WhatsApp message payload:")
    // console.log({
    //   to,
    //   contentVariables: {
    //     1: name,
    //     2: phone,
    //     3: formattedDate,
    //     4: time,
    //     5: service,
    //   },
    //   calendarLink,
    //   start: startDate.toISOString(),
    //   end: endDate.toISOString(),
    // })

    // Verstuur Twilio bericht
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

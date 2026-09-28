import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

const isKnipService = (service: string) =>
  service === "Heren knippen" || service === "Dames kort haar knippen"

export async function POST(request: Request) {
  try {
    const { date, service } = await request.json()
    if (typeof date !== "string" || typeof service !== "string") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const { data: appointments, error } = await supabaseAdmin
      .from("appointments")
      .select("date, time, service")
      .eq("date", date.slice(0, 10))

    if (error) throw error
    const blockedTimes = (appointments ?? [])
      .filter((appointment) => isKnipService(appointment.service) === isKnipService(service))
      .map((appointment) => ({
        date: appointment.date,
        time: appointment.time,
        service: appointment.service,
      }))

    return NextResponse.json({ blockedTimes })
  } catch (error) {
    console.error("Failed to fetch blocked times:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

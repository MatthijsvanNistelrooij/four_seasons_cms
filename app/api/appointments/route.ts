import { NextRequest, NextResponse } from "next/server"
import { requireAuthenticatedUser, supabaseAdmin } from "@/lib/supabase/server"

const fields = ["name", "service", "date", "email", "phone", "time", "barber"] as const

type AppointmentInput = Record<(typeof fields)[number], string>

function isAppointmentInput(value: unknown): value is AppointmentInput {
  if (!value || typeof value !== "object") return false
  return fields.every((field) => typeof (value as Record<string, unknown>)[field] === "string")
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    if (!isAppointmentInput(data)) {
      return NextResponse.json({ error: "Invalid appointment data" }, { status: 400 })
    }

    const appointment = {
      ...data,
      date: data.date.slice(0, 10),
    }
    const { data: created, error } = await supabaseAdmin
      .from("appointments")
      .insert(appointment)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(created, { status: 201 })
  } catch (error) {
    console.error("Failed to create appointment:", error)
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const user = await requireAuthenticatedUser(request)
  if (!user?.email_confirmed_at) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Failed to fetch appointments:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 })
  }

  return NextResponse.json(data)
}

import { NextRequest, NextResponse } from "next/server"
import { requireAuthenticatedUser, supabaseAdmin } from "@/lib/supabase/server"

const fields = ["name", "service", "date", "email", "phone", "time", "barber"] as const

async function authorized(request: NextRequest) {
  const user = await requireAuthenticatedUser(request)
  return Boolean(user?.email_confirmed_at)
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await authorized(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json() as Record<string, unknown>
    const appointment = Object.fromEntries(
      fields
        .filter((field) => typeof body[field] === "string")
        .map((field) => [field, field === "date" ? String(body[field]).slice(0, 10) : body[field]])
    )

    const { data, error } = await supabaseAdmin
      .from("appointments")
      .update(appointment)
      .eq("id", id)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to update appointment:", error)
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await authorized(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = await params
    const { error } = await supabaseAdmin.from("appointments").delete().eq("id", id)
    if (error) throw error
    return NextResponse.json({ message: "Appointment deleted" })
  } catch (error) {
    console.error("Failed to delete appointment:", error)
    return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 })
  }
}

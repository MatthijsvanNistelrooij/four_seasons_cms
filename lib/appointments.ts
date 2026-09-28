import type { Appointment } from "@/types"
import { supabase } from "@/lib/supabase/client"
import emailjs from "@emailjs/browser"

export type AppointmentInput = Omit<Appointment, "id" | "created_at" | "updated_at">

async function authorizationHeaders() {
  const { data } = await supabase.auth.getSession()
  if (!data.session) throw new Error("You must be signed in")
  return { Authorization: `Bearer ${data.session.access_token}` }
}

export async function getAllAppointments(): Promise<Appointment[]> {
  const response = await fetch("/api/appointments", {
    headers: await authorizationHeaders(),
  })
  if (!response.ok) throw new Error("Failed to fetch appointments")
  return response.json()
}

export async function createAppointment(appointment: AppointmentInput) {
  const response = await fetch("/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  })
  if (!response.ok) throw new Error("Failed to create appointment")

  const created = (await response.json()) as Appointment
  const templateParams = {
    name: appointment.name,
    service: appointment.service,
    date: appointment.date,
    time: appointment.time,
    email: appointment.email,
    phone: appointment.phone,
    barber: appointment.barber,
  }

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
    process.env.NEXT_PUBLIC_EMAIL_JS_APPOINTMENT_TEMPLATE!,
    {
      ...templateParams,
      to_email: appointment.email,
    },
    process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
  )

  const isKnippen = appointment.service.toLowerCase().includes("knippen")
  const ownerEmail = isKnippen
    ? process.env.NEXT_PUBLIC_EMAIL_ADDRESS_BOTROS!
    : process.env.NEXT_PUBLIC_EMAIL_ADDRESS_OLGA!

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
    process.env.NEXT_PUBLIC_EMAIL_JS_CONFIRM_APPOINTMENT_TEMPLATE!,
    {
      ...templateParams,
      to_email: ownerEmail,
    },
    process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
  )

  const whatsappResponse = await fetch("/api/whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: appointment.name,
      phone: appointment.phone,
      time: appointment.time,
      date: appointment.date,
      service: appointment.service,
    }),
  })

  if (!whatsappResponse.ok) {
    throw new Error("Appointment created, but WhatsApp notification failed")
  }

  return created
}

export async function updateAppointment(id: string, appointment: Appointment) {
  const response = await fetch(`/api/appointments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(await authorizationHeaders()),
    },
    body: JSON.stringify(appointment),
  })
  if (!response.ok) throw new Error("Failed to update appointment")
  return response.json()
}

export async function deleteAppointment(id: string) {
  const response = await fetch(`/api/appointments/${id}`, {
    method: "DELETE",
    headers: await authorizationHeaders(),
  })
  if (!response.ok) throw new Error("Failed to delete appointment")
}

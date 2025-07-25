import { useEffect, useState } from "react"
import { getAllAppointments } from "@/appwrite"
import { Appointment } from "@/types"
import { isSameDay, parseISO } from "date-fns"

export function useFetchAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const raw = await getAllAppointments()
        const parsed = raw.map((item) => ({
          $id: item.$id,
          $createdAt: item.$createdAt,
          $updatedAt: item.$updatedAt,
          name: item.name,
          service: item.service,
          date: item.date,
          email: item.email,
          phone: item.phone,
          time: item.time,
          barber: item.barber,
        }))
        setAppointments(parsed)
      } catch (err) {
        console.error("Failed to fetch appointments", err)
        setError("Failed to fetch appointments")
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  return { appointments, loading, error }
}

const isKnipService = (service: string) =>
  service === "Heren knippen" || service === "Dames kort haar knippen"

export function getBlockedTimesForDateAndService(
  appointments: Appointment[],
  date: Date,
  newService: string
) {
  return appointments
    .filter((appt) => isSameDay(parseISO(appt.date), date))
    .filter((appt) => {
      const existingIsKnip = isKnipService(appt.service)
      const newIsKnip = isKnipService(newService)

      if (existingIsKnip && newIsKnip) {
        return true
      }

      if (!existingIsKnip && !newIsKnip) {
        return true
      }

      return false
    })
    .map((appt) => appt.time)
}

import { DateTime } from "luxon"

export function generateGoogleCalendarLink({
  title,
  startDateTime,
  endDateTime,
  description,
  location,
}: {
  title: string
  startDateTime: string
  endDateTime: string
  description: string
  location?: string
}) {
  const startUTC = DateTime.fromISO(startDateTime, { zone: "Europe/Amsterdam" }).toUTC()
  const endUTC = DateTime.fromISO(endDateTime, { zone: "Europe/Amsterdam" }).toUTC()

  const formattedStart = startUTC.toFormat("yyyyLLdd'T'HHmmss'Z'")
  const formattedEnd = endUTC.toFormat("yyyyLLdd'T'HHmmss'Z'")

  const url = new URL("https://www.google.com/calendar/render")
  url.searchParams.set("action", "TEMPLATE")
  url.searchParams.set("text", title)
  url.searchParams.set("dates", `${formattedStart}/${formattedEnd}`)
  url.searchParams.set("details", description)
  if (location) url.searchParams.set("location", location)

  return url.toString()
}


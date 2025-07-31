export function generateGoogleCalendarLink({
  title,
  startDateTime,
  endDateTime,
  description,
  location,
}: {
  title: string
  startDateTime: Date
  endDateTime: Date
  description: string
  location?: string
}) {
  const format = (date: Date) =>
    date
      .toISOString()
      .replace(/[-:]|\.\d{3}/g, "") // Google Calendar expects YYYYMMDDTHHMMSSZ

  const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${format(startDateTime)}/${format(
    endDateTime
  )}&details=${encodeURIComponent(description)}${
    location ? `&location=${encodeURIComponent(location)}` : ""
  }`

  return link
}

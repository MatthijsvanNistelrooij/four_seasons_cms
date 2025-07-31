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
  const format = (date: Date) => date.toISOString().replace(/[-:]|\.\d{3}/g, "")

  const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${format(startDateTime)}/${format(
    endDateTime
  )}&details=${encodeURIComponent(description)}${
    location ? `&location=${encodeURIComponent(location)}` : ""
  }`

  return link
}

export async function shortenUrl(longUrl: string): Promise<string> {
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
  )
  return await response.text()
}

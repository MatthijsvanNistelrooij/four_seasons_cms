"use client" // only needed if you're using Next.js 13+ App Router

import { useEffect } from "react"

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="mx-auto flex flex-col justify-center py-40 md:px-20 p-8">
      <div
        className="elfsight-app-f77e08e6-daaf-4860-9cf2-edac151cca1e"
        data-elfsight-app-lazy
      />
    </section>
  )
}

export default GoogleReviews

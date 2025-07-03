import { useEffect } from "react"

export default function InstagramEmbed() {
  useEffect(() => {
    // Instagram script opnieuw laden wanneer component wordt geladen
    const script = document.createElement("script")
    script.setAttribute("src", "//www.instagram.com/embed.js")
    script.setAttribute("async", "")
    document.body.appendChild(script)
  }, [])
  return (
    <section className="bg-white min-h-[15vh] flex flex-col justify-center py-10 lg:py-20">
      <div className="container mx-auto px-8 md:px-20">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DKct8bNtXcs/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px auto", // 👈 belangrijk: center via auto
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "100%", // of calc(100% - 2px) als je dat wilt behouden
          }}
        ></blockquote>
      </div>
    </section>
  )
}

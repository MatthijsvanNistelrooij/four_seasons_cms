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
      <div className="container mx-auto px-8 md:px-20 h-full">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/CxRKLqINN5H/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "white",
            maxWidth: "658px",
            width: "calc(100% - 2px)",
            borderRadius: "3px",
            border: "1px solid rgb(219, 219, 219)",
            boxShadow: "none",
            display: "block",
            margin: "0px 0px 12px",
            minWidth: "326px",
            padding: "0px",
          }}
        ></blockquote>

        {/* <iframe
          className="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src="https://www.instagram.com/p/DI6rnNKAjzJ/embed/captioned/?cr=1&amp;v=14&amp;wp=658&amp;rd=https%3A%2F%2Fchicago.suntimes.com&amp;rp=%2Fnews%2F2025%2F07%2F03%2Fwho-is-mello-buckzz-chicago-rapper-mass-shooting-river-north#%7B%22ci%22%3A0%2C%22os%22%3A1160.5999999642372%7D"

          height="1115"
          data-instgrm-payload-id="instagram-media-payload-0"
          scrolling="no"
          style={{
            background: "white",
            maxWidth: "658px",
            width: "calc(100% - 2px)",
            borderRadius: "3px",
            border: "1px solid rgb(219, 219, 219)",
            boxShadow: "none",
            display: "block",
            margin: "0px 0px 12px",
            minWidth: "326px",
            padding: "0px",
          }}
        ></iframe> */}
      </div>
    </section>
  )
}

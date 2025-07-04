export default function InstagramEmbed() {
  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.setAttribute("src", "//www.instagram.com/embed.js")
  //   script.setAttribute("async", "")
  //   document.body.appendChild(script)
  // }, [])

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
      </div>
    </section>
  )
}

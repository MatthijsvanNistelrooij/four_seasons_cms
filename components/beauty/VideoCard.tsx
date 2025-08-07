import React from "react"
import OpeningHours from "../shared/OpeningHours"
import video_3 from "../../videos/video_3.mp4"
import Video from "next-video"

const VideoCard = () => {
  return (
    <div className="bg-[#e9207e] text-white space-y-5 pb-20 w-full rounded-xl flex flex-col text-center justify-center gap-10">
      <div className="p-1">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Video
            muted
            autoPlay
            loop
            playsInline
            src={video_3}
            className="object-cover shadow-xl"
          />
        </div>
      </div>

      <h3
        className="font-semibold text-xl md:text-2xl mb-5 text-white"
        style={{ fontFamily: "var(--font-roboto-slab)" }}
      >
        Openingstijden & contact
      </h3>
      <OpeningHours text="white" center={true} />
    </div>
  )
}

export default VideoCard

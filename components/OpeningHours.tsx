import React from "react"

type OpeningHoursProps = {
  text?: string
}

const OpeningHours: React.FC<OpeningHoursProps> = () => {
  return (
    <div>
      <div style={{ fontFamily: "sans-serif" }}>
        <ul className="space-y-1">
          <li>
            <span className="font-bold"> Ma:</span> 12:00 – 18:00
          </li>
          <li>
            <span className="font-bold">Di:</span> 10:00 – 19:00
          </li>
          <li>
            <span className="font-bold">Wo:</span> 10:00 – 19:00
          </li>
          <li>
            <span className="font-bold">Do:</span> 10:00 – 20:00
          </li>
          <li>
            <span className="font-bold">Vr:</span> 10:00 – 19:00
          </li>
          <li>
            <span className="font-bold">Za:</span> 10:00 – 18:00
          </li>
          <li>
            <span className="font-bold">Zo: </span>Gesloten
          </li>
          <li className="mt-4">
            Tel:{" "}
            <a href="tel:0630717774" className="underline">
              06 307 17774
            </a>
          </li>
          <li>
            <a href="mailto:nl.butterfly@hotmail.com" className="underline">
              nl.butterfly@hotmail.com
            </a>
          </li>
          <li>
            <a href="mailto:nl.fourseasons@gmail.com" className="underline">
              nl.fourseasons@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OpeningHours

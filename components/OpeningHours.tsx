import React from "react"

type OpeningHoursProps = {
  text?: string
}

const OpeningHours: React.FC<OpeningHoursProps> = ({ text }) => {
  const colorClass = text ?? "text-[#e9207e]"

  return (
    <div>
      <div style={{ fontFamily: "sans-serif" }}>
        <h3 className={`font-semibold mb-4 ${colorClass} `}>
          Openingstijden & contact
        </h3>
        <ul className="space-y-1">
          <li>Ma: 12:00 – 18:00</li>
          <li>Di: 10:00 – 19:00</li>
          <li>Wo: 10:00 – 19:00</li>
          <li>Do: 10:00 – 20:00</li>
          <li>Vr: 10:00 – 19:00</li>
          <li>Za: 10:00 – 18:00</li>
          <li>Zo: Gesloten</li>
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

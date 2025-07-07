import { Mail, Phone } from "lucide-react"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"

type OpeningHoursProps = {
  text?: string
  center?: boolean
}

const OpeningHours = ({ center }: OpeningHoursProps) => {
  return (
    <div className="font-sans text-sm leading-relaxed">
      <ul className="space-y-1">
        <li className="text-lg font-bold mt-4">Openingstijden</li>
        <li>
          <span className="font-semibold">Ma:</span> 12:00 – 18:00
        </li>
        <li>
          <span className="font-semibold">Di:</span> 10:00 – 19:00
        </li>
        <li>
          <span className="font-semibold">Wo:</span> 10:00 – 19:00
        </li>
        <li>
          <span className="font-semibold">Do:</span> 10:00 – 20:00
        </li>
        <li>
          <span className="font-semibold">Vr:</span> 10:00 – 19:00
        </li>
        <li>
          <span className="font-semibold">Za:</span> 10:00 – 18:00
        </li>
        <li>
          <span className="font-semibold">Zo:</span> Gesloten
        </li>

        <li className="text-lg font-bold mt-8">Kapper</li>
        <li>
          <a
            href="tel:+31630717774"
            className={`hover:underline flex text-center gap-1 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <Phone size={16} className="relative top-[1px]" />
            +31 6 307 17774
          </a>
        </li>
        <li>
          <a
            href="mailto:nl.fourseasons@gmail.com"
            className={`hover:underline flex text-center gap-2 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <Mail size={16} className="relative top-[4px]" />
            nl.fourseasons@gmail.com
          </a>
        </li>

        <li className="text-lg font-bold mt-8">Cosmetologie (Olga)</li>
        <li>
          <a
            href="tel:+31638565652"
            className={`hover:underline flex text-center gap-1 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <Phone size={16} className="relative top-[1px]" /> +31 6 385 65652
          </a>
        </li>
        <li>
          <a
            href="tel:+380679702181"
            className={`hover:underline flex text-center gap-1 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <FaWhatsapp size={16} className="relative top-[1px]" /> +380 67 970 2181
            (WhatsApp)
          </a>
        </li>
        <li>
          <a
            href="mailto:olgamarykey@ukr.net"
            className={`hover:underline flex text-center gap-2 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <Mail size={16} className="relative top-[4px]" />
            olgamarykey@ukr.net
          </a>
        </li>
        <li>
          <a
            href="mailto:nl.butterfly@hotmail.com"
            className={`hover:underline flex text-center gap-2 ${
              center ? "justify-center" : "justify-start"
            } `}
          >
            <Mail size={16} className="relative top-[4px]" />
            nl.butterfly@hotmail.com
          </a>
        </li>
      </ul>
    </div>
  )
}

export default OpeningHours

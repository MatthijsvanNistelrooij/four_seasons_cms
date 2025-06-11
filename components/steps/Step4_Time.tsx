import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { format, setHours, setMinutes } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  time: string
  onTimeChange: (value: string) => void
  onNext: () => void
  onBack: () => void
}

export const Step4_Time = ({ time, onTimeChange, onNext, onBack }: Props) => {
  const [error, setError] = useState("")
  const [showTopShadow, setShowTopShadow] = useState(false)
  const [showBottomShadow, setShowBottomShadow] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2)
    const minute = (i % 2) * 30
    return format(setMinutes(setHours(new Date(), hour), minute), "HH:mm")
  })

  const handleNext = () => {
    if (!time) {
      setError("Kies een tijdslot om verder te gaan.")
      return
    }
    setError("")
    onNext()
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    setShowTopShadow(scrollTop > 0)
    setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 1)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <div>
      <h3 className="m-2 text-sm font-light">Voorkeurstijd</h3>
      <div className="relative rounded-xl overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-col border border-gray-200 max-h-96 overflow-y-auto bg-white text-sm font-semibold rounded-xl"
        >
          {timeSlots.map((slot) => (
            <div
              key={slot}
              className={`w-full border-b px-4 py-3 cursor-pointer transition ${
                time === slot ? "bg-[#e9207e] text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => onTimeChange(slot)}
            >
              {slot}
            </div>
          ))}
        </div>

        {/* Shadows */}
        {showTopShadow && (
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-300 to-transparent pointer-events-none" />
        )}
        {showBottomShadow && (
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent pointer-events-none" />
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="mt-6 flex justify-between">
        <Button
          variant="secondary"
          onClick={onBack}
          className="bg-white border hover:bg-gray-200 hover:border-gray-300 rounded cursor-pointer"
        >
          <ChevronLeft />
          Terug
        </Button>
        <Button
          onClick={handleNext}
          disabled={!time}
          className="hover:bg-pink-600 bg-[#e9207e] text-white rounded cursor-pointer"
        >
          Volgende
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

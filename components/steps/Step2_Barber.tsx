import { Button } from "@/components/ui/button"
import { RadioGroup } from "@/components/ui/radio-group"
import { useState } from "react"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import petros from "../../public/assets/petros.png"
import avatar from "../../public/assets/avatar.png"
import olga from "../../public/assets/olga.png"

type Props = {
  value: string
  onChange: (value: string) => void
  onNext: () => void
  onBack: () => void
  category: string
}

const barberOptions = [
  { name: "Geen voorkeur", img: avatar },
  { name: "Botros", img: petros, categories: ["knippen"] },
  { name: "Olga", img: olga, categories: ["manicure", "huidverzorging"] },
]

export const Step2_Barber = ({
  value,
  onChange,
  onNext,
  onBack,
  category,
}: Props) => {
  const [error, setError] = useState("")

  const filteredBarbers = barberOptions.filter((barber) => {
    // Always show "Geen voorkeur"
    if (barber.name === "Geen voorkeur") return true

    // Check if category contains "knippen" (case-insensitive)
    const isKnippen = category.toLowerCase().includes("knippen")

    // If category includes knippen, show barbers with "knippen" in categories
    if (isKnippen) {
      return barber.categories?.includes("knippen")
    } else {
      // Otherwise, show barbers without "knippen" category (like Olga)
      return barber.categories && !barber.categories.includes("knippen")
    }
  })
  console.log(category)
  const handleNext = () => {
    if (!value) {
      setError("Selecteer een barbier om verder te gaan.")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div className="">
      <div>
        <h2 className="text-sm mb-3 text-neutral-900">
          Heeft u een voorkeur voor een medewerker?
        </h2>

        <RadioGroup
          value={value}
          onValueChange={onChange}
          className="flex flex-col overflow-y-auto bg-gray-50 min-h-96 gap-0 text-sm font-bold border border-gray-200"
        >
          {filteredBarbers.map((barber) => (
            <div
              key={barber.name}
              className={clsx(
                "w-full border-b border-gray-200 px-4 py-2 flex items-center justify-start text-sm font-medium cursor-pointer transition",
                value === barber.name
                  ? "bg-[#e9207e] text-white border-pink-100"
                  : "hover:bg-pink-50"
              )}
              onClick={() => onChange(barber.name)}
            >
              <div className="bg-gray-200 rounded mr-4">
                <Image
                  className="rounded-xl"
                  src={barber.img}
                  width={80}
                  height={80}
                  alt="barber"
                />
              </div>
              <span className="mb-5">{barber.name}</span>
            </div>
          ))}
        </RadioGroup>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="flex justify-between mt-6">
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
          disabled={!value}
          className="hover:bg-pink-600 bg-[#e9207e] text-white rounded cursor-pointer"
        >
          Volgende
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

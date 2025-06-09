import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronLeft, Loader2 } from "lucide-react"

type FormDataType = {
  service: string
  barber: string
  date: Date
  time: string
  name: string
  email: string
  phone: string
}

interface Props {
  data: FormDataType
  onBack: () => void
  onSubmit: () => Promise<void> // make sure the parent function returns a Promise
}

export const Step6_Confirm = ({ data, onBack, onSubmit }: Props) => {
  const { service, barber, date, time, email, phone, name } = data
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await onSubmit()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm mb-3 text-neutral-900">Bevestig uw afspraak</h2>

        <div className="rounded bg-white p-4 space-y-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 text-base text-neutral-800">
            <div>
              <dt className="text-sm text-neutral-500">
                Type afspraak
              </dt>
              <dd className="font-medium">{service || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">
                Medewerker
              </dt>
              <dd className="font-medium">{barber || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">
                Datum & tijd
              </dt>
              <dd className="font-medium">
                {date ? date.toLocaleDateString("nl-NL") : "-"} {time || "-"}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">Naam</dt>
              <dd className=" font-medium">{name || "-"}</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500">E-mail</dt>
              <dd className="font-medium">{email || "-"}</dd>

              <dt className="text-sm text-neutral-500 mt-4">
                Telefoonnummer
              </dt>
              <dd className="font-medium mb-1">{phone || "-"}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={onBack}
          className="bg-white border hover:bg-gray-100 rounded"
        >
          <ChevronLeft className="mr-1" />
          Wijzigen
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="hover:bg-pink-600 bg-[#e9207e] text-white rounded cursor-pointer"
        >
          Verzenden
          {isSubmitting ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            <Check className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}

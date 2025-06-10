import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Appointment } from "@/types"
import { useEffect, useState } from "react"

export const EditAppointmentDialog = ({
  appointment,
  isOpen,
  onClose,
  onSave,
}: {
  appointment: Appointment | null
  isOpen: boolean
  onClose: () => void
  onSave: (updated: Appointment) => void
}) => {
  const [formData, setFormData] = useState<Appointment | null>(appointment)

  useEffect(() => {
    setFormData(appointment)
  }, [appointment])

  useEffect(() => {
    if (appointment) {
      const formattedDate = appointment.date.split("T")[0]
      setFormData({ ...appointment, date: formattedDate })
    }
  }, [appointment])

  if (!formData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Afspraak bewerken</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSave(formData)
            onClose()
          }}
          className="flex flex-col gap-4 mt-2"
        >
          <input
            className="border p-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          />
          <input
            className="border p-2 rounded"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
          <Button
            type="submit"
            className="cursor-pointer bg-pink-600 hover:bg-pink-500"
          >
            Opslaan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

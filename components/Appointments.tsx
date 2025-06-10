"use client"
import {
  deleteAppointment,
  getAllAppointments,
  updateAppointment,
} from "@/appwrite"
import { Appointment } from "@/types"
import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SignOutButton from "./SignOutButton"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"
import { EditAppointmentDialog } from "./EditAppointmentDialog"
import { DeleteAppointmentDialog } from "./DeleteAppointmentDialog"
import Pagination from "./Pagination"

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [filter, setFilter] = useState<string | null>(null)

  const [editingAppointment, setEditingAppointment] =
    useState<Appointment | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [deletingAppointment, setDeletingAppointment] =
    useState<Appointment | null>(null)

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const allAppointmentsRaw = await getAllAppointments()
        const allAppointments: Appointment[] = allAppointmentsRaw.map(
          (item) => ({
            $id: item.$id,
            $createdAt: item.$createdAt,
            $updatedAt: item.$updatedAt,
            name: item.name,
            service: item.service,
            date: item.date,
            email: item.email,
            phone: item.phone,
            time: item.time,
            barber: item.barber,
          })
        )
        setAppointments(allAppointments)
      } catch (err) {
        console.error(err)
      }
    }
    fetchAppointments()
  }, [])

  const filteredAppointments = filter
    ? appointments.filter((a) => a.barber === filter)
    : appointments

  const uniqueBarbers = Array.from(new Set(appointments.map((a) => a.barber)))

  const handleDelete = async () => {
    if (!deletingAppointment) return
    try {
      await deleteAppointment(deletingAppointment.$id)
      setAppointments((prev) =>
        prev.filter((a) => a.$id !== deletingAppointment.$id)
      )
      setDeletingAppointment(null)
      setIsDeleteDialogOpen(false)
    } catch (err) {
      console.error("Failed to delete", err)
    }
  }

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <aside className="w-full lg:w-48 bg-gray-100 p-4 border-b lg:border-b-0 lg:border-r sticky top-0 z-10">
        <div className="flex items-center gap-4 ml-2">
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Afsprakenoverzicht</h2>

        <div className="flex gap-2 mb-4 flex-wrap">
          <Button
            className={`border bg-white text-gray-400 hover:text-gray-800 cursor-pointer hover:bg-white ${
              filter === null ? "border border-gray-200 text-gray-800" : ""
            }`}
            size={"sm"}
            variant={filter === null ? "outline" : "default"}
            onClick={() => setFilter(null)}
          >
            Alle
          </Button>
          {uniqueBarbers
            .filter((barber) => barber?.trim() !== "")
            .map((barber) => (
              <Button
                className={`border bg-white text-gray-400 hover:text-gray-800 cursor-pointer hover:bg-white ${
                  filter === barber
                    ? "border border-gray-200 text-gray-800 "
                    : ""
                }`}
                key={barber}
                size={"sm"}
                variant={filter === barber ? "outline" : "default"}
                onClick={() => setFilter(barber)}
              >
                {barber}
              </Button>
            ))}
        </div>
        <div className="border rounded overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead>Tijd</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefoon</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedAppointments.map((appt) => (
                <TableRow key={appt.$id}>
                  <TableCell>{appt.name}</TableCell>
                  <TableCell>{appt.service}</TableCell>
                  <TableCell>
                    {new Date(appt.date).toLocaleDateString("nl-NL")}
                  </TableCell>
                  <TableCell>{appt.time}</TableCell>
                  <TableCell>{appt.email}</TableCell>
                  <TableCell>{appt.phone}</TableCell>
                  <TableCell className="flex justify-end">
                    <Button
                      onClick={() => {
                        setEditingAppointment(appt)
                        setIsDialogOpen(true)
                      }}
                      size={"sm"}
                      className="p-0 bg-transparent text-gray-800 hover:bg-white cursor-pointer m-0"
                    >
                      <Edit size={12} />
                    </Button>
                    <Button
                      size={"sm"}
                      className="p-0 bg-transparent text-red-500 hover:bg-white cursor-pointer m-0"
                      onClick={() => {
                        setDeletingAppointment(appt)
                        setIsDeleteDialogOpen(true)
                      }}
                    >
                      <Trash size={12} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {filteredAppointments.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={filteredAppointments.length <= itemsPerPage}
          />
        )}
      </main>
      <EditAppointmentDialog
        appointment={editingAppointment}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={async (updatedAppointment) => {
          try {
            await updateAppointment(updatedAppointment.$id, updatedAppointment)
            setAppointments((prev) =>
              prev.map((a) =>
                a.$id === updatedAppointment.$id ? updatedAppointment : a
              )
            )
          } catch (err) {
            console.error("Failed to update", err)
          }
        }}
      />
      <DeleteAppointmentDialog
        appointment={deletingAppointment}
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Appointments

import React from "react"

import { Appointment } from "@/types"
import { Client, Databases } from "appwrite"
import { appwriteConfig } from "@/appwrite/config"
import Appointments from "@/components/Appointments"

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

const databases = new Databases(client)

async function getAllAppointments(): Promise<Appointment[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const documents = response.documents as any[]

    return documents.map((item) => ({
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
    }))
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return []
  }
}

const AppointmentsPage = async () => {
  const appointmentsRaw = await getAllAppointments()

  const appointments: Appointment[] = appointmentsRaw.map((item) => ({
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
  }))

  return <Appointments initialAppointments={appointments} />
}

export default AppointmentsPage

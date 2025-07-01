import { NextRequest, NextResponse } from "next/server"
import { Client, Databases } from "appwrite"
import { appwriteConfig } from "@/appwrite/config"

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

const databases = new Databases(client)

const databaseId = appwriteConfig.databaseId
const collectionId = appwriteConfig.appointmentsCollectionId

export async function GET(request: NextRequest) {
  console.log(request)
  try {
    const response = await databases.listDocuments(databaseId, collectionId)
    return NextResponse.json(response.documents, { status: 200 })
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    )
  }
}

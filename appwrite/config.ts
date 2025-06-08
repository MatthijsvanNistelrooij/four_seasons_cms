export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,

  appointmentsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_APPOINTMENTS!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS!,
}

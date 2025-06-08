"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/sign-in") // redirect if no user
      } else if (user.emailVerification === false) {
        router.replace("/pending-approval") // redirect if email not verified
      }
    }
  }, [loading, user, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    )
  }

  if (!user || user.emailVerification === false) {
    return null
  }

  return <>{children}</>
}

export default ProtectedLayout

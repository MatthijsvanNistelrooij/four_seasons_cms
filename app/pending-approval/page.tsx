"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import SignOutButton from "@/components/SignOutButton"

export default function PendingApproval() {
  const router = useRouter()

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user.email_confirmed_at) router.replace("/appointments")
    })
    return () => listener.subscription.unsubscribe()
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-yellow-50">
      <h1 className="text-3xl font-bold mb-4 text-yellow-800">
        Awaiting Admin Approval
      </h1>
      <p className="mb-5">
        Check your inbox and confirm your email address. You can then sign in
        to access the appointment overview.
      </p>

      <SignOutButton />
    </div>
  )
}

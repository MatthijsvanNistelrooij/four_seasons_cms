"use client"

import { supabase } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

// Define context value type
type ContextType = {
  user: User | null
  loading: boolean
  setUser: React.Dispatch<
    React.SetStateAction<User | null>
  >
}

const AuthContext = createContext<ContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }

    checkUser()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

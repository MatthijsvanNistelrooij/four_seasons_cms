import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

const Swipe = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 text-sm">
      <ChevronLeft className="w-4 h-4" />
      Swipe to explore
      <ChevronRight className="w-4 h-4" />
    </div>
  )
}

export default Swipe

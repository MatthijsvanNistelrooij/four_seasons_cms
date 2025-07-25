import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

type SwipeProps = {
  slideLeft: () => void
  slideRight: () => void
}

const Swipe = ({ slideLeft, slideRight }: SwipeProps) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 text-sm select-none">
      <ChevronLeft className="w-4 h-4 cursor-pointer" onClick={slideLeft} />
      Swipe to explore
      <ChevronRight className="w-4 h-4 cursor-pointer" onClick={slideRight} />
    </div>
  )
}

export default Swipe

import React from "react"
import Image from "next/image";

const Maintenance = () => {
  return (
    <main className="root flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Image src="/images/construction.png" alt="Maintenance" width={800} height={800} />
      </div>
    </main>
  )
}

export default Maintenance

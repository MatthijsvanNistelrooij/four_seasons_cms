import React from "react"

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full space-x-1 bg-gray-100 rounded-lg p-3 w-full">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded w-2"
          style={{
            height: "12px",
            animation: `bounce 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            background-color: #e9208a;
          }
          50% {
            transform: translateY(-8px);
            background-color: #e9207e; 
          }
        }
      `}</style>
    </div>
  )
}

export default Loading

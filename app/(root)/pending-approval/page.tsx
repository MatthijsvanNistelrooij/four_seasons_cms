export default function PendingApproval() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-yellow-50">
      <h1 className="text-3xl font-bold mb-4 text-yellow-800">
        Awaiting Admin Approval
      </h1>
      <p>
        Your email is not yet verified. An administrator will approve your request shortly.
      </p>
    </div>
  )
}

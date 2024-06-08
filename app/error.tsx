'use client' 
 

 
export default function Error({

  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

 
  return (
    <div className='min-h-screen w-full items-center justify-center'>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
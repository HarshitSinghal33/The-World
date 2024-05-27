type ErrorMessage = { error: string }
export default function Error({ error }: ErrorMessage) {
  return (
    <div className='font-bold text-2xl flex justify-center items-center h-screen'>An error occurred: {error}</div>
  )
}
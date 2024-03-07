import React from 'react'

export default function Error({error}) {
  return (
    <div className='font-bold text-2xl flex justify-center items-center h-screen'>An error occurred: {error} Contact to developer</div>
  )
}

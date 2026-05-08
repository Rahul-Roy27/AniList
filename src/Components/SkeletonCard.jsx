import React from 'react'

const SkeletonCard = () => {
  return (

    <div className='w-[220px] border rounded-lg p-3 animate-pulse'>

      <div className='w-full h-[300px] bg-gray-700 rounded-md'>
      </div>

      <div className='h-5 bg-gray-700 rounded mt-3'>
      </div>

      <div className='h-4 bg-gray-700 rounded mt-2 w-1/2'>
      </div>

      <div className='h-4 bg-gray-700 rounded mt-2 w-1/3'>
      </div>

    </div>

  )
}

export default SkeletonCard
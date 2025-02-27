import React, { ReactNode } from 'react'

function Tag( {children} : {children: ReactNode}) {
  return (
    <div className=''>
      <div className="inline-flex py-1 text-xs md:text-sm md:px-4 px-2 bg-gradient-to-t from-appRed to-pink-600 rounded-full text-neutral-50 font-semibold capitalize">

        {children}
      </div>
    </div>
  )
}

export default Tag


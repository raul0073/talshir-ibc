import React, { ReactNode } from 'react'

function Tag( {children} : {children: ReactNode}) {
  return (
    <div className='w-fit flex justify-center bg-appRed py-1 px-2 text-white uppercase text-base'>
        {children}
    </div>
  )
}

export default Tag
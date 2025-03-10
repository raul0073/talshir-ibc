import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { IconBoxModel } from '@tabler/icons-react'

function ProductPageSkeleton() {
  return (
    <div className='w-full sm:w-3/4 mx-auto h-[50vh] p-6'>
        <div className='grid w-full grid-cols-1 sm:grid-cols-3 sm:gap-12'>
            <div className='space-y-4 w-full'>
        <Skeleton className='h-24 w-full'></Skeleton>
        <Skeleton className='h-20 w-full'></Skeleton>
        <Skeleton className='h-44 w-full'></Skeleton>
        <Skeleton className='h-12 w-full'></Skeleton>
        </div>
        <div className='col-span-2 space-y-4 w-full gap-12'>
            <Skeleton className='w-full h-44 flex justify-center items-center'>
                <IconBoxModel className='animate-spin duration-700 ease-in-out ' /> <br />
                <span className='text-gray-500 uppercase mx-1'>loading model</span>
            </Skeleton>
            <Skeleton className='w-full h-1/4'></Skeleton>
            <Skeleton className='w-full h-1/4'></Skeleton>
            </div>
        </div>
       
    </div>
  )
}

export default ProductPageSkeleton
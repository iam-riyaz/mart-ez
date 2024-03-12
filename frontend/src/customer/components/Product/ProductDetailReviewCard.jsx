import { Avatar, Rating } from '@mui/material'
import React from 'react'

function ProductDetailReviewCard() {
  return (
    <div>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1' >
             <Avatar sx={{bgcolor:"violet"}}>RA</Avatar>
            </div>
            <div className='col-span-6'>
                <p className='font-semibold'>User name</p>
                <p className='text-gray-500'>date and time</p>
                <Rating value={4.5} precision={0.5}/>
                <p>this is the main content of review</p>

            </div>
            


        </div>
    </div>
  )
}

export default ProductDetailReviewCard
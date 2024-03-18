import { LinearProgress, Rating } from '@mui/material'
import React from 'react'

export const ProductDetailRatingCard = () => {
  return (
    <div>
        <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>

<div className="flex space-x-2">
 <Rating  value={3.5} precision={0.5} readOnly/>
 <p className="opacity-40">2898 Ratings</p>

 

</div>
<div className="grid grid-cols-12 gap-2 b items-center mt-5">

  <div className="col-span-2">
    Excellent
  </div>
  <div className="col-span-10">
  <LinearProgress variant="determinate" value={90} color="success" sx={{height:6 , bgcolor:"lightgrey", borderRadius:"5px"}}/>
  </div>
  <div className="col-span-2">
    Very Good
  </div>
  <div className="col-span-10">
  <LinearProgress variant="determinate" value={80} color="primary" sx={{height:6 , bgcolor:"lightgrey", borderRadius:"5px"}}/>
  </div>
  <div className="col-span-2">
    Good
  </div>
  <div className="col-span-10">
  <LinearProgress variant="determinate" value={60} color="secondary" sx={{height:6 , bgcolor:"lightgrey", borderRadius:"5px"}}/>
  </div>
  <div className="col-span-2">
    Avarage
  </div>
  <div className="col-span-10">
  <LinearProgress variant="determinate" value={40} color="warning" sx={{height:6 , bgcolor:"lightgrey", borderRadius:"5px"}}/>
  </div>
  <div className="col-span-2">
    Poor
  </div>
  <div className="col-span-10">
  <LinearProgress variant="determinate" value={20} color="error" sx={{height:6 , bgcolor:"lightgrey", borderRadius:"5px"}}/>
  </div>

 </div>
    </div>
  )
}

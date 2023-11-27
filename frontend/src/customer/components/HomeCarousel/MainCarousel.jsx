import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import {  mainCarouselData } from './mainCarouselData';




export const MainCarousel = () => {

    const navigate= useNavigate()
    const items= mainCarouselData.map((e)=>(<img src={e.image} onClick={()=>navigate(e.path)} className='cursor-pointer' role='presentation' alt='img'/>))

   return (<AliceCarousel
    animationType="fadeout" 
    animationDuration={1200}
        mouseTracking
        items={items}
       disableButtonsControls
       autoPlay
       
       infinite
        controlsStrategy="alternate"
    />)
   }
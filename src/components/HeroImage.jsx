import React from 'react'
import Photo from '../assets/photo-5.jpg'

const HeroImage = () => {
  return (
      <div className='w-full '>
          <div className='w-full h-full '>
              <img className='object-cover w-screen h-screen' src={Photo} alt="/" />
          </div>
          <div className='absolute w-full top-[40%]  text-center'>
              <h1 className='text-5xl md:text-7xl font-bold pb-6 uppercase'>Pricing</h1>
              <p className='text-xl md:text-3xl'>Choose your trip.</p>
          </div>
    </div>
  )
}

export default HeroImage
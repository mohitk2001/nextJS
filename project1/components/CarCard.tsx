"use client"
import React from 'react'
import { useState } from 'react'
import { CarProps } from '@/types'
// import CustomButton from './CustomButton'
import {CustomButton} from "../components/index"
import Image from 'next/image'
interface CarCardProps{
    car:CarProps
}
const CarCard = ({car}: CarCardProps) => {
    const [IsOpen,setIsOpen]=useState(false);
    const {city_mpg,year,make,model,transmission,drive}=car
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make}{model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                Car Rent...
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src="/hero.png" alt="car model" fill priority className="object-contain"/>
        </div>
        <div className='car-card__btn-container'>
            <CustomButton
            title='View more'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={()=>setIsOpen(true)}            
            />
        </div>
    </div>
  )
}

export default CarCard
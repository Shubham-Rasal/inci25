'use client'

import { useState } from 'react'
import Link from 'next/link'

const BrochureButton = ({ text, href = "#" }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link 
      href={href}
      className="relative group flex items-center w-full max-w-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 flex">
          <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat blur-[8px] brightness-150" />
          <div className="flex-grow h-full border-y-2 border-[#D4A41B] bg-[#1E0E03] blur-[8px] brightness-150" />
          <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat blur-[8px] brightness-150" />
        </div>
      </div>

      <div className="relative w-full">
        {/* Outer border with pointed edges */}
        <div className="absolute inset-0 flex">
          <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat" />
          <div className="flex-grow h-full border-y-2 border-[#D4A41B] bg-[#1E0E03]" />
          <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat" />
        </div>
        
        {/* Inner border */}
        <div className="absolute inset-[8px] flex">
          <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat opacity-90" />
          <div className={`flex-grow h-full border-y-2 border-[#DBAE3D] transition-colors duration-300 ${isHovered ? 'bg-[#432914]' : 'bg-[#321E09]'}`} />
          <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat opacity-90" />
        </div>
        
        {/* Content */}
        <div className="relative flex justify-center items-center text-center text-4xl text-[#D4A41B] w-full px-8 py-4">
          {text}
        </div>
      </div>
    </Link>
  )
}

export default function Brochures() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-[#1E0E03] overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4A41B] opacity-[0.15] blur-[100px]" />
      
      <div className="relative z-10">
        <h1 className="text-center text-white text-4xl mb-4 uppercase">brochures</h1>
        
        <div className="max-w-4xl text-center mb-16 text-white px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>

        <div className="flex flex-col gap-6 w-full items-center">
          <BrochureButton text="PRE-INCI BROCHURE" />
          <BrochureButton text="MARKETING BROCHURE" />
          <BrochureButton text="EVENT BROCHURE" />
        </div>
      </div>
    </div>
  )
}
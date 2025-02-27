'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BrochureButton = ({ text, href, previewImage }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex flex-col items-center">
      <a
        href={href}
        download
        className="relative group flex items-center w-full max-w-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex">
            <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat blur-[8px] brightness-150" />
            <div className="flex-grow h-full border-y-2 border-[#D4A41B] bg-[#1E0E03] blur-[8px] brightness-150" />
            <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat blur-[8px] brightness-150" />
          </div>
        </div>

        <div className="relative w-full">

          <div className="absolute inset-0 flex">
            <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat" />
            <div className="flex-grow h-full border-y-2 border-[#D4A41B] bg-[#1E0E03]" />
            <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat" />
          </div>

          <div className="absolute inset-[8px] flex">
            <div className="w-[20px] h-full bg-[url('/left-point.svg')] bg-contain bg-left bg-no-repeat opacity-90" />
            <div className={`flex-grow h-full border-y-2 border-[#DBAE3D] transition-colors duration-300 ${isHovered ? 'bg-[#432914]' : 'bg-[#321E09]'}`} />
            <div className="w-[20px] h-full bg-[url('/right-point.svg')] bg-contain bg-right bg-no-repeat opacity-90" />
          </div>

          <div className="relative flex justify-center items-center text-center text-4xl text-[#D4A41B] w-full px-8 py-4 transition-all duration-300 transform hover:scale-105">
            {text}
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Brochures() {
  return (
    <div id="brochure" className="relative flex flex-col items-center justify-center py-20 px-4 bg-[#1E0E03] overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4A41B] opacity-[0.10] blur-[150px] animate-pulse duration-1000" />

      <div className="relative z-10">
        <h1 className="text-center text-white text-5xl font-bold mb-6 uppercase tracking-widest">Brochure</h1>

        <div className="max-w-4xl text-xl text-center mb-16 text-white px-4">
          <p>Download the brochures to explore more details about the event.</p>
        </div>

        <div className="flex flex-col gap-8 w-full items-center">
          <BrochureButton text="EVENT BROCHURE" href="/inci_brochure.pdf" previewImage="/brochure-preview.png" />
        </div>
      </div>
    </div>
  )
}

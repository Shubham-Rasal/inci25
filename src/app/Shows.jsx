"use client"

import { useState } from "react"

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export default function Shows() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const items = [
    { id: 1, day: "DAY-1" },
    { id: 2, day: "DAY-2" },
    { id: 3, day: "DAY-3" },
    {id:4, day:"DAY-4"},
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
       
      <div className="relative w-full max-w-7xl px-1 md:px-4">
        {/* Carousel Content */}
        <div className="relative flex justify-center items-center gap-4 md:gap-2">
          {items.map((item, index) => {
            const isCenter = index === currentIndex
            const isPrev = index === (currentIndex - 1 + items.length) % items.length
            const isNext = index === (currentIndex + 1) % items.length

            return (
              <div
                key={item.id}
                className={cn(
                  "transition-all duration-500 absolute transform",
                  isCenter && "z-20 scale-100 opacity-100",
                  isPrev && "z-10 -translate-x-[calc(100%+1rem)] scale-90 opacity-50 cursor-pointer hover:opacity-100",
                  isNext && "z-10 translate-x-[calc(100%+1rem)] scale-90 opacity-50 cursor-pointer hover:opacity-100",
                  !isCenter && !isPrev && !isNext && "opacity-0",
                )}
                onClick={isPrev ? prevSlide : isNext ? nextSlide : undefined}
              >
                <div className="relative size-[400px] mx-auto">
                  <img src="/event.png" alt="Event" className="object-contain w-full h-full" />
                </div>
              </div>
            )
          })}
        </div>
        {/* Carousel Arrows */}
        <div className="absolute inset-0 top-64  flex bg-white items-center justify-between">
          <button
            type="button"
            className=" rounded-full p-4 shadow-lg "
            onClick={prevSlide}
          >
            <img src="/ra.svg" alt="Arrow" className="object-contain w-full h-full z-30" />   
          </button>
          <button
            type="button"
            className=" rounded-full p-4 shadow-lg"
            onClick={nextSlide}
          >
            <img src="/la.svg" alt="Arrow" className="object-contain w-full h-full" />
          </button>
        </div>
      </div>

    </div>
  )
}

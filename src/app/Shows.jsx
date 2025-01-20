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
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#2b1810]">
      <div className="relative w-full max-w-5xl px-20">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#c4a062]"
          aria-label="Previous slide"
        >
         left
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#c4a062]"
          aria-label="Next slide"
        >
          right
        </button>

        {/* Carousel Content */}
        <div className="relative flex justify-center items-center gap-4">
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
                  isPrev && "z-10 -translate-x-[calc(100%+1rem)] scale-90 opacity-50",
                  isNext && "z-10 translate-x-[calc(100%+1rem)] scale-90 opacity-50",
                  !isCenter && !isPrev && !isNext && "opacity-0",
                )}
              >
                {/* Day Indicator */}
                <div className="mb-4 flex justify-center">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vF76jwIyq9DxbPZLRrQ1BsvkiM5gsS.png')] bg-contain bg-no-repeat bg-center opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#c4a062] font-semibold">{item.day}</span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="relative w-80 h-96">
                  <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vF76jwIyq9DxbPZLRrQ1BsvkiM5gsS.png')] bg-contain bg-no-repeat bg-center" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#c4a062] font-semibold">{item.day}</span>
                  </div>
                </div>
            
                  <div className="absolute inset-0 bg-white rounded-lg" />

                  {/* Decorative corners */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#c4a062] rotate-45" />
                  <div className="absolute -bottom-4 right-1/2 translate-x-1/2 w-8 h-8 bg-[#c4a062] -rotate-45" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


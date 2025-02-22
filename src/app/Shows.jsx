"use client"

import { useState } from "react"
import { Carousel } from "./Carousel" // Import the new Carousel component

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function Shows() {
  const slides = [
    { title: "Event 1", button: "Learn More", src: "/event1.png" },
    { title: "Event 2", button: "Learn More", src: "/event2.png" },
    { title: "Event 3", button: "Learn More", src: "/event3.png" },
    { title: "Event 4", button: "Learn More", src: "/event4.png" },
  ]

  return (
    <div className="relative mt-16  flex items-center justify-center ">
      <div className="relative w-full h-screen max-w-7xl  px-1 md:px-4">
        {/* Use the new Carousel component */}
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

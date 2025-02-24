"use client"

import { useState } from "react"
import { Carousel } from "./Carousel" 

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export default function Shows() {
  const slides = [
    { title: "Event 1", button: "Learn More", src: "/Group 90.png" },
    { title: "Event 2", button: "Learn More", src: "/Group 100.png" },
    { title: "Event 3", button: "Learn More", src: "/Group 101.png" },
    { title: "Event 4", button: "Learn More", src: "/Group 102.png" },
  ]

  return (
    <div id="proShows" className="relative mt-16  flex items-center justify-center ">
      <div className="relative w-full h-screen max-w-7xl  px-1 md:px-4">
        {/* Use the new Carousel component */}
        <Carousel slides={slides} />
      </div>
    </div>
  )
}

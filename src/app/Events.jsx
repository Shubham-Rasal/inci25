"use client"

import { useEffect, useRef } from "react"



export default function Events() {
  const containerRef = useRef(null)/* "use client"

  import { useEffect, useRef } from "react"
  import Image from "next/image"
  
  interface TimelineEvent {
    id: number
    name: string
  }
  
  export default function ScrollTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const events: TimelineEvent[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: "EVENT NAME",
    }))
  
    useEffect(() => {
      const container = containerRef.current
      if (!container) return
  
      const handleScroll = () => {
        const scrolled = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const horizontalMax = container.scrollWidth - container.clientWidth
        const horizontalScroll = (scrolled / maxScroll) * horizontalMax
        container.scrollLeft = horizontalScroll
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    return (
      <div className="relative w-full bg-[#1a0f02] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center font-serif text-4xl text-[#c4a052]">
            Schedule
          </h2>
          <div
            ref={containerRef}
            className="no-scrollbar overflow-x-auto"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="relative flex min-w-max px-4">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex flex-col items-center"
                  style={{
                    marginLeft: index === 0 ? '0' : '-20px', // Overlap circles
                  }}
                >
                  <span className="mb-4 text-[#c4a052]">{event.name}</span>
                  <div className="relative">
                    <div 
                      className={`relative h-[120px] w-[120px] ${
                        index % 2 === 0 ? '' : 'rotate-180'
                      }`}
                    >
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i0gr5GWC7YJyonXbs7nhbLMXAWzJOh.png"
                        alt="Greek pattern border"
                        fill
                        className="object-contain"
                        priority={index < 3} // Prioritize loading first few images
                      />
                      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4a052]" />
                    </div>
                  </div>
                  <span className="mt-4 text-[#c4a052]">{event.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
   */
  const events= Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "EVENT NAME",
  }))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const horizontalMax = container.scrollWidth - container.clientWidth
      const horizontalScroll = (scrolled / maxScroll) * horizontalMax
      container.scrollLeft = horizontalScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full bg-[#1a0f02] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center font-serif text-4xl text-[#c4a052]">
          Schedule
        </h2>
        <div
          ref={containerRef}
          className="no-scrollbar overflow-x-auto"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex min-w-max gap-16 px-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col items-center gap-4"
              >
                <span className="text-[#c4a052]">{event.name}</span>
                <div className="relative">
                  <img
                    src="/circle.png"
                    alt="Circle"
                    className="object-cover animate-spin-slow rounded-full"
                  />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4a052]" />
                </div>
                <span className="text-[#c4a052]">{event.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


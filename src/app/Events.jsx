"use client";

import { useEffect, useRef } from "react";

export default function Events() {
  const containerRef = useRef(null);
  const events = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Event ${i + 1}`,
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const horizontalMax = container.scrollWidth - container.clientWidth;
      const horizontalScroll = (scrolled / maxScroll) * horizontalMax;
      container.scrollLeft = horizontalScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full bg-[#1E0E03] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center font-serif text-4xl text-[#c4a052]">
          Schedule
        </h2>
        <div className="relative">
          {/* Buttons for navigation */}
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[#c4a052] px-4 py-2 text-white rounded-md hover:bg-[#a37f3e]"
            onClick={scrollLeft}
          >
            &larr;
          </button>
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[#c4a052] px-4 py-2 text-white rounded-md hover:bg-[#a37f3e]"
            onClick={scrollRight}
          >
            &rarr;
          </button>

          {/* Events container */}
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide"
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
    </div>
  );
}



// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"

// export default function ScrollTimeline() {
//   const containerRef = useRef(null)
//   const events = Array.from({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     name: "EVENT NAME",
//   }))

//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight
//       const horizontalMax = container.scrollWidth - container.clientWidth
//       const horizontalScroll = (scrolled / maxScroll) * horizontalMax
//       container.scrollLeft = horizontalScroll
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div className="relative w-full bg-[#1E0E03] py-20">
//       <div className="mx-auto max-w-7xl px-4">
//         <h2 className="mb-16 text-center font-serif text-4xl text-[#c4a052]">
//           Schedule
//         </h2>
//         <div
//           ref={containerRef}
//           className="overflow-x-scroll "
//           style={{
//             scrollBehavior: "smooth",
//             WebkitOverflowScrolling: "touch",
//           }}
//         >
//           <div className="flex min-w-max gap-16 px-4">
//             {events.map((event, index) => (
//               <div
//                 key={event.id}
//                 className="flex flex-col items-center gap-4"
//                 style={{
//                   marginLeft: index === 0 ? '0' : '-20px',
//                 }}
//               >
//                 <span className="text-[#c4a052]">{event.name}</span>
//                 <div className="relative h-[120px] w-[120px]">
//                   <Image
//                     src="/circle.png"
//                     alt="Greek pattern border"
//                     className="object-cover animate-spin-slow rounded-full"
//                     fill
//                     priority={index < 3}
//                   />
//                   <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4a052]" />
//                 </div>
//                 <span className="text-[#c4a052]">{event.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

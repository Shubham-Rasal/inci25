"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Events() {
  const containerRef = useRef(null);
  const events = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Event ${i + 1}`,
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (event) => {
      startX = event.clientX;
      scrollLeft = container.scrollLeft;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - startX;
      container.scrollLeft = scrollLeft - deltaX;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    container.addEventListener("mousedown", handleMouseDown);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
    };
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
                      className="object-cover size-48 animate-spin-slow rounded-full select-none"
                    />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4a052]" />
                  </div>
                  <span className="text-[#c4a052]">{event.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons for navigation */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              className="flex items-center justify-center bg-[#c4a052] px-4 py-2 text-white rounded-md hover:bg-[#a37f3e] transition duration-150 ease-in-out"
              onClick={scrollLeft}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="flex items-center justify-center bg-[#c4a052] px-4 py-2 text-white rounded-md hover:bg-[#a37f3e] transition duration-150 ease-in-out"
              onClick={scrollRight}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

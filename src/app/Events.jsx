"use client";
import './globals.css'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const snakeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (snakeRef.current) {
      observer.observe(snakeRef.current);
    }

    return () => {
      if (snakeRef.current) {
        observer.unobserve(snakeRef.current);
      }
    };
  }, []);

  return (
    <div id="schedule" className="w-full bg-[#1E0E03] py-20 overflow-hidden">
      <div 
        ref={snakeRef}
        className="flex"
      >
        <div className="flex shrink-0 h-96 w-full overflow-x-scroll">
          <Image
            src="/snake-left.svg"
            alt="Decorative snake pattern"
            width={1000}
            height={400}
            className="h-auto object-contain relative z-10 -mr-36"
            priority
          />
          <Image
            src="/snake-right.svg"
            alt="Decorative snake pattern"
            width={1000}
            height={400}
            className="h-auto object-contain relative z-10 -ml-32"
            priority
          />
        </div>
      </div>
    </div>
  );
}

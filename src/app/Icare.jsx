import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const iCareCards = [
  { id: 1, title: 'Beach Schooling', image:"/icare/ic1.webp" },
  { id: 2, title: 'Educational Essentials', image:"/icare/ic2.webp" },
  { id: 3, title: 'Medical Support', image:"/icare/ic3.webp" },
]

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ResponsiveImage } from './Merch';
import Image from 'next/image';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




export default function Icare() {
  return (
    <div id="i-care" className="flex flex-col items-center justify-center ">
      <ResponsiveImage
        src="/icare.png"
        alt="Incident 25 Logo"
        className="object-contain self-center max-w-full aspect-[4.31] w-[263px]"
        />
    <div className="flex px-4 flex-col items-center justify-center w-full lg:flex-row">
      <div className="lg:p-12 py-8 flex flex-col justify-center space-y-6  max-w-3xl lg:w-1/2">
      
        <h1 className="text-4xl font-bold text-white">
          i-CARE: Giving Back to the Community
        </h1>
        <div className="text-xl w-full text-white/80 space-y-4">
          <p>
            At Incident, a large-scale cultural fest is not only about fun, but also giving back to the community. i-CARE, the social wing of Incident, focuses on programmes such as social-awareness, health, rural-development, education, child-care and gender-equality.
          </p>
          <p>
            Through Beach Schooling, underprivileged students near NITK are tutored in the evenings. Students have availed educational essentials such as school bags, stationery, notebooks etc., and other medical essentials such as sanitisers and masks to keep them safe.
          </p>
          <p>
            Since 2019, i-Care has been quite active with numerous initiatives such as paper recycling, cloth collection drive, orphanage visits and multiple workshops. We continue to plan and take up more such noble initiatives in the future.
          </p>
        </div>
        
      </div>
      
      <div className="flex items-center justify-center overflow-hidden relative lg:w-1/2">
        <div className="absolute w-full h-full mask-gradient"></div>
        <div className="relative z-10 max-h-[80vh] overflow-hidden">
        <InfiniteMovingCards
        items={iCareCards}
        direction="right"
        speed="slow"
        />
        </div>
      </div>
    </div>
</div>
  );
}


export const InfiniteMovingCards = ({
    items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          
            <Image src={item.image} alt={item.title} width={600} height={400} className="w-full h-full object-contain aspect-[1.5] max-md:w-[600px] max-md:h-[200px]" />
          
        ))}
      </ul>
    </div>)
  );
};

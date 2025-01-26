import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const iCareCards = [
  { id: 1, title: 'Beach Schooling', description: 'Tutoring underprivileged students near NITK in the evenings.' },
  { id: 2, title: 'Educational Essentials', description: 'Providing school bags, stationery, notebooks, and other educational materials.' },
  { id: 3, title: 'Medical Support', description: 'Distributing sanitisers and masks to ensure student safety.' },
  { id: 4, title: 'Social Initiatives', description: 'Organizing paper recycling, cloth collection drives, and orphanage visits.' },
  { id: 5, title: 'Community Development', description: 'Focusing on social awareness, health, rural development, and gender equality.' }
];

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ResponsiveImage } from './Merch';

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
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <span
                className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.description}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.id}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>)
  );
};

'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const ScrollRoll = () => {
  return <>
    <img src="/top-hor.png" className="w-screen md:hidden " />
    <img src="/top.png" className="h-screen max-md:hidden" />
  </>
}

const ScrollBody = ({ children, isOpen }) => {
  return <div className={`grid overflow-hidden place-items-center text-black relative duration-1000 ease-in-out max-md:w-5/6 md:h-screen
      ${isOpen ? "md:w-full max-md:h-[50vh]" : "md:w-0 max-md:h-0"}`}>
    <img src="/scroll.png" className="absolute object-cover h-full max-md:hidden" />
    <img src="/scroll-hor.png" className="absolute object-cover w-full h-full md:hidden" />
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="relative p-8 text-[#3f3316] lg:text-6xl text-xl"
    >
      {children}
    </motion.p>
  </div>
}

const Roll = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOpen(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (rollRef.current) {
      observer.observe(rollRef.current);
    }

    return () => {
      if (rollRef.current) {
        observer.unobserve(rollRef.current);
      }
    };
  }, []);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={rollRef}
      onClick={toggleScroll} 
      className="flex p-4 cursor-pointer items-center justify-center max-md:flex-col text-center lg:px-32"
    >
      <ScrollRoll />
      <ScrollBody isOpen={isOpen}>
        What started as a small fest with a meagre budget in the 80s now stands as one of the best college festivals in India. Incident is a blend of cultural, social, and musical events that'll surely give the attendees an ecstatic experience.
      </ScrollBody>
      <ScrollRoll />
    </div>
  );
};

export default Roll;

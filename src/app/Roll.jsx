'use client'
import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const ScrollRoll = () => {
  return <>
    <img src="/top-hor.png" className="w-screen md:hidden " />
    <img src="/top.png" className="h-screen max-md:hidden" />
  </>
}

const ScrollBody = ({ children, isOpen }) => {
  return <div className={`grid overflow-hidden place-items-center text-black relative duration-700 ease-in-out max-md:w-full md:h-[70vh]
      ${isOpen ? "md:w-full max-md:h-[50vh]" : "md:w-0 max-md:h-0"}`}>
      <img src="/scroll.png" className="absolute object-cover h-full max-md:hidden" />
      <img src="/scroll-hor.png" className="absolute object-cover w-full h-full md:hidden" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative p-8 lg:text-3xl text-2xl text-[#5d4b20]"
      >
        {children}
      </motion.p>
    </div>
}

const Roll = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleScroll} className="flex p-4 cursor-pointer items-center justify-center
      max-md:flex-col text-center lg:px-32">
      <ScrollRoll />
      <ScrollBody isOpen={isOpen}>
      What started as a small fest with a meagre budget in the 80s now stands as one of the best college festivals in India. Incident is a blend of cultural, social, and musical events that'll surely give the attendees an ecstatic experience.
      </ScrollBody>
      <ScrollRoll />
    </div>
  );
};

export default Roll;

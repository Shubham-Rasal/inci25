'use client'
import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const ScrollRoll = () => {
  return <>
    <img src="/top-hor.png" className="w-screen md:hidden" />
    <img src="/top.png" className="h-screen max-md:hidden" />
  </>
}

const ScrollBody = ({ children, isOpen }) => {
  return <div className={`grid overflow-hidden place-items-center text-black relative duration-300 ease-in-out max-md:w-full md:h-screen
      ${isOpen ? "md:w-full max-md:h-[50vh]" : "md:w-0 max-md:h-0"}`}>
      <img src="/scroll.png" className="absolute object-cover h-full max-md:hidden" />
      <img src="/scroll-hor.png" className="absolute object-cover w-full h-full md:hidden" />
      <p className="relative p-8 text-[#5d4b20]">{children}</p>
    </div>
}

const Roll = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleScroll} className="flex p-4 cursor-pointer items-center justify-left
      max-md:flex-col">
      <ScrollRoll />
      <ScrollBody isOpen={isOpen}>
        We are a group of students from NITK who are passionate about
        creating innovative solutions to real-world problems. Our mission
        is to make a positive impact on society through our work.
      </ScrollBody>
      <ScrollRoll />
    </div>
  );
};

export default Roll;

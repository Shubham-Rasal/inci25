'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
const Roll = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="flex items-center justify-center lg:h-screen lg:w-screen overflow-hidden cursor-pointer rotate-90 lg:rotate-0"
      onClick={toggleScroll}
    >
      <div
        className={`relative flex flex-row items-center overflow-hidden h-[300px] lg:h-[600px]  transition-all duration-[1000ms] ${
          isOpen ? "w-[1200px]" : "w-[120px]"
        }`}
      >
        {/* Left Roll */}
        <div
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-[120px] h-full bg-scroll-top bg-no-repeat bg-contain z-10"
        ></div>

        {/* Scroll Body */}
        <div
          className={`flex-1 bg-scroll-body bg-repeat-x bg-cover text-center items-center justify-center flex-col flex transition-all h-full max-h-[450px] duration-[500ms] ${
            isOpen ? "opacity-100" : "opacity-100"
          }`}
          style={{
            transform: isOpen ? "scaleX(1.1)" : "scaleX(0.0833)",
            transformOrigin: "right",
          }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
            className="lg:ml-16 p-5 lg:p-32 text-center text-[#5d4b2f] justify-center font-serif items-center flex flex-col"
          >
         
            <p className="lg:text-xl text-center  -rotate-90 lg:rotate-0">
              We are a group of students from NITK who are passionate about
              creating innovative solutions to real-world problems. Our mission
              is to make a positive impact on society through our work.
            </p>
          </motion.div>
        </div>

        {/* Right Roll */}
        <div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-[100px] h-full bg-scroll-bottom bg-no-repeat bg-contain"
        ></div>
      </div>
    </div>
  );
};

export default Roll;

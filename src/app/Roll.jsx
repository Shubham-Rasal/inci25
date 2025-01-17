'use client'
import React, { useState } from "react";

const Roll = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-white cursor-pointer"
      onClick={toggleScroll}
    >
      <div
        className={`relative flex flex-row items-center overflow-hidden h-[600px]  transition-all duration-[1000ms] ${
          isOpen ? "w-[1200px]" : "w-[200px]"
        }`}
      >
        {/* Left Roll */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[100px] h-full bg-scroll-top bg-no-repeat bg-contain z-10"
        ></div>

        {/* Scroll Body */}
        <div
          className={`flex-1 bg-scroll-body bg-repeat-x bg-cover items-center justify-center flex-col flex transition-all h-full max-h-[600px] duration-[500ms] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: isOpen ? "scaleX(1)" : "scaleX(0.0833)",
            transformOrigin: "left",
          }}
          onClick={handleClose}
        >
          <div className="p-5 text-center text-[#5d4b2f]  justify-center font-serif items-center flex flex-col">
            <h1 className="mb-4 text-7xl font-bold uppercase">About Us</h1>
            <p className="text-xl text-center w-1/2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text...
            </p>
          </div>
        </div>

        {/* Right Roll */}
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[100px] h-full bg-scroll-bottom bg-no-repeat bg-contain"
        ></div>
      </div>
    </div>
  );
};

export default Roll;

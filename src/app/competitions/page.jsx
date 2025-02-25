'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Footer } from '../footer';

import { useState } from "react"
import Image from "next/image"
import { Trophy, BookOpen, Gamepad, Music2, Music, Briefcase, Theater } from "lucide-react"
import { ResponsiveImage } from "../Merch"
import { categories, competitions } from "../Competitions"
import NavMenu from '../NavMenu';
const Competition = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-md:pl-5">
        <Competitions />
      </div>
    <Footer />
    </>
  );
};



 const Competitions = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")



  const filteredCompetitions = competitions.filter(competition =>
    selectedCategory === "all" ? true : competition.categories.includes(selectedCategory),
  )

  return (
    <>
    <NavMenu />
    <div id="competition" className="min-h-screen  text-yellow-500 p-6">
      <div className="text-center items-center w-full flex justify-center mb-12">
        <ResponsiveImage src="/comp.png" alt="Competitions" className="object-contain mt-12 w-96 aspect-[5.1]" />
      </div>
      <div className="flex lg:justify-center gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map(({ id, image, label }) => (
          <button
            key={id}
            onClick={() => setSelectedCategory(id)}
            className={`flex flex-col items-center min-w-[120px] p-2 shadow-md ${selectedCategory === id ? "text-yellow-400" : "text-yellow-500/60"}`}
          >
            <div className={`size-24 rounded-full border-2 flex items-center justify-center mb-2 ${selectedCategory === id ? "border-yellow-400 bg-yellow-400/10 scale-110 shadow-lg shadow-yellow-400/50" : "border-yellow-500/60"}`}>
              <Image src={image} alt={label} width={100} height={100} className="object-cover" />
            </div>
            <span className="text-lg text-center">{label}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCompetitions.length === 0 ? (
          <div className="col-span-full text-center text-2xl font-bold text-yellow-500">
            Coming Soon
          </div>
        ) : (
          <>
            {filteredCompetitions.slice(0, 8).map(({ id, title, image, location, time }) => (
              <div key={id} className="relative border-2 border-yellow-500/30 rounded-lg overflow-hidden group hover:border-yellow-400 transition-colors">
                <div className="aspect-[4/3] relative">
                  <Image src={image} alt={title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f02] to-transparent" />
                </div>
                <div className="absolute bottom-0 w-full p-4 text-center">
                  <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "Sanskrit Text" }}>{title}</h3>
                  <p className="text-lg">{location}</p>
                  <p className="text-sm text-yellow-400">{time}</p>
                </div>
              </div>
            ))}
            
          </>
        )}
      </div>
      </div>
    </>
  );
  
}



export default Competition;

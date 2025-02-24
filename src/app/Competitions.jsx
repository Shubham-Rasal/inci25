"use client"

import { useState } from "react"
import Image from "next/image"
import { Trophy, BookOpen, Gamepad, Music2, Music, Briefcase, Theater } from "lucide-react"
import { ResponsiveImage } from "./Merch"

export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", icon: Trophy, label: "All Categories", image: "/allcat.png" },
    { id: "literary", icon: BookOpen, label: "Literary", image: "/literarycat.png" },
    { id: "gaming", icon: Gamepad, label: "Gaming & Tech", image: "/gamecat.png" },
    { id: "music", icon: Music2, label: "Music", image: "/musiccat.png" },
    { id: "dance", icon: Music, label: "Dance", image: "/dancecat.png" },
    { id: "business", icon: Briefcase, label: "Business", image: "/businesscat.png" },
    { id: "fashion", icon: Theater, label: "Fashion & Drama", image: "/dramacat.png" },
  ]

  const competitions = [
    { id: 1, title: "Inauguration", location: "SJA", time: "17:30-18:00", image: "/dance.png", categories: ["all"], day: "0" },
    { id: 2, title: "Yoga Dance Show", location: "SJA", time: "18:30-19:00", image: "/dance.png", categories: ["dance", "all"], day: "0" },
    { id: 3, title: "Townhall", location: "SJA", time: "19:30-20:20", image: "/dance.png", categories: ["business", "all"], day: "0" },
    { id: 4, title: "Violin Show", location: "SJA", time: "20:30-21:00", image: "/dance.png", categories: ["music", "all"], day: "0" },
    { id: 5, title: "Comedy Night", location: "SJA", time: "21:15-22:00", image: "/dance.png", categories: ["fashion", "all"], day: "0" },
    { id: 6, title: "EXPOSE", location: "Main Building", time: "ALL DAY", image: "/dance.png", categories: ["gaming", "all"], day: "1" },
    { id: 7, title: "Solo Singing", location: "SJA", time: "9:00-11:00", image: "/dance.png", categories: ["music", "all"], day: "1" },
    { id: 8, title: "Solo Dancing", location: "New Chemical Building", time: "10:00-12:00", image: "/dance.png", categories: ["dance", "all"], day: "1" },
    { id: 9, title: "Weapon Expo", location: "Civil Department", time: "10:00-12:00", image: "/dance.png", categories: ["gaming", "all"], day: "1" },
    { id: 10, title: "Rangoli Competition", location: "Pavilion", time: "10:00-12:00", image: "/dance.png", categories: ["fashion", "all"], day: "1" },
    { id: 11, title: "Shiv Parvati Vivah", location: "SJA", time: "13:00-15:00", image: "/dance.png", categories: ["fashion", "all"], day: "1" },
    { id: 12, title: "Food Eating", location: "Pavilion", time: "11:00-13:00", image: "/dance.png", categories: ["business", "all"], day: "1" },
    { id: 13, title: "Kalaripayattu", location: "SAC", time: "15:30-16:30", image: "/dance.png", categories: ["all"], day: "1" },
    {
      "id": 14,
      "title": "Fire Show",
      "location": "SAC",
      "time": "17:30-18:00",
      "image": "/dance.png",
      "categories": ["performance", "all"],
      "day": "1"
    },
    {
      "id": 15,
      "title": "Kavi Sammelan",
      "location": "SJA",
      "time": "17:00-19:00",
      "image": "/dance.png",
      "categories": ["literary", "all"],
      "day": "1"
    },
    {
      "id": 16,
      "title": "Eastern Band",
      "location": "SJA",
      "time": "9:00-11:00",
      "image": "/dance.png",
      "categories": ["music", "all"],
      "day": "2"
    },
    {
      "id": 17,
      "title": "Face Painting Competition",
      "location": "Pavillion",
      "time": "10:00-11:00",
      "image": "/dance.png",
      "categories": ["art", "all"],
      "day": "2"
    },
    {
      "id": 18,
      "title": "IPL Auction",
      "location": "CIDS",
      "time": "10:00-11:00",
      "image": "/dance.png",
      "categories": ["gaming", "all"],
      "day": "2"
    },
    {
      "id": 19,
      "title": "Car Expo",
      "location": "In Front of Main Building",
      "time": "10:00-11:00",
      "image": "/dance.png",
      "categories": ["expo", "all"],
      "day": "2"
    },
    {
      "id": 20,
      "title": "Rap & Roast",
      "location": "SAC",
      "time": "13:00-14:00",
      "image": "/dance.png",
      "categories": ["music", "all"],
      "day": "2"
    },
    {
      "id": 21,
      "title": "Eastern Dance",
      "location": "SJA",
      "time": "13:00-15:00",
      "image": "/dance.png",
      "categories": ["dance", "all"],
      "day": "2"
    },
    {
      "id": 22,
      "title": "Bike Stunt",
      "location": "LHC-C Parking",
      "time": "15:00-16:00",
      "image": "/dance.png",
      "categories": ["stunts", "all"],
      "day": "2"
    },
    {
      "id": 23,
      "title": "LEHER (Multiple Events)",
      "location": "Beach",
      "time": "16:00-18:00",
      "image": "/dance.png",
      "categories": ["variety", "all"],
      "day": "2"
    },
    {
      "id": 24,
      "title": "BAJA Car Expo",
      "location": "Main Building",
      "time": "15:00-16:00",
      "image": "/dance.png",
      "categories": ["expo", "all"],
      "day": "2"
    },
    {
      "id": 25,
      "title": "Western Band",
      "location": "SJA",
      "time": "9:00-11:00",
      "image": "/dance.png",
      "categories": ["music", "all"],
      "day": "3"
    },
    {
      "id": 26,
      "title": "Quiz (LSD)",
      "location": "ATB Seminar Hall",
      "time": "10:00-11:00",
      "image": "/dance.png",
      "categories": ["quiz", "all"],
      "day": "3"
    },
    {
      "id": 27,
      "title": "Quiz SOC",
      "location": "ATB Seminar Hall",
      "time": "10:00-11:00",
      "image": "/dance.png",
      "categories": ["quiz", "all"],
      "day": "3"
    },
    {
      "id": 28,
      "title": "Theme Quiz",
      "location": "ATB Seminar Hall",
      "time": "11:00-12:00",
      "image": "/dance.png",
      "categories": ["quiz", "all"],
      "day": "3"
    },
    {
      "id": 29,
      "title": "Haute Couture",
      "location": "SAC",
      "time": "12:00-15:00",
      "image": "/dance.png",
      "categories": ["fashion", "all"],
      "day": "3"
    },
    {
      "id": 30,
      "title": "Western Dance",
      "location": "SJA",
      "time": "13:00-15:00",
      "image": "/dance.png",
      "categories": ["dance", "all"],
      "day": "3"
    },
    {
      "id": 31,
      "title": "Nukad Natak",
      "location": "ADKE",
      "time": "15:00-17:00",
      "image": "/dance.png",
      "categories": ["theatre", "all"],
      "day": "3"
    },
    {
      "id": 32,
      "title": "Open MIC",
      "location": "SAC",
      "time": "15:00-16:30",
      "image": "/dance.png",
      "categories": ["performance", "all"],
      "day": "3"
    },
    {
      "id": 33,
      "title": "Magic Show",
      "location": "SAC",
      "time": "15:30-16:00",
      "image": "/dance.png",
      "categories": ["magic", "all"],
      "day": "3"
    }
  ]

  const filteredCompetitions = competitions.filter(competition =>
    selectedCategory === "all" ? true : competition.categories.includes(selectedCategory),
  )

  return (
    <div id="competition" className="min-h-screen bg-[#1a0f02] text-yellow-500 p-6">
      <div className="text-center items-center w-full flex justify-center mb-12">
        <ResponsiveImage src="/comp.png" alt="Competitions" className="object-contain mt-12 w-96 aspect-[5.1]" />
      </div>
      <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
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
          filteredCompetitions.map(({ id, title, image, location, time }) => (
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
          ))
        )}
      </div>
    </div>
  );
  
}


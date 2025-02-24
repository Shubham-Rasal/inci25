"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Shirt, Gamepad, Music2, Music, Briefcase, Theater } from "lucide-react"



export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", icon: Trophy, label: "All Categories" },
    { id: "literary", icon: Shirt, label: "Literary" },
    { id: "gaming", icon: Gamepad, label: "Gaming & Tech" },
    { id: "music", icon: Music2, label: "Music" },
    { id: "dance", icon: Music, label: "Dance" },
    { id: "business", icon: Briefcase, label: "Business" },
    { id: "fashion", icon: Theater, label: "Fashion & Drama" },
  ]

  const competitions = [
    {
      id: 1,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    // Duplicate the competition 6 more times for the grid
    {
      id: 2,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    {
      id: 3,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    {
      id: 4,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    {
      id: 5,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    {
      id: 6,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
    {
      id: 7,
      title: "Nritya",
      creator: "Genesis",
      image: "/dance.png",
      categories: ["dance", "all"],
    },
  ]

  const filteredCompetitions = competitions.filter((competition) =>
    selectedCategory === "all" ? true : competition.categories.includes(selectedCategory),
  )

  return (
    <div className="min-h-screen bg-[#1a0f02] text-yellow-500 p-6">
      {/* Back button */}

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "Sanskrit Text" }}>
          Competitions
        </h1>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setSelectedCategory(id)}
            className={`flex flex-col items-center min-w-[120px] p-2 shadow-md ${
              selectedCategory === id ? "text-yellow-400" : "text-yellow-500/60"
            }`}
          >
            <div
              className={`size-24 rounded-full border-2 flex items-center justify-center mb-2 
              ${selectedCategory === id ? "border-yellow-400 bg-yellow-400/10 scale-110 shadow-lg shadow-yellow-400/50" : "border-yellow-500/60"}`}
            >
              <Image src={'/allcat.png'} alt={label} width={100} height={100} className="object-cover" />
            </div>
            <span className="text-sm text-center">{label}</span>
          </button>
        ))}
      </div>

      {/* Competition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCompetitions.map((competition) => (
          <div
            key={competition.id}
            className="relative border-2 border-yellow-500/30 rounded-lg overflow-hidden group hover:border-yellow-400 transition-colors"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f02] to-transparent" />
            </div>
            <div className="absolute bottom-0 w-full p-4 text-center">
              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "Sanskrit Text" }}>
                {competition.title}
              </h3>
              <p className="text-sm text-yellow-500/80">by {competition.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


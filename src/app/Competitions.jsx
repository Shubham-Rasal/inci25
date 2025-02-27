"use client"

import { useState } from "react"
import Image from "next/image"
import { Trophy, BookOpen, Gamepad, Music2, Music, Briefcase, Theater } from "lucide-react"
import { ResponsiveImage } from "./Merch"

export const categories = [
  { id: "all", icon: Trophy, label: "All Categories", image: "/allcat.png" },
  { id: "art", icon: Theater, label: "Art", image: "/dramacat.png" },
  { id: "dance", icon: Music, label: "Dance", image: "/dancecat.png" },
  { id: "adventure", icon: Gamepad, label: "Sports and Adventure", image: "/gamecat.png" },
  { id: "music", icon: Music2, label: "Music", image: "/musiccat.png" },
  { id: "literary", icon: BookOpen, label: "Literary", image: "/literarycat.png" },
  { id: "culinary", icon: Gamepad, label: "Culinary", image: "/gamecat.png" },
  { id: "business", icon: Briefcase, label: "Business", image: "/businesscat.png" },
  // { id: "esports", icon: Gamepad, label: "Esports", image: "/gamecat.png" },
  { id: "fashion", icon: Theater, label: "Fashion & Drama", image: "/dramacat.png" },
  { id: "beach", icon: Theater, label: "Beach", image: "/dramacat.png" },
]

export const competitions = [
  
  {
    id:2,
    day:["1"],
    date:"7th March",
    title:"RANGOLI RHAPSODY",
    location:"Pavillion",
    time:"10:00-12:00",
    link:"https://unstop.com/p/rangoli-rhapsody-a-kaleidoscope-of-colors-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1403833",
    image: "/art_events.png",
    categories:["all","art"]
  },
  {
    id:8,
    day:["3"],
    date:"9th March",
    title:"BEATDOWN",
    location:"New Chem Dept",
    time:"14:00-17:00",
    link:"https://unstop.com/events/beatdown-1-v-1-dance-battle-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404382",
    image: "/dance_events.png",
    categories:["all","dance"]
  },
  {
    id:10,
    day:["1"],
    date:"7th March",
    title:"PROMENADE",
    location:"SJA",
    time:"12:00-14:00",
    link:"https://unstop.com/events/promenade-western-group-dance-competition-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404348",
    image: "/dance_events.png",
    categories:["all","dance"]
  },
 
  {
    id:5,
    day:["3"],
    date:"9th March",
    title:"HAUTE COUTURE",
    location:"SAC",
    time:"14:00-17:00",
    link:"https://unstop.com/o/gymoAF2?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/fashion_events.png",
    categories:["all","fashion"]
  },
  {
    id:6,
    day:["2"],
    date:"8th March",
    title:"RANGMANCH",
    location:"New Chem Dept",
    time:"10:00-15:00",
    link:"https://unstop.com/o/8zNqlML?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/fashion_events.png",
    categories:["all","fashion"]
  },
  {
    id:7,
    day:["2"],
    date:"8th March",
    title:"CHALNA CHITRA",
    location:"CIDS",
    time:"10:00-14:00",
    link:"https://unstop.com/o/zCVDv57?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/fashion_events.png",
    categories:["all","fashion"]
  },
  {
    id:1,
    day:["2"],
    date:"8th March",
    title:"ART ON THE SKIN",
    location:"Pavillion",
    time:"10:00 - 11:00",
    link:"https://unstop.com/p/art-on-the-skin-the-ultimate-face-painting-challenge-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404001",
    image: "/art_events.png",
    categories:["all","art"]
  },
  {
    id:3,
    day:["1"],
    date:"7th March",
    title:"RANGA CHITRA",
    location:"CIDS",
    time:"10:00-14:00",
    link:"https://unstop.com/o/ulvy2V4?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/art_events.png",
    categories:["all","art"]
  },
  {
    id:4,
    day:["2"],
    date:"8th March",
    title:"DRAWING COMPETITION",
    location:"Pavillion",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLScepT9vaDEvUdMbT0h8yVkeJgaqDhUMHpaJV13Dc_CCTj9Suw/viewform?usp=dialog",
    image: "/art_events.png",
    categories:["all","art"]
  },
  
  {
    id:9,
    day:["3"],
    date:"9th March",
    title:"NRITHYA",
    location:"SJA",
    time:"09:00-11:00",
    link:"https://unstop.com/events/nrithya-indian-classical-solo-dance-competition-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404379",
    image: "/dance_events.png",
    categories:["all","dance"]
  },
  
  {
    id:14,
    day:["1"],
    date:"7th March",
    title:"REVERSE SHARK TANK",
    location:"ISTE Seminar",
    time:"13:00-15:00",
    link:"https://unstop.com/p/reverse-shark-tank-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1410052",
    image: "/business_events.png",
    categories:["all","business"]
  },
  {
    id:15,
    day:["1"],
    date:"7th March",
    title:"MARKETING CHRONICLES",
    location:"CIDS",
    time:"11:00-14:00",
    link:"https://unstop.com/o/T592XgS?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/business_events.png",
    categories:["all","business"]
  },
  {
    id:13,
    day:["3"],
    date:"9th March",
    title:"IPL AUCTION",
    location:"CIDS",
    time:"11:00-13:00",
    link:"https://unstop.com/p/ipl-auction-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1410058",
    image: "/business_events.png",
    categories:["all","business"]
  },
  {
    id:11,
    day:["1"],
    date:"7th March",
    title:"STEP UP SOLO",
    location:"SJA",
    time:"09:00-11:00",
    link:"https://unstop.com/events/step-up-solo-western-solo-dance-competition-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404362",
    image: "/dance_events.png",
    categories:["all","dance"]
  },
  {
    id:12,
    day:["3"],
    date:"9th March",
    title:"TANDAV",
    location:"SJA",
    time:"12:00-14:00",
    link:"https://unstop.com/events/tandav-indian-classical-group-dance-competition-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1404371",
    image: "/dance_events.png",
    categories:["all","dance"]
  },
  
  {
    id:17,
    day:["2"],
    date:"8th March",
    title:"MOCK STOCK",
    location:"CIDS",
    time:"10:00 AM - 12:00 PM",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSeOiRXSdfwNQcCRufxMYTp710b9KHiiCiJBXP-izbSuI7pAKw/viewform?usp=header",
    image: "/business_events.png",
    categories:["all","business"]
  },
  {
    id:18,
    day:["3"],
    date:"9th March",
    title:"PULSE",
    location:"SAC",
    time:"09:00 - 12:00",
    link:"https://unstop.com/events/pulse-a-rock-battle-of-the-bands-competition-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1403766",
    image: "/music_events.png",
    categories:["all","music"]
  },
  {
    id:16,
    day:["3"],
    date:"9th March",
    title:"BUSINESS QUIZ",
    location:"CIDS",
    time:"12:00-14:00",
    link:"https://unstop.com/p/business-quiz-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1410018",
    image: "/business_events.png",
    categories:["all","business"]
  },
  
  {
    id:19,
    day:["1","2","3"],
    date:"ALL Days",
    title:"CHAI POINT",
    location:"SAC",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSc5exjdwvvAR68iYcBlN5zcHlxh2Ta0mtGTnMx5ooa8viW29w/viewform?usp=dialog ",
    image: "/music_events.png",
    categories:["all","music"]
  },
  {
    id:22,
    day:["2"],
    date:"8th March",
    title:"RAP AND ROAST",
    location:"SAC",
    time:"",
    link:"https://unstop.com/o/OSemdj9?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/music_events.png",
    categories:["all","music"]
  },
  {
    id:23,
    day:["0","1","2","3"],
    date:"ALL DAYS",
    title:"SLAM DUNK",
    location:"Basketball Court",
    time:"",
    link:"https://unstop.com/o/wNZL95S?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  
  
  {
    id:24,
    day:["1","2","3"],
    date:"7-9th March",
    title:"BGMI",
    location:"CIDS",
    time:"",
    link:"https://unstop.com/events/bgis-battleground-incident-series-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1408678",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  {
    id:25,
    day:["1"],
    date:"7th March",
    title:"VALORANT",
    location:"CIDS",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSe9yqDJK_rmiNhQvm7Llu17zxEcsaokIRNt38iSo_fqIwzS6Q/viewform?usp=dialog",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  {
    id:26,
    day:["3"],
    date:"9th March",
    title:"REAL CRICKET",
    location:"CIDS",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSeX8GO3TmCSaF7C5uSuoKzU9HihP-KSu9n95Mthzb7FQgVxSw/viewform?usp=dialog",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  
  
  {
    id:29,
    day:["3"],
    date:"9th March",
    title:"ROAD TO VALOR: EMPIRES",
    location:"CIDS",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSdJXxFkMcmfUGthZKedBKP1LCwo7vnAT6myOvl_6g5bj3AogQ/viewform?usp=header",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  {
    id:30,
    day:["2"],
    date:"8th March",
    title:"RASA NIRVANA",
    location:"Pavillion",
    time:"11:00 - 13:00 ",
    link:"https://unstop.com/o/r69jPqa?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/culinary_events.png",
    categories:["all","culinary"]
  },
  {
    id:31,
    day:["1"],
    date:"7th March",
    title:"BAKASURA",
    location:"Pavillion",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSd8fz75G1p7SRnR5nZfxcWUhG9pqky1sB-1HbTvrI6kp3xsog/viewform",
    image: "/culinary_events.png",
    categories:["all","culinary"]
  },
  {
    id:27,
    day:["1"],
    date:"7th March",
    title:"COOKIE RUN INDIA",
    location:"CIDS",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSdpFixvvHivfCbb5LUn5HDHWCNJo0DJSNAq7Tsyvo-ARjGnaA/viewform?usp=header",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  {
    id:28,
    day:["2"],
    date:"8th March",
    title:"BULLET ECHO",
    location:"CIDS",
    time:"",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSeJE2ZB5kfUIofV8tDlOcEVLupdJYabpT73tyURMAIxIksycg/viewform?usp=header",
    image: "/adventure_events.png",
    categories:["all","adventure"]
  },
  {
    id:32,
    day:["2"],
    date:"8th March",
    title:"HEMANTH GANGADHAR MEMORIAL QUIZ",
    location:"SAC",
    time:"10:00-13:00",
    link:"https://unstop.com/quiz/hemanth-gangadhar-memorial-quiz-a-history-gore-mystery-themed-quiz-incident-2025udbhav-the-rhythm-of-timeless-essen-1404341",
    image: "/literary_events.png",
    categories:["all","literary"]
  },
  {
    id:33,
    day:["3"],
    date:"9th March",
    title:"TRIVIA MAJORA",
    location:"ATB Seminar",
    time:"09:00-13:00",
    link:"https://unstop.com/o/fQUZSic?lb=yH7A4jLt&utm_medium=Share&utm_source=shortUrl",
    image: "/literary_events.png",
    categories:["all","literary"]
  },
  {
    id:34,
    day:["3"],
    date:"9th March",
    title:"GOOD QUIZ, M.A.A.D TRICKY",
    location:"ATB Seminar",
    time:"13:30-16:00",
    link:"https://unstop.com/quiz/good-quiz-maad-tricky-a-music-themed-open-general-quiz-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-sura-1404333",
    image: "/literary_events.png",
    categories:["all","literary"]
  },
  {
    id:35,
    day:["1"],
    date:"7th March",
    title:"TALES OF INCI",
    location:"SAC",
    time:"",
    link:"https://unstop.com/events/tales-of-inci-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1410802",
    image: "/literary_events.png",
    categories:["all","literary"]
  },
  {
    id:36,
    day:["1"],
    date:"7th March",
    title:"SHERLOCK",
    location:"SAC",
    time:"",
    link:"https://unstop.com/p/murder-mystery-incident-2025udbhav-the-rhythm-of-timeless-essence-nitk-surathkal-1410816",
    image: "/literary_events.png",
    categories:["all","literary"]
  },
  {
    id:37,
    day:["1"],
    date:"7th March",
    title:"SAND ART",
    location:"NITK Beach",
    time:"4:00 PM - 6:00 PM",
    link:"https://docs.google.com/forms/d/e/1FAIpQLSc44V_l1b3i_58_hCuB6JpbWdQiT4IXPh4R3sxon9K4qh1boA/viewform?usp=dialog",
    image: "/beach_events.png",
    categories:["all","beach"]
  },
  {
    id:38,
    day:["1"],
    date:"7th March",
    title:"KITE FLYING",
    location:"NITK Beach",
    time:"4:00 PM - 6:00 PM",
    link:"https://docs.google.com/forms/d/e/1FAIpQLScb-OptK5zbsPIX9XS1BRd59ZYZ2m781nA5nERnNybsT_oneQ/viewform",
    image: "/beach_events.png",
    categories:["all","beach"]
  },
]

export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCompetitions = competitions.filter(competition =>
    selectedCategory === "all" ? true : competition.categories.includes(selectedCategory),
  )

  return (
  <div id="competition" className="min-h-screen text-yellow-500 p-6">
    <div className="flex justify-center w-full mb-12">
      <ResponsiveImage src="/comp.png" alt="Competitions" className="object-contain mt-12 w-80 sm:w-96 aspect-[5.1]" />
    </div>
    <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
      {categories.map(({ id, image, label }) => (
        <button
          key={id}
          onClick={() => setSelectedCategory(id)}
          className={`flex flex-col items-center min-w-[100px] sm:min-w-[120px] p-2 shadow-md transition-transform ${selectedCategory === id ? "text-yellow-400 scale-105" : "text-yellow-500/60"}`}
        >
          <div className={`size-20 sm:size-24 rounded-full border-2 flex items-center justify-center mb-2 transition-all ${selectedCategory === id ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/50" : "border-yellow-500/60"}`}>
            <Image src={image} alt={label} width={80} height={80} className="object-cover" />
          </div>
          <span className="text-sm sm:text-lg text-center">{label}</span>
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredCompetitions.length === 0 ? (
        <div className="col-span-full text-center text-xl sm:text-2xl font-bold text-yellow-500">
          Coming Soon
        </div>
      ) : (
        filteredCompetitions.map(({ id, title, image, location, date, time, link }) => (
          <div key={id} className="relative border-2 border-yellow-500/30 rounded-lg overflow-hidden group hover:border-yellow-400 transition-colors p-4">
            <div className="aspect-[4/3] relative mb-4">
              <Image src={image} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f02] to-transparent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "Sanskrit Text" }}>{title}</h3>
            <p className="text-md sm:text-lg">{date}</p>
            <p className="text-md sm:text-lg">{location}</p>
            <p className="text-sm text-yellow-400">{time}</p>
            <a href={link} target="_blank" className="mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-md font-bold text-center w-full">Register</a>
          </div>
        ))
      )}
    </div>
  </div>
)
}




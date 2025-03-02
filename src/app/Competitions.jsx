"use client"

import { useState, useEffect } from "react";
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
  { id: "fashion", icon: Theater, label: "Fashion & Drama", image: "/dramacat.png" },
  { id: "beach", icon: Theater, label: "Beach", image: "/dramacat.png" },
]

export const competitions = [
  {
    id: 2,
    day: ["1"],
    date: "7th March",
    title: "RANGOLI RHAPSODY",
    location: "Pavillion",
    time: "10:00-12:00",
    description: "Unleash your artistic flair in Rangoli Rhapsody, a celebration of color and creativity! Participants are invited to craft stunning Rangoli designs using vibrant powders, flowers, and other materials, blending traditional patterns with innovative artistry. Whether inspired by nature, festivals, or abstract forms, let your Rangoli reflect your unique style.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScnNJXQjePKIMeyWOlvWn_IX5-9A1u1rakjVMeJ02h6ysa2cQ/viewform?usp=header",
    image: "/art_events.png",
    categories: ["all", "art"]
  },
  {
    id: 8,
    day: ["3"],
    date: "9th March",
    title: "BEATDOWN",
    location: "New Chem Dept",
    time: "14:00-17:00",
    description: "A 1 vs 1 battle where each pair of dancers will be challenged to dance to the unpredictable, varied beats.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScjrmSzz5hCSTmrk-dD6qA0VfxnzAfKlbH-5LFDCwTCeKVKhw/viewform?usp=header",
    image: "/dance_events.png",
    categories: ["all", "dance"]
  },
  {
    id: 5,
    day: ["3"],
    date: "9th March",
    title: "HAUTE COUTURE",
    location: "SAC",
    time: "14:00-17:00",
    description: "Step into the spotlight and let your style speak for itself in Haute Couture! This fashion show competition invites you to showcase your fashion sense, creativity, and confidence. Whether you’re rocking bold, trendy outfits or vintage-inspired ensembles, it’s your chance to flaunt your unique style. Let the runway be your stage and wow the audience with every stride. It’s not just about clothes; it’s about making a statement with your fashion!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe6LG8l7gVeE-z98lG8zn9-2lLFHI62ZRb68w3X1kH8yBjJjA/viewform?usp=header",
    image: "/fashion_events.png",
    categories: ["all", "fashion"]
  },
  
{
  id:6,
  day:["2"],
  date:"8th March",
  title:"RANGMANCH",
  location:"New Chem Dept",
  time:"10:00-15:00",
  description: "Are you ready to make a statement? Step onto the streets and take the stage at Rang Manch! This is your chance to voice your opinions, raise awareness, and entertain in the most vibrant and impactful way possible. Whether you’re passionate about social issues or love to perform, Rang Manch is the perfect platform for you. Grab the spotlight, connect with your audience, and be part of something that truly makes a difference. Don’t miss out—join us and let your performance speak louder than words!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdg4WKXxbGvk93hhPlrkE6nIpZvySeTCY9m1azKeuM9INhzNg/viewform?usp=header",
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
  description:"Unleash your creativity and storytelling skills in Chalana Chitra, where vision meets the screen! This competition invites passionate filmmakers to craft compelling short films that captivate, inspire, and entertain.",
  link:"hhttps://docs.google.com/forms/d/e/1FAIpQLSeynJb_AIYzaKiHD_nOyg6V2gbeI-xbxg4fAP-gqNEa1UIx-A/viewform?usp=header",
  image: "/fashion_events.png",
  categories:["all","fashion"]
},
{
  id:1,
  day:["2"],
  date:"8th March",
  title:"ART ON THE SKIN",
  description: "Unleash your inner artist in Art on the Skin! This face painting competition invites you to transform faces into stunning works of art. Whether you’re inspired by nature, fantasy, or abstract designs, this is your chance to showcase your creativity.",
  location:"Pavillion",
  time:"10:00 - 11:00",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSf-gBsqHovDVJRG9rDCT6hO_k4M4_cDaRhyE2xbzvWDKcBvTQ/viewform?usp=header",
  image: "/art_events.png",
  categories:["all","art"]
},
{
  id:3,
  day:["1"],
  date:"7th March",
  title:"RANGA CHITRA",
  location:"CIDS",
  description:"Get ready to bring movies to life through the art of design! Ranga Chitra is a thrilling competition where creativity meets cinema, challenging participants to craft stunning and captivating movie posters.",
  time:"10:00-14:00",
  link:"https://docs.google.com/forms/d/e/1FAIpQLScMnKJNg3bzUO8W_FrGl2n692RDAuC6QFZOo0InAdpLER4vZg/viewform?usp=header",
  image: "/art_events.png",
  categories:["all","art"]
},
{
  id:4,
  day:["2"],
  date:"8th March",
  title:"DRAWING COMPETITION",
  location:"Pavillion",
  description:"Get ready to bring movies to life through the art of design! Ranga Chitra is a thrilling competition where creativity meets cinema, challenging participants to craft stunning and captivating movie posters.",
  time:"",
  link:"https://docs.google.com/forms/d/e/1FAIpQLScH5VSspm5Swgcm2cdbGYS1mCGzJQmZtfNd9SUNxoV53xOSDg/viewform?usp=header",
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
  description:"Dance is a way of expressing the most intricate and soulful of thoughts. Carrying the legacy of Bharat and expressing the idea of India, Nritya is a classical eastern and contemporary solo dance competition. See our performers fly solo as they reach eagle-like heights in their pursuit of the Art.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdm0MQQoBgascNWq9s-wN91SSfC2orgmag7UqqIQBvp2HzmXA/viewform?usp=header",
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
  description:"Get ready for a hilarious twist on the classic Shark Tank! In this event, teams of four will come up with their own funny or bizarre product and pitch it as the next big innovation. With just 5-8 minutes to impress the “investors,” creativity and humor are key. Deliver a convincing and entertaining pitch that makes the audience laugh while showcasing your marketing skills. No external help—just pure wit, confidence, and out-of-the-box thinking. Sell the silliest idea like it’s a billion-dollar business!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSfOREk9zLePe4AZRGtAEqVUo2vCmFcZ4nSx1FrPHI_oBQWtyQ/viewform?usp=header",
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
  description:"Unleash your creativity and marketing skills in this exciting challenge! Participants will pick a random chit containing a product name and must craft a compelling marketing pitch on the spot. With limited time to think and present, quick wit and persuasion are key. Showcase your ability to sell anything with confidence and innovation. Judges will evaluate creativity, clarity, and impact. No external assistance is allowed—just pure marketing genius. Get ready to think fast, speak smart, and leave a lasting impression!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeJB-kHbsdp9HBSBebRDWrwLc3ojuLBEYVo2Qym4VVSIwCa3w/viewform?usp=header",
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
  description:"Think you have what it takes to be the ultimate team owner? Welcome to IPL Auction 2025, where your cricket knowledge and strategic skills will be put to the test! The event kicks off with a high-intensity Quiz Round, where teams battle through 30 IPL-themed MCQs to prove their expertise. The top 10 teams will then enter the thrilling Auction Round, where they’ll bid for players using a virtual budget of 100 Crores to form the perfect squad. But it’s not just about buying players—it’s about smart spending, team balance, and outmaneuvering the competition.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdFHqSfYnkriSkwlIPlJYHm0Y13WDgzrKDGluvjt4SJtZHM7Q/viewform?usp=header",
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
  description:"Witness the fever and high of Hip Hop as the performers single-handedly take on the task of imprinting this modern form of dance into your hearts. Trying to outshine every sun, let your soul dance along as the Michaels and Jacksons compete for the ace.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSe2I92hG_Cuyi1GvINYXyq7jGldtmUYz002Uk3pj5NOZ5mDCg/viewform?usp=header",
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
  description:"Tandav is the cosmic dance of the perpetual creation and destruction of the universe. The soul-soothing art of Tandav is performed by dance groups all across the country. A group dance competition where dance groups from the entire nation showcase their astute.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSewnE3TPT5V4YRmCJas8T9FP5tPOkZynrtRpdJKk1b-5CwuTQ/viewform?usp=header",
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
  description:"Step into the fast-paced world of stock markets, where every second counts and every decision can make or break your fortune! Mock Stock at Incident is a high-stakes simulation where participants trade, strategize, and outsmart opponents in a virtual stock market. Analyze trends, take calculated risks, and dominate the leaderboard—because in this market, only the sharpest minds thrive! So, bring your A-game, bid wisely, and build a championship-winning team!.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeOiRXSdfwNQcCRufxMYTp710b9KHiiCiJBXP-izbSuI7pAKw/viewform?usp=sharing",
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
  description:"The stage is set, the amps are cranked up to eleven, and we wait for you to unleash your best original music and covers.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeR-4edJkGofSvklViIgnOtlYOYhAh1iKRrqzXDsnTFgo4byw/viewform?usp=header",
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
  description:"Put your business knowledge to the test in this thrilling quiz competition! Covering topics like marketing, finance, entrepreneurship, and corporate affairs, this quiz will challenge your strategic thinking. Compete individually in two intense rounds, where only the sharpest minds will make it to the finals. With limited time and tricky questions, every second counts. Stay focused, think fast, and outsmart your competitors. Are you ready to claim the top spot?",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdxEiv-VAIT0NBdjVBmWM6esCYmi6EMQLiwS42kdYzeMTudpw/viewform?usp=header",
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
  description: "Step into the warm, inviting aura of Chai Point, where stories, poetry, music, and musings flow as freely as steaming cups of chai. This open mic event is your stage—whether you’re a poet with words that stir the soul, a comedian with jokes that crack the room, a storyteller weaving magic, or a musician setting the vibe with soothing melodies.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSfDCYSHcefMURTaqGr-4oWetVsrqE4pC4k7LXF3bqdx9t-4_g/viewform",
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
  description:"Step up to the mic and bring your lyrical game to Mic Drop! This rap battle competition challenges you to showcase your wordplay, rhythm, and creativity in a high-energy face-off. Whether you’re spitting bars, flexing your flow, or delivering punchlines, it’s your chance to show off your rap skills. With the crowd behind you and the mic in hand, it’s time to claim your spot as the top rapper!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLScRKfvxmS1hRkfoAmQf5PcNeIBQAebkd9YiJ8h7adYf9PPINg/viewform?usp=header",
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
  description:"One of the flagship events of Incident, SLAM DUNK, is a fusion of style, sportsmanship, and athleticism. These elements have established SLAM DUNK as one of the most popular tournaments in the country,drawing numerous teams vying for the opportunity to participate. A tournament par excellence, SLAM DUNK is a display of skill and athleticism that must be seen to be believed.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdKV2XjPHKppiZBJl2oQfNT_yK_rTyIytmGYAv5_0mvtGFA3Q/viewform?usp=header",
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
  description:"Drop in, gear up, and fight for survival in BGMI’s ultimate showdown at Incident! Squad up or go solo as you battle it out in high-stakes matches filled with intense gunfights, strategic plays, and heart-racing final circles. Do you have what it takes to claim the Winner Winner Chicken Dinner?",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeojvJmSRSnUvylQzPPmch-_v5PJ7rv8NeSnDiAC817QEUbTQ/viewform?usp=header",
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
  description:"Precision, strategy, and pure reflex—Valorant is where tactical FPS meets raw skill! Assemble your squad, choose your agents, and outplay your opponents in intense 5v5 battles. Whether you’re a deadly Duelist or a clutch Sentinel, prove your mettle in this high-octane esports arena.",
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
  description:"Get ready to showcase your cricketing skills in the ultimate mobile gaming showdown at Incident 2025! The Real Cricket Championship brings the thrill of the sport to your fingertips, where precision, strategy, and quick reflexes will determine the champion.",
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
  description:"Step into the world of epic battles and legendary warriors! Road to Valor: Empires challenges you to strategize, summon powerful heroes, and lead your army to victory. Forge alliances, defend your kingdom, and rise through the ranks as the ultimate commander. Will you carve your name into history?",
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
  description:"A cool culinary celebration where you can craft delicious dishes without cooking. Dive into a world of refreshing flavours, creativity, and joy. Experience the delight of savouring without the flame, where each dish is a pathway to culinary bliss. Don’t miss this extraordinary journey of taste and expression.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSe3749CRfAm2TFUc2BKo9zqEgUELHcnVoOIKSBj9oLMFijemw/viewform?usp=header",
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
  description:"Hunger meets endurance in Bakasura, Incident’s legendary food challenge! Devour monstrous portions, conquer fiery spice levels, and prove your appetite is as big as your willpower. Whether it’s speed-eating or outlasting the heat, only the true Bakasura will reign supreme!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdMRFlTwZNgk3dmIxN2dX6vucAiuAWShKOmklD7Wx9A-2Ma2g/viewform?usp=header",
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
  description:"Get ready for a fast-paced, sugar-fueled adventure in Cookie Run India! Race through vibrant landscapes, dodge obstacles, and collect power-ups as you compete for the highest score. Whether you’re a seasoned runner or a casual gamer, this event promises sweet rewards and thrilling challenges. Are you ready to run for the win?",
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
  description:"In the ultimate top-down tactical shooter, every move counts! Bullet Echo tests your reflexes and strategy as you sneak, shoot, and survive in a fast-paced battle. Work with your squad, use the shadows, and take down enemies before they see you coming. Can you outplay and outlast the competition",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeJE2ZB5kfUIofV8tDlOcEVLupdJYabpT73tyURMAIxIksycg/viewform?usp=header",
  image: "/adventure_events.png",
  categories:["all","adventure"]
},
{
  id:32,
  day:["2"],
  date:"8th March",
  title:"HEMANTH GANGADHAR QUIZ",
  location:"SAC",
  time:"10:00-13:00",
  description:"The ultimate test of your knowledge and strategy! Battle it out against fellow quizzers in a thrilling in-house showdown that will challenge your grasp of history—this quiz will put your intellect to the test. Do you have what it takes to conquer time itself and emerge victorious?",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSeIWGxvDZlWx7ul7qZvvubZrRzgJuW8Xb6Dyxun8FFIEOg9dA/viewform?usp=header",
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
  description:"From history to pop culture, sports to science—challenge yourself in this high-stakes battle of wits. Compete against the brightest minds, answer tricky questions, and prove you’ve got what it takes to be the ultimate quiz champion. Think fast, stay sharp, and may the best mind win",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSc_TRpUYkBdrHQ0YztZq1v1PNOuIvIQnGcCZKXesXVEiAXADg/viewform?usp=header",
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
  description:"A musical quiz that truly represents Incident, NITK’s iconic cultural fest! Dive into a world of rhythm, melodies, and legendary tunes with fun yet challenging questions designed to test your musical knowledge. From classical compositions to modern chartbusters, this quiz will push your curiosity and intellect to the limit. Are you ready to hit the right note?",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSfU_Z5SUyD17H0C_4OBMeyXgXw_0RhARkAvS5I1gskRm2CFyA/viewform?usp=header",
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
  description:"Every legend has a beginning, and every voice has a tale to tell. Tales of Inci is where stories come alive—be it folklore, fantasy, or personal experiences. Whether you’re a seasoned storyteller or a first-time narrator, take the stage and weave magic with your words.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLScm3Pa8KW0fhzpGwj25oKuw272dmB7bDsXS1W4ibvMWG1_4FA/viewform?usp=header",
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
  description:"A crime has been committed, and only the sharpest minds can uncover the truth. Step into Sherlock’s shoes as you decode cryptic clues, analyze evidence, and unravel a gripping mystery before time runs out. Think fast, act faster—justice waits for no one.",
  link: "https://docs.google.com/forms/d/e/1FAIpQLScqPe0YfUDTiyy4uGIo_YWjPJYAU43Si20BwrImnDYYGbBjzA/viewform?usp=header",
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
  description:"Witness creativity come alive as artists shape stunning masterpieces in the golden grains of sand. Whether it’s intricate designs, powerful themes, or breathtaking sculptures, Sand Art at Incident is where imagination meets the earth.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSe2kGfgnqSAWQ1V-CESbUaLUId4iJgIqG9aJ3ehgU9vG1bK7Q/viewform?usp=header",
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
  description:"Feel the wind, hold the string, and let your kite dance with the sky! A vibrant spectacle of color and skill, the kite-flying event at Incident is all about balance, control, and high-flying fun. Compete to keep your kite soaring the longest or battle it out in thrilling aerial duels!",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSdWxwqzZzESF0muqoC_KwStoEQImORiWMfsfrqeKOZQ8tpAOA/viewform?usp=header",
  image: "/beach_events.png",
  categories:["all","beach"]
},
{
  id:39,
  day:["1","2","3"],
  date:"7th -9th March",
  title:"ARMAGEDDON: THE ULTIMATE GRIP",
  location:"SAC",
  time:"11:00-12:00",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSe10m5oUTBh47-fpiK2ii-_5IyiWJbmy3B5FhSE1wPT30xYPQ/viewform",
  image: "/adventure_events.png",
  categories:["all","adventure"]
},
// {
//   id:40,
//   day:["2"],
//   date:"8th March",
//   title:"COMIC CLASH",
//   location:"NITK",
//   time:"4:00 PM - 6:00 PM",
//   link:"https://docs.google.com/forms/d/e/1FAIpQLSfDCYSHcefMURTaqGr-4oWetVsrqE4pC4k7LXF3bqdx9t-4_g/viewform",
//   image: "/art_events.png",
//   categories:["all","art"]
// },
{
  id:41,
  day:["2"],
  date:"8th March",
  title:"BANDISH",
  location:"NITK",
  time:"09:00 - 12:00",
  description:"Take away to a world of fusion music where modern Western instruments and traditional Indian music are flawlessly incorporated",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSfW1LZ0TfqJBHIuiDbifncOiCz2EPBtxEZLgplDauQdBuzYkA/viewform",
  image: "/music_events.png",
  categories:["all","music"]
},
{
  id:42,
  day:["1"],
  date:"7th March",
  title:"RAAGA RHAPSODY",
  location:"NITK",
  time:"09:00 - 17:00",
  description:"Showcase the vocalist within you at Raaga Rhapsody - Solo Singing Competition! With your microphone and passion for music, take the stage and capture the hearts of the audience.rs.",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSep4zHHvEaULTGwFnv9rhhdAgZxAQsqD96isuPxF7vGLzbuog/viewform",
  image: "/music_events.png",
  categories:["all","music"]
},
{
  id:43,
  day:["1"],
  date:"7th March",
  title:"PROMENADE",
  location:"SJA",
  time:"12:00-14:00",
  description:"Truly setting the stage on fire, Promenade is a Western Dance competition where dance groups present the magnificence of sync and flow. Climbing the hill to the podium, passion is the phenomenon that puts you on the top",
  link:"https://docs.google.com/forms/d/e/1FAIpQLSfgDglwIt1hvUO-DHvdxNKRgfG3VLyqufNyDafjjVPEMiUvRQ/viewform?usp=header",
  image: "/dance_events.png",
  categories:["all","dance"]
},
]

export default function CompetitionsPage() {
  let [selectedCategory, setSelectedCategory] = useState("all");
  let [selectedCompetition, setSelectedCompetition] = useState(null);

  useEffect(() => {
    const handleBack = (event) => {
      if (selectedCompetition) {
        event.preventDefault();
        setSelectedCompetition(null);
      }
    };

    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [selectedCompetition]);

  const filteredCompetitions = competitions.filter((competition) =>
    selectedCategory === "all" ? true : competition.categories.includes(selectedCategory)
  );

  return (
    <div id="competition" className="min-h-screen text-yellow-500 p-6">
      <div className="flex justify-center w-full mb-12">
        <ResponsiveImage src="/comp.png" alt="Competitions" className="object-contain mt-12 w-80 sm:w-96 aspect-[5.1]" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-auto gap-2 mb-12 overflow-x-auto pb-4">
        {categories.map(({ id, image, label }) => (
          <button key={id} onClick={() => setSelectedCategory(id)} className={`flex flex-col items-center min-w-[100px] sm:min-w-[120px] p-2 shadow-md transition-transform ${selectedCategory === id ? "text-yellow-400 scale-105" : "text-yellow-500/60"}`}>
            <div className={`size-20 sm:size-24 rounded-full border-2 flex items-center justify-center mb-2 transition-all ${selectedCategory === id ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/50" : "border-yellow-500/60"}`}>
              <Image src={image} alt={label} width={80} height={80} className="object-cover" />
            </div>
            <span className="text-xl sm:text-3xl text-center">{label}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCompetitions.map((competition) => (
          <div key={competition.id} className="relative border-2 border-yellow-500/30 rounded-lg overflow-hidden group hover:border-yellow-400 transition-colors p-4 flex flex-col items-center cursor-pointer" onClick={() => {
            setSelectedCompetition(competition);
            history.pushState(null, "", location.href);
          }}>
            <Image src={competition.image} alt={competition.title} width={300} height={200} className="rounded-lg shadow-md mb-3 object-cover" />
            <h3 className="text-xl sm:text-2xl font-bold text-center">{competition.title}</h3>
          </div>
        ))}
      </div>
      {selectedCompetition && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-lg z-20" onClick={() => setSelectedCompetition(null)}>
          <div className="bg-yellow-100 p-8 rounded-3xl shadow-2xl max-w-md w-full text-black relative max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-800 text-5xl font-bold hover:text-red-500" onClick={() => setSelectedCompetition(null)}>&times;</button>
            <Image src={selectedCompetition.image} alt={selectedCompetition.title} width={400} height={250} className="rounded-xl shadow-lg mb-4" />
            <h2 className="text-3xl font-extrabold text-center mb-3 text-yellow-700">{selectedCompetition.title}</h2>
            <p className="text-md font-semibold text-center mb-2">{selectedCompetition.date} | {selectedCompetition.time}</p>
            <p className="text-md text-center mb-2">{selectedCompetition.location}</p>
            <p className="text-md text-center mb-4 ">{selectedCompetition.description}</p>
            <a href={selectedCompetition.link} target="_blank" className="block text-center bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold shadow-md hover:bg-yellow-600">Register Now</a>
          </div>
        </div>
      )}
    </div>
  );
}



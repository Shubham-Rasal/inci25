import Image from "next/image"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Team() {
  const developers = [
    {
      name: "VANSH JAISWAL",
      role: "Convener",
      image: "/team/team/Vansh.jpg"
    },
    {
      name: "MANVENDRA SOLANKI",
      role: "Co Convenor",
      image: "/team/team/Manvendra .jpg"
    },
    {
      name: "PRASHANT",
      role: "Fest Moderator",
      image: "/team/team/Prashant Singh.jpg"
    },
    {
      name: "YATENDRA VERMA",
      role: "PG Advisor",
      image: "/dance.png"
    },
    {
      name: "VIVEK MISHRA",
      role: "Marketing Head",
      image: "/team/team/Vivek.jpg"
    },
    {
      name: "RAJ GAUTAM",
      role: "Marketing Head",
      image: "/dance.png"
    },
    {
      name: "ADITYA SHANKAR",
      role: "Marketing Head",
      image: "/dance.png"
    },
    {
      name: "CHETHAN SRINIVAS",
      role: "Marketing Head",
      image: "/team/team/Chethan.jpg"
    },
    {
      name: "RASAL",
      role: "Chief Co Ordinator",
      image: "/team/team/Rasaal.jpg"
    },
    {
      name: "PRAKHAR KHARYA",
      role: "Chief Co Ordinator",
      image: "/dance.png"
    },
    {
      name: "HARSH",
      role: "Treasurer",
      image: "/team/team/Harsh.jpg"
    },
    {
      name: "BHAVYA JAIN",
      role: "Treasurer",
      image: "/team/team/Bhavya_Jain.jpg"
    },
    {
      name: "AKASH",
      role: "Publicity",
      image: "/team/team/S Akash Shenoy.jpg"
    },
    {
      name: "CHANDAN",
      role: "Publicity",
      image: "/team/team/Chandan_Rawat.jpg"
    },
    {
      name: "SIDDU",
      role: "Publicity",
      image: "/team/team/Siddhu.jpg"
    },
    {
      name: "RAHUL KRUZ",
      role: "Inci Logistics",
      image: "/dance.png"
    },
    {
      name: "YATENDRA",
      role: "Inci Logistics",
      image: "/dance.png"
    },
    {
      name: "MAYANK",
      role: "Corporate Hospitality",
      image: "/team/team/Mayank.jpg"
    },
    {
      name: "VEDANSH",
      role: "Corporate Hospitality",
      image: "/team/team/Vedansh.jpg"
    },
    {
      name: "ASHISH",
      role: "Corporate Hospitality",
      image: "/team/team/Aashish.jpg"
    },
    {
      name: "TUSHAR",
      role: "Student Hospitality",
      image: "/team/team/Tushar.jpg"
    },
    {
      name: "RISHI",
      role: "Student Hospitality",
      image: "/dance.png"
    },
    {
      name: "NANCY",
      role: "Student Hospitality",
      image: "/team/team/Nancy.jpg"
    },
    {
      name: "DHRUV GUPTA",
      role: "Fest Advisor",
      image: "/team/team/DHRUV_GUPTA.JPG"
    },
    {
      name: "DHIRAJ",
      role: "Fest Advisor",
      image: "/team/team/Dhiraj .jpg"
    },
    {
      name: "AYIMAAN MOHANTY",
      role: "Media Head",
      image: "/dance.png"
    },
    {
      name: "SHIVAM PATEL",
      role: "Operational Head",
      image: "/team/team/Shivam.jpg"
    },
    {
      name: "VIVEK SAGAR",
      role: "Inci Store",
      image: "/dance.png"
    },
    {
      name: "PRINCE",
      role: "Inci Store",
      image: "/team/team/Prince.jpg"
    },
    {
      name: "SAURAV SINGH",
      role: "Inci Store",
      image: "/team/team/saurav kumar.jpg"
    },
    {
      name: "MADHAV",
      role: "Inci Force",
      image: "/team/team/Madhav.HEIC"
    },
    {
      name: "SAMEER KASHYAP",
      role: "Inci Force",
      image: "/dance.png"
    },
    {
      name: "PRASHANT",
      role: "Magazine Head",
      image: "/team/team/Prashant Singh.jpg"
    },
    {
      name: "ASHISH",
      role: "Magazine Head",
      image: "/team/team/Aashish.jpg"
    },
    {
      name: "ASHWANI KUMAR",
      role: "Creative Head",
      image: "/team/team/Ashwani.jpg"
    },
    {
      name: "ALEKYA",
      role: "Creative Head",
      image: "/team/team/Alekya.jpg"
    },
    {
      name: "SRIGOWRI BHARGAV",
      role: "Creative Head",
      image: "/dance.png"
    },
    {
      name: "VAIBHAV",
      role: "Website Lead",
      image: "/dance.png"
    },
    {
      name: "SHUBHAM SUBODH RASSAL",
      role: "Website Lead",
      image: "/dance.png"
    },
    {
      name: "SHRIKRISHNA",
      role: "Inci Special",
      image: "/team/team/Shrikrushna.jpg"
    },
    {
      name: "DEEPAK",
      role: "Production Head",
      image: "/team/team/Deepak Verma.png"
    },
    {
      name: "LUKESHWAR",
      role: "Production Head",
      image: "/team/team/Lukeshwar.jpg"
    },
    {
      name: "KARTIKEY TIWARI",
      role: "Administrative Affairs",
      image: "/team/team/kartikey formal nk.jpg"
    },
    {
      name: "SHREYANG",
      role: "Inci Office",
      image: "/team/team/Shreyang.jpg"
    },
    {
      name: "SHUBHANGI",
      role: "Inci Office",
      image: "/team/team/shubhangi.jpg"
    },
    {
      name: "RAKSHATA",
      role: "Fest Curation",
      image: "/dance.png"
    },
    {
      name: "LAKSHITH",
      role: "Secretary",
      image: "/team/team/Lakshit Sharma.png"
    },
  ]

  return (
    <div className="min-h-screen p-6 sm:p-8">
      {/* Back Button */}
      

      {/* Title */}
      <div className="flex justify-center mb-16">
        <div className="relative">
          <div className="absolute inset-0  transform skew-x-12"></div>
          <h1 className="relative px-8 py-2 text-6xl font-semibold">Team </h1>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 place-items-center">
          {developers.map((developer, index) => (
            <ProfileCard key={index} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProfileCard({ developer }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[180px] h-[180px]">
        {/* Decorative Border */}
        <div className="absolute inset-0 w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBAE3D" />
                <stop offset="100%" stopColor="#DBAE3D" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#borderGradient)" strokeWidth="2" />
            <path
              d="M100,0 A100,100 0 0,1 100,200 A100,100 0 0,1 100,0"
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth="10"
              strokeDasharray="15,10"
            />
          </svg>
        </div>

        {/* Profile Image */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <Image
            src={developer.image}
            alt={`${developer.name}'s profile`}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="text-center mt-4 space-y-2">
        <h2 className="text-[#DBAE3D] font-semibold text-lg">{developer.name}</h2>
        <p className="text-[#DBAE3D] text-sm border border-[#DBAE3D] inline-block px-4 py-1">{developer.role}</p>
      </div>

      {/* Social Icons */}
      {developer.social && (
        <div className="flex justify-center gap-6 mt-4">
          <Github className="w-5 h-5 text-[#DBAE3D]" />
          <Twitter className="w-5 h-5 text-[#DBAE3D]" />
          <Linkedin className="w-5 h-5 text-[#DBAE3D]" />
          <Facebook className="w-5 h-5 text-[#DBAE3D]" />
        </div>
      )}
    </div>
  )
}


import Image from "next/image"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Team() {
  const developers = [
    {
      name: "VANSH JAISWAL",
      role: "Convenor",
      image: "/team/team/Vansh.jpg"
    },
    {
      name: "MANVENDRA SOLANKI",
      role: "Co Convenor",
      image: "/team/team/manvinder.png"
    },
    {
      name: "PRASHANT",
      role: "Fest Moderator",
      image: "/team/team/Prashant Singh.jpg"
    },
    {
      name: "DEEPAK",
      role: "Production Head",
      image: "/team/team/Deepak Verma.png"
    },
    {
      name: "VIVEK MISHRA",
      role: "Marketing Head",
      image: "/team/team/vivek_mishra.png"
    },
    {
      name: "GAUTAM",
      role: "Marketing Head",
      image: "/team/team/gautam.png"
    },
    {
      name: "ASHWANI KUMAR",
      role: "Creative Head",
      image: "/team/team/Ashwani.jpg"
    },
    {
      name: "HARSH",
      role: "Treasurer",
      image: "/team/team/Harsh.jpg"
    },
    {
      name: "KARTIKEY TIWARI",
      role: "Administrative Affairs",
      image: "/team/team/kartikey formal nk.jpg"
    },
    {
      name: "VAIBHAV AGRAWAL",
      role: "Website Lead",
      image: "/team/team/vaibhav.jpg  "
    },
    {
      name: "SHUBHAM SUBODH RASSAL",
      role: "Website Lead",
      image: "/team/team/shubham.jpeg"
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
      image: "/guy.png"
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
      name: "DHIRAJ",
      role: "Fest Advisor",
      image: "/team/team/Dhiraj .jpg"
    },
    {
      name: "SIDDU",
      role: "Publicity",
      image: "/team/team/Siddhu.jpg"
    },
    {
      name: "RAHUL KRUZ",
      role: "Inci Logistics",
      image: "/guy.png"
    },
    {
      name: "YATENDRA",
      role: "Inci Logistics",
      image: "/team/team/yatendra.png"
    },
    
    {
      name: "MAYANK",
      role: "Corporate Hospitality",
      image: "/team/team/Mayank.jpg"
    },
    {
      name: "JAGRITI",
      role: "Event Coordinator",
      image: "/team/team/Jagriti.jpg"
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
      image: "/guy.png"
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
      name: "AYIMAAN MOHANTY",
      role: "Media Head",
      image: "/guy.png"
    },
    {
      name: "SHIVAM PATEL",
      role: "Operational Head",
      image: "/team/team/Shivam.jpg"
    },
    {
      name: "VIVEK SAGAR",
      role: "Inci Store",
      image: "/guy.png"
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
      image: "/guy.png"
    },
    {
      name: "SAMEER KASHYAP",
      role: "Inci Force",
      image: "/guy.png"
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
      name: "ALEKYA",
      role: "Creative Head",
      image: "/team/team/Alekya.jpg"
    },
    {
      name: "IMPANA",
      role: "Creative Core Team",
      image: "/team/team/Impana.png"
    },
    {
      name: "SRIGOWRI BHARGAV",
      role: "Creative Core Team",
      image: "/team/team/srigowri.png"
    },
    
    {
      name: "SHRIKRISHNA",
      role: "Inci Special",
      image: "/team/team/Shrikrushna.jpg"
    },
    
    {
      name: "LUKESHWAR",
      role: "Production Head",
      image: "/team/team/Lukeshwar.jpg"
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
      image: "/team/team/Rakshita.png"
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
          <h1 className="relative px-8 py-2 text-6xl font-semibold">Team that made it all possible </h1>
          <p className="text-2xl text-gray-400 py-2 font-semibold">
            A team of dedicated individuals who worked tirelessly to make this event a success.
          </p>
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
      <div className="relative w-[200px] h-[200px]">
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
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="text-center mt-4 space-y-2">
        <h2 className="text-[#DBAE3D] font-semibold text-2xl tracking-wide">{developer.name}</h2>
        <p className="text-[#DBAE3D] text-lg border border-[#DBAE3D] inline-block px-4 py-1">{developer.role}</p>
      </div>

    </div>
  )
}


import Link from "next/link"

// border-[#B98A15]
// <span className="inset-1.5 bg-gradient-to-r from-[#321E09] to-[#B98A15] -z-10 absolute" />
// <span className="block size-2 border border-[#B98A15] bg-[url('/navbtn-sq.svg')] bg-cover absolute top-1/2 right-full translate-x-1/2 rotate-45 -translate-y-1/2" />

function Navlink({ href, displayText }) {
  return <Link href={href} className="relative block translate-x-3/4 text-[#4C2507] duration-300 ease-in-out hover:translate-x-0
    bg-[url('/navbtn-border.svg')] bg-cover bg-left pl-5 pr-0 py-1 text-md">
    <span className="relative block bg-[url('/navbtn-bg.svg')] bg-cover px-4 py-1">
      {displayText}
      <span className="bg-[url('/navbtn-sq.svg')] size-4 bg-cover absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
    </span>
  </Link>
}

export default function Navigation() {
  const links = [
    {href: "#about-us", id: 1, displayText: "About us"},
    {href: "#events", id: 2, displayText: "Events"},
    {href: "#schedule", id: 3, displayText: "Schedules"},
    {href: "#sponsors", id: 4, displayText: "Sponsers"},
    {href: "#i-care", id: 5, displayText: "I-Care"},
    {href: "#merch", id: 6, displayText: "Merchandise"},
    {href: "#", id: 7, displayText: "FAQs"},
  ];

  return <div className="absolute right-0 top-[50vh] -translate-y-1/2 flex flex-col w-max gap-2 overflow-hidden py-4">
    {links.map(link => <Navlink key={link.id} {...link} />)}
  </div>
} 

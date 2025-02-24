import Link from "next/link"

// border-[#B98A15]
// <span className="inset-1.5 bg-gradient-to-r from-[#321E09] to-[#B98A15] -z-10 absolute" />
// <span className="block size-2 border border-[#B98A15] bg-[url('/navbtn-sq.svg')] bg-cover absolute top-1/2 right-full translate-x-1/2 rotate-45 -translate-y-1/2" />

function Navlink({ href, displayText }) {
  return <Link href={href} className="relative block translate-x-3/4 text-amber-100 font-medium duration-300 ease-in-out hover:translate-x-0
    bg-[url('/navbtn-border.svg')] bg-cover bg-left pl-6 pr-0 py-2 text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
    <span className="relative block bg-[url('/navbtn-bg.svg')] bg-cover px-6 py-2 capitalize">
      {displayText}
      <span className="bg-[url('/navbtn-sq.svg')] size-5 bg-cover absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
    </span>
  </Link>
}

export default function Navigation() {
  const links = [
    { href: "#about-us", id: 1, displayText: "About us" },
    { href: "#proShows", id: 2, displayText: "ProShows" },
    { href: "#competition", id: 3, displayText: "Competitions" },
    { href: "#sponsors", id: 4, displayText: "Sponsors" },
    { href: "#i-care", id: 5, displayText: "ICare" },
    { href: "#brochure", id: 6, displayText: "Brochure" },
    { href: "#faqs", id: 7, displayText: "FAQs" },
  ];

  return <div className="absolute right-0 top-[50vh] -translate-y-1/2 flex-col w-max gap-3 overflow-hidden py-4 hidden md:flex">
    {links.map(link => <Navlink key={link.id} {...link} />)}
  </div>
} 

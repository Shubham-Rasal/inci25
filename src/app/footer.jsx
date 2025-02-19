import * as React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const SocialIcon = ({ src, elem, alt }) => (
  elem ? elem : <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 aspect-square size-[32px]"
  />
);

const navigationData = [
  [
    { display: 'Home', link: "#", id: 1 },
    { display: 'Team', link: "#", id: 1 },
    { display: 'Sponsors', link: "#", id: 1 },
  ], [
    { display: 'Merchandise', link: "#", id: 1 },
    { display: 'Pro-show', link: "#", id: 1, active: true },
    { display: 'Events', link: "#", id: 1 },
  ], [
    { display: 'I-care', link: "#", id: 1 },
    { display: 'FAQs', link: "#", id: 1 },
    { display: 'About us', link: "#", id: 1 }
  ]
];

function Navlink({ display, link, active }) {
  return <Link className={`${active ? "text-[#C99F36]" : "text-[#755D21]"}`}
    style={{ textShadow: active ? "0 0 .4rem #DBAE3D" : "" }}
    href={link}>{display}</Link>
}

function Navlist({ items }) {
  return <ul className="flex flex-col">
    {items.map(data => <Navlink {...data} key={data.id} />)}
  </ul>
}

function Navigation() {
  return <div className="flex gap-4 flex-wrap items-center justify-between">
    {navigationData.map(data => <Navlist items={data} />)}
  </div>
}

const socialIcons = [
  { id: 1, elem: <Twitter className="text-[#755D21] size-[32px]" /> },
  { id: 2, elem: <Facebook className="text-[#755D21] size-[32px]" /> },
  { id: 3, elem: <Instagram className="text-[#755D21] size-[32px]" /> },
];

function SocialIcons({ socialIcons }) {
  return <div className="flex gap-4">
    {socialIcons.map(icon => <SocialIcon {...icon} key={icon.id} />)}
  </div>
}

function ContactEmail() {
  return <div className="text-[#D1BD86]">
    <span>Contact Us :</span>
    <br />
    <span>incidentnitk@gmail.com</span>
  </div>
}

export const Footer = () => {
  return <div className="relative grid grid-cols-2 items-end bg-gradient-to-b from-[#1E0E03] via-[#120802] to-black p-8 max-md:grid-cols-1">
    <div className="text-[10vw] relative md:top-12 select-none max-md:text-[20vw] text-transparent bg-clip-text bg-gradient-to-b from-[#755D21] to-[#1E0E03]">Incident</div>

    <span className="max-md:hidden w-[1px] -translate-x-full absolute top-0 left-1/2 block h-full bg-gradient-to-b from-transparent via-[#D1BD86] to-transparent " />

    <div className="flex flex-col gap-[20vh] pl-4 max-md:pl-0 justify-between">
      <Navigation />

      <div className="flex justify-between items-end gap-4 flex-wrap">
        <ContactEmail />
        <SocialIcons socialIcons={socialIcons} />
      </div>
    </div>
  </div>
}

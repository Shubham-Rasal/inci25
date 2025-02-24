"use client";
import * as React from "react";
import { BrandLogo } from "./BrandLogo";
import Roll from "./Roll";
import { Gallery } from "./Sponsors";
import { ResponsiveImage, TshirtOrder } from "./Merch";
// import {Accommodation} from "./Accomodation";
import { Footer } from "./footer";
import { Hero } from "./hero";
import Events from "./Events";
import Icare from "./Icare";
import FAQSection from "./faq";
import Shows from "./Shows";
import Snake from "./Snake";
import Brochures from "./Brochures";
import NavMenu from './NavMenu'
import Team from './Team'
import Competitions from "./Competitions";

export default function BrandShowcase() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <NavMenu />
        <Hero />
        <div id="about-us" className="flex flex-col items-center justify-center mx-auto mt-16">
          <ResponsiveImage
            src="/about.png"
            alt="Additional design element"
            className="object-contain mt-12 w-96 aspect-[5.1] max-md:mt-10"
          />
        </div>
        <Roll />
        <div id="events" className="flex flex-col items-center justify-center mx-auto max-md:pl-5">
          <ResponsiveImage
            src="/events.png"
            alt="Additional design element"
            className="object-contain mt-12 w-96 aspect-[5.1] max-md:mt-10"
          />
        </div>
        <Shows />
        
        {/* <Events /> */}
        <Competitions />
        <Gallery />
        <Icare />
        <Brochures />
        {/* <TshirtOrder /> */}
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

"use client";
import * as React from "react";
import { BrandLogo } from "./BrandLogo";
import Roll from "./Roll";
import { Gallery } from "./Sponsors";
import { ResponsiveImage, TshirtOrder } from "./Merch";
import { Footer } from "./footer";
import { Hero } from "./hero";
import Events, { Schedule } from "./Events";
import Icare from "./Icare";
import Shows from "./Shows";

const topBrands = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1731f699472c5ddd460c27b3c2bd9f5975212714665004e37c7a5e5358a2857?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 1",
    className:
      "object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[101px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce21eac9d0cfce5831c3f16b3770ead50a359e47490bcbbad5978b709b587fa7?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 2",
    className: "object-contain max-w-full aspect-[0.95] w-[135px]",
    withDivider: true,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e59aa3d917b4020110db81d26974c8992da20a4038e9443bb1116c63479095b9?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 3",
    className:
      "object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[102px]",
  },
];

const bottomBrands = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0e77a2883e3361c59f122bdbd7b4f779a5c8ef8160a63f198ae6890ca3c8d18?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 4",
    className:
      "object-contain shrink-0 self-stretch my-auto aspect-[6.06] w-[97px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/704c279e60fd57d445d81e0559cad86ede82d59209c14d531b02c7ce22d9fa22?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 5",
    className:
      "object-contain shrink-0 self-stretch my-auto aspect-[0.55] w-[191px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2ae21999bfc65c47059d729a4a9115bb65e793b9dceaa02a28868a0db2de48e?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 6",
    className: "object-contain self-stretch my-auto aspect-[0.55] w-[226px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/104d674a10db7f108fc9d5be729419b5ae04b703e745f96e21c759da6f410c11?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 7",
    className:
      "object-contain shrink-0 self-stretch my-auto aspect-[0.55] w-[191px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/48751c3ef324aa179e850b02463acb76b10abe089ef7ea304a490ff94bbaafca?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 8",
    className: "object-contain shrink-0 self-start mt-52 w-3 max-md:mt-10",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78673d1a55215678d43ba0d3a1a513854ff4245b68285196f06d71aaf88de13d?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Brand logo 9",
    className:
      "object-contain shrink-0 self-stretch my-auto w-24 aspect-[5.99]",
  },
];

export default function BrandShowcase() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <Hero />
        <div className="flex flex-col items-center justify-center mx-auto max-md:pl-5">
          <ResponsiveImage
            src="/about.png"
            alt="Additional design element"
            className="object-contain mt-12 w-96 aspect-[5.1] max-md:mt-10"
          />
        </div>
        <Roll />
        <div className="flex flex-col items-center justify-center mx-auto max-md:pl-5">
          <ResponsiveImage
            src="/events.png"
            alt="Additional design element"
            className="object-contain mt-12 w-96 aspect-[5.1] max-md:mt-10"
          />
        </div>
        <Shows />
        <Events />
        <Gallery />
        <Icare />
        <TshirtOrder />
        <Footer />
      </div>
    </>
  );
}

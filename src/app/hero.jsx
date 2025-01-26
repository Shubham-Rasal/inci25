import * as React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

export const SocialIcons = ({ icons }) => {
  return (
    <div className="flex flex-col items-end my-auto max-w-full w-[179px]">
      <div className="flex flex-col w-8">
        {icons.slice(0, 3).map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className={`object-contain w-full aspect-[0.78] ${index > 0 ? 'mt-2' : ''}`}
          />
        ))}
      </div>
      <img
        loading="lazy"
        src={icons[3].src}
        alt={icons[3].alt}
        className="object-contain self-stretch mt-2 w-full aspect-[4.37]"
      />
      <img
        loading="lazy"
        src={icons[4].src}
        alt={icons[4].alt}
        className="object-contain mt-2 w-8 aspect-[0.78]"
      />
    </div>
  );
};

export const Hero = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c05de27e8c188dd0fba45a25fc54bcdafbb8769f33a3f2e53767facfd82e5db?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5", className: "", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/187cc597c5563bfe398e7b2523b54a777185da0a734832ae37ff201eb2a7da6b?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5", className: "", alt: "Social media icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4208f000aea94cf8be6c893d2e5fd9dbcbf4c3e34b7013187691b84eebdb6a1?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5", className: "", alt: "Social media icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3556f17c437e271a60907f32a255c99d13c2dcb71a0aec058c058db016efacb?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5", className: "", alt: "Social media banner" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a33047eb33e035cd98da2df05eb7ab8283371b93715d7f905f34246461d03b85?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5", className: "", alt: "Social media icon 4" }
  ];

  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex relative items-center flex-col pt-11 w-full min-h-[840px]  max-md:max-w-full">
        <div className="absolute inset-0 h-full w-full flex flex-col bg-gradient-to-t from-transparent via-amber-950 to-transparent blur-xs">
          <div className="grid grid-cols-12 gap-1 -z-10">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative flex flex-col h-full">
                <div className={`${i % 2 === 0 ? 'animate-vertical-marquee' : 'animate-vertical-marquee-reverse'} flex flex-col`}>
                  {[...Array(40)].map((_, j) => (
                    <div key={j} className="flex justify-center items-center py-2">
                      <Image
                        src={`/letter${Math.floor(Math.random() * 4) + 1}.svg`}
                        width={60}
                        height={60}
                        alt="Letter"
                        className="object-contain aspect-square size-8"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex relative flex-col   w-full max-md:max-w-full">
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f38121195e6973b08059816db7eb8f4bda5a2d0ae9e175443120b006c12e1f?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Logo"
            className="object-contain aspect-square w-[60px]"
          /> */}
          <div className="flex flex-wrap justify-between self-center w-[300px] lg:w-[400px] max-md:mt-10">
            <div className="relative">
              <img
                loading="lazy"
                src="/logo.png"
                alt="Incident artwork"
                className="object-contain w-full aspect-square rounded-full"
              />
              <div className="absolute inset-0  rounded-full blur-sm animate-pulse shadow-[0px_0px_71px_rgba(243,146,49,1)]" />
            </div>
            <div className="self-center text-center text-xl w-full mt-16 max-md:mt-10 max-md:text-4xl">
              Incident
            </div>
            {/* <SocialIcons icons={socialIcons} /> */}
          </div>
          <div className="self-center text-center mt-6 w-1/2 lg:text-3xl text-yellow-800 uppercase max-md:max-w-full">
            UDBHAV - the rhythm of timeless essence
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-transparent blur" />
      <Navigation />
    </div>
  );
};

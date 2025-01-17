import * as React from "react";


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
    <div className="flex overflow-hidden flex-col bg-stone-950">
      <div className="flex relative flex-col pt-11 w-full min-h-[840px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5eb8779290a064fc99dd7031ff43e5ac460865eac7dff95308c92265e44064d?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col pl-14 w-full max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f38121195e6973b08059816db7eb8f4bda5a2d0ae9e175443120b006c12e1f?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Logo"
            className="object-contain aspect-square w-[60px]"
          />
          <div className="flex flex-wrap gap-5 justify-between self-end mt-20 max-w-full w-[851px] max-md:mt-10">
            <div className="flex flex-col text-7xl text-orange-200 whitespace-nowrap max-md:text-4xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c972068bd4d3c21279abc8e714d9ff56e24378ccee59e68deb09817cb44c0d2e?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
                alt="Incident artwork"
                className="object-contain w-full aspect-square shadow-[0px_0px_71px_rgba(243,146,49,1)]"
              />
              <div className="mt-16 max-md:mt-10 max-md:mr-1.5 max-md:text-4xl">
                Incident
              </div>
            </div>
            <SocialIcons icons={socialIcons} />
          </div>
          <div className="self-center mt-6 text-3xl text-yellow-800 uppercase max-md:max-w-full">
            UDBHAV - the rhythm of timeless essence
          </div>
        </div>
        <div className="flex relative mt-8 w-full min-h-[141px] max-md:max-w-full" />
      </div>
    </div>
  );
};
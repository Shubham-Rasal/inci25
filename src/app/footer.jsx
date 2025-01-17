import * as React from 'react';


export const NavItem = ({ text, isHighlighted }) => (
  <div className={`mt-1 ${isHighlighted ? 'text-orange-400' : ''}`}>
    {text}
  </div>
);


export const SocialIcon = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 aspect-square w-[51px]"
  />
);

const navigationData = [
  ['Home', 'Team', 'Sponsors'],
  ['Merchandise', 'Pro-show', 'Events'],
  ['I-care', 'FAQs', 'About us']
];

export const Navigation = () => (
  <div className="flex flex-wrap gap-10 text-xl tracking-wide leading-none text-yellow-800 max-md:mr-2 max-md:max-w-full">
    {navigationData.map((column, columnIndex) => (
      <div 
        key={columnIndex} 
        className={`flex flex-col ${
          columnIndex === 1 
            ? 'whitespace-nowrap w-[127px]' 
            : 'flex-1 shrink whitespace-nowrap basis-0'
        }`}
      >
        {column.map((item, itemIndex) => (
          <NavItem 
            key={itemIndex} 
            text={item} 
            isHighlighted={item === 'Pro-show'}
          />
        ))}
      </div>
    ))}
  </div>
);


const socialIcons = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4aa904acdcbc811188b1c1bda2b9fcf0ff464920a8135fe749b20b2630ced3a?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5', alt: 'Social Media Icon 1' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2debe8bb03a9dea3f94dde4248857130164b36a0c82b1caaa637eed082655ab3?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5', alt: 'Social Media Icon 2' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e797c8e0284b2f1062f634fd44f2c6a194a6b763ad69ee39c588ae0e56d70a94?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5', alt: 'Social Media Icon 3' }
];

export const Footer = () => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 items-start pt-20 pr-20 pl-7 max-md:px-5">
      <div className="grow self-end mt-44 text-[180px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        incident
      </div>
      <div className="shrink-0 self-start w-0 h-[372px]" />
      <div className="flex flex-col my-auto max-md:max-w-full">
        <Navigation />
        <div className="flex flex-wrap gap-10 items-center mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch my-auto text-xl tracking-wide leading-6 text-orange-300">
            <span className="text-orange-300">contact us:</span>
            <br />
            <span className="text-2xl">incidentnitk@gmail.com</span>
          </div>
          <div className="flex gap-10 justify-center items-end self-stretch my-auto">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
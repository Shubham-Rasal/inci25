import * as React from "react";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39c6bd37e8bb7ef3fe0d47550005e9e2eba6cf7f2ce6380283f279e604f4d5f4?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 1",
    className: "object-contain z-10 aspect-[1.01] w-[213px] max-md:-mr-1.5"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a9d8394613287c9cea1c53dacec7537a9cc00e4511d10a9045dd9eb2f17aed7?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 2",
    className: "object-contain z-10 aspect-[1.01] w-[213px] max-md:-mr-1.5"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d2b9dd7dc795a959e1e85370284f5705a12fe0f698e755b05c88aa5fee363b4?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 3",
    className: "object-contain z-10 aspect-[1.01] w-[214px] max-md:-mr-1.5"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a5e5ae95283040bfa77db3238ce7490e8a2d16613c89fd4ff0d1830aeada16e?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 4",
    className: "object-contain z-10 w-full aspect-[1.05] max-md:mr-0"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ca0f36123050949400ae590ea3767a673a64e98a792a38d22772f65c9e0917?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 5",
    className: "object-contain shrink-0 self-stretch my-auto aspect-[1.01] w-[201px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c6e447627d0ed8b7115ce2da396e0c339854979ac51065f6ec7b255f706cb2c?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5",
    alt: "Gallery image 6",
    className: "object-contain shrink-0 self-stretch my-auto aspect-square w-[200px]"
  }
];



export const Gallery = () => {
  const brands = [
    { logo: "/logo/amul.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/L.1.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/sbi.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/quest.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/tribe.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/newMang.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/niveus.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/krafton.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/ease.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/uni.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/jioSaavn.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/smaaash.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/spykar.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/mcf.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/stockgro.png", svg: "/sponsorSVG.svg" },
    // { logo: "/logo/remark.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/remarkSkill.jpg", svg: "/sponsorSVG.svg" },
    { logo: "/logo/gleam.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/goldflxhash.png", svg: "/sponsorSVG.svg" },
    { logo: "/logo/unstop.jpg", svg: "/sponsorSVG.svg" },
    
    // { logo: "/logos/brand2.png", svg: "/svgs/frame2.svg" },
    // { logo: "/logos/brand3.png", svg: "/svgs/frame3.svg" },
    // { logo: "/logos/brand4.png", svg: "/svgs/frame4.svg" }
  ];
  return (
    <div className="flex flex-col items-center mx-auto overflow-hidden max-md:pl-5">
      <div className="flex overflow-hidden flex-col justify-center items-center py-20 w-full  max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1676px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/097abe75c6b88520e087c1e89d951ad324405e5a0653d4da080ecf1ad71da830?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Main header image"
            className="object-contain self-center max-w-full aspect-[4.31] w-[270px]"
          />
          {/* <div className="flex flex-wrap justify-center gap-10 mx-auto w-full max-md:flex-col mt-24">
            {galleryImages.map((image, index) => (
              <GalleryItem key={index} image={image} />
            ))}
          </div> */}
          <div className="flex flex-wrap justify-center gap-10 mx-auto w-full max-md:flex-col mt-24">
      {brands.map((item, index) => (
        <GalleryItem key={index} logoSrc={item.logo} svgSrc={item.svg} />
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

// export const GalleryItem = ({ logoSrc, svgSrc }) => {
//   return (
//     <div id="sponsors" className="flex flex-col self-center justify-center items-center my-auto w-[201px]">
//       <img
//         loading="lazy"
//         src={image.src}
//         alt={image.alt}
//         className={image.className}
//       />
      
//     </div>
//   );
// };

export const GalleryItem = ({ logoSrc, svgSrc }) => {
  return (
    <div id="sponsors" className="flex flex-col self-center justify-center items-center my-auto w-[201px]">
      <div className="relative w-[200px] h-[200px] border-gradient flex items-center justify-center overflow-hidden" style={{
        borderImageSource: "linear-gradient(180deg, #755D21 0%, #DBAE3D 98%)"
      }}>
        <img src={svgSrc} className="absolute inset-0 w-full h-full object-contain" />
        <img 
          src={logoSrc} 
          className="absolute max-w-[40%] max-h-[40%] object-contain items-center " 
        />
      </div>
    </div>
  );
};

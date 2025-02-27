'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Footer } from '../footer';
import NavMenu from '../NavMenu';


export default function Merch() {
  const router = useRouter();

  return (
    <>
    <NavMenu />
    <div id="merch" className="flex overflow-hidden flex-col px-10 py-10 max-md:mt-10 lg:w-4/5 lg:mx-auto max-md:px-5 max-md:py-24">
      <div className="relative flex items-center justify-center w-full px-4 md:px-0">
        {/* <button onClick={() => router.back()} className="absolute left-4 md:left-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
          <ResponsiveImage src="/Frame 1171275940.png" alt="Back sign" className="w-full h-full object-contain" />
        </button> */}
        <ResponsiveImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df5261bde5c5f1fa859e56b5964ed974161902823418d087bb930caafb6fc2bf"
          alt="Incident 25 Logo"
          className="object-contain self-center max-w-full aspect-[4.31] w-[263px]"
        />
      </div>

      <div className="flex overflow-hidden flex-col mt-14 w-full border border-yellow-600 border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:max-w-full">
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3db7510a465e07dd37b41b06973ba7fceea86a633ba652d19a13b6e9f8455c" alt="" className="object-contain shrink-0 aspect-square w-[59px]" />
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee1746c44e87bd3e2057dded64377d036996da21fa1998a19557dd951152fa6" alt="" className="object-contain shrink-0 self-start max-w-full aspect-[12.82] w-[154px]" />
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be8b357be19bfcbcc6259418efb9db6ab08256232f1d3cef8f89a6e693643d4" alt="" className="object-contain shrink-0 aspect-[0.98] w-[58px]" />
        </div>

        <div className="lg:flex w-full items-center self-center mx-auto mt-6">
          <div className="flex flex-col grow shrink-0 basis-0 w-full max-md:max-w-full">
            <div className="self-end w-full max-w-[1072px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                  <BorderedCircle>
                    <ResponsiveImage
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac3de71d51821b46dc19f40ef4772f37b1f9f9a0b17e86c7dedb4c42ea45123"
                      alt="T-shirt design preview"
                      className="object-contain w-full aspect-square"
                    />
                  </BorderedCircle>
                </div>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-orange-200 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col justify-start max-md:max-w-full px-4 text-left">
                      <div className="text-3xl tracking-wide leading-none max-md:max-w-full">Incident'25 Merch</div>
                      <div className="mt-9 text-xl tracking-wide leading-6">
                        Price: ₹399 - All shirts are oversized.
                        <br />
                        Available Sizes: S, M, L, XL, XXL
                      </div>
                      <div className="mt-9 text-lg tracking-normal leading-5 max-md:max-w-full">
                        Get your exclusive Incident'25 merchandise! These premium oversized T-shirts feature a sleek design, making them the perfect way to commemorate the event. Don't miss out on this limited edition!
                      </div>
                      <div className="flex justify-center mt-12 max-md:mt-10">
                        <a
                          href="https://forms.gle/iaLw1miAratK6QU98"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ResponsiveImage
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48844304c01059a3badfa7d0d6aec6e8e90d445a9425ac61f395689aec078e06"
                            alt="buy now"
                            className="object-contain max-w-full aspect-[5.1]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-16 flex-row justify-between shrink-0 basis-0 w-full max-md:max-w-full">
            <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69c87d0f1e1254f67ba598492526087fc368d6e4ba4807f39ca9c5f4e15fdea" alt="" className="object-contain shrink-0 self-end mt-96 aspect-[0.98] w-[58px] max-md:mt-10" />
            <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab3cc9b0f6ddda4a8110b649b3fe625517bfed8cc4ce09620556cab333c4989" alt="" className="object-contain shrink-0 self-end mt-96 aspect-[0.98] w-[58px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
}

const ResponsiveImage = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

 const BorderedCircle = ({ children }) => {
  return (
    <div className="flex flex-col justify-center p-1.5 rounded-full border border-yellow-600 border-solid">
      <div className="flex flex-col justify-center p-1.5 rounded-full border border-yellow-600 border-dashed">
        <div className="flex flex-col justify-center p-14 rounded-full border border-yellow-600 border-solid max-md:px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

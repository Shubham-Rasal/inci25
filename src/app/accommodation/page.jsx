'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Footer } from '../footer';

const Accommodation = () => {
  const router = useRouter();

  return (
    <>
    <div id="accommodation" className="flex flex-col px-10 py-10 overflow-hidden max-md:mt-5 lg:w-4/5 lg:mx-auto max-md:px-5 max-md:py-24">
      <div className="relative flex items-center justify-center w-full px-4 md:px-0">
        <button onClick={() => router.back()} className="absolute left-4 md:left-0 w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
          <ResponsiveImage src="/Frame 1171275940.png" alt="Back sign" className="w-full h-full object-contain" />
        </button>
        <ResponsiveImage src="/accommodation.png" alt="Accommodation" className="object-contain max-w-full w-[180px] md:w-[263px] aspect-[4.31]" />
      </div>

      <div className="flex flex-col w-full mt-14 border border-yellow-600 border-solid overflow-hidden max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-between gap-5 max-md:max-w-full">
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3db7510a465e07dd37b41b06973ba7fceea86a633ba652d19a13b6e9f8455c?apiKey=0def968ddfc54ad08cb5c8196cfa1cf5" alt="Decorative element" className="object-contain shrink-0 aspect-square w-[59px]" />
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee1746c44e87bd3e2057dded64377d036996da21fa1998a19557dd951152fa6?apiKey=0def968ddfc54ad08cb5c8196cfa1cf5" alt="Header image" className="object-contain shrink-0 self-start max-w-full aspect-[12.82] w-[154px]" />
          <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be8b357be19bfcbcc6259418efb9db6ab08256232f1d3cef8f89a6e693643d4?apiKey=0def968ddfc54ad08cb5c8196cfa1cf5" alt="Decorative element" className="object-contain shrink-0 aspect-[0.98] w-[58px]" />
        </div>
        <div className="lg:flex w-full items-center justify-center mx-auto self-center mt-6">
          <div className="flex flex-col w-full grow shrink-0 basis-0 max-md:max-w-full">
            <div className="self-end w-full max-w-[1072px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[41%] max-md:w-full">
                  <ResponsiveImage src="/accommidation-image.png" alt="Accommodation Image" className="object-contain w-full aspect-square" />
                </div>
                <div className="flex flex-col w-[59%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col grow text-orange-200 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-4 text-left max-md:max-w-full">
                      <h2 className="text-3xl tracking-wide leading-none max-md:max-w-full">Accommodation Details</h2>
                      <p className="mt-9 text-lg tracking-normal leading-5 max-md:max-w-full">
                        Planning to attend Incident 2025 at NITK? We offer dedicated accommodation services, ensuring a comfortable and convenient stay during the fest. Our facilities provide a seamless experience, allowing you to focus on the excitement of the event.
                      </p>
                      <p className="mt-4 text-lg tracking-normal leading-5 max-md:max-w-full">
                        Whether you’re a participant or a guest, enjoy well-facilitated lodging within the campus. Our accommodations are designed to offer a vibrant and immersive experience, making your stay both enjoyable and hassle-free.
                      </p>
                    </div>
                    <div className="flex justify-center mt-12 max-md:mt-10">
                      <a href="https://forms.gle/TUunQcPYWt87Nwtv5" target="_blank" rel="noopener noreferrer">
                        <ResponsiveImage src="/Group.png" alt="Enquire Now" className="object-contain max-w-full aspect-[5.1]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between shrink-0 basis-0 w-full max-md:max-w-full">
            <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69c87d0f1e1254f67ba598492526087fc368d6e4ba4807f39ca9c5f4e15fdea?apiKey=0def968ddfc54ad08cb5c8196cfa1cf5" alt="Decorative element" className="object-contain mt-10 aspect-[1.02] w-[60px]" />
            <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab3cc9b0f6ddda4a8110b649b3fe625517bfed8cc4ce09620556cab333c4989?apiKey=0def968ddfc54ad08cb5c8196cfa1cf5" alt="Decorative element" className="object-contain shrink-0 self-end mt-96 aspect-[0.98] w-[58px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

const ResponsiveImage = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

export default Accommodation;

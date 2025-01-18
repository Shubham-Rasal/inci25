'use client'

export const TshirtOrder= () => {
  return (
    <div className="flex overflow-hidden flex-col px-20 py-32max-md:px-5 max-md:py-24">
      <ResponsiveImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df5261bde5c5f1fa859e56b5964ed974161902823418d087bb930caafb6fc2bf?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
        alt="Incident 25 Logo"
        className="object-contain self-center max-w-full aspect-[4.31] w-[263px]"
      />
      <div className="flex overflow-hidden flex-col mt-14 w-full border border-yellow-600 border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3db7510a465e07dd37b41b06973ba7fceea86a633ba652d19a13b6e9f8455c?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Decorative element"
            className="object-contain shrink-0 aspect-square w-[59px]"
          />
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee1746c44e87bd3e2057dded64377d036996da21fa1998a19557dd951152fa6?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Header image"
            className="object-contain shrink-0 self-start max-w-full aspect-[12.82] w-[154px]"
          />
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be8b357be19bfcbcc6259418efb9db6ab08256232f1d3cef8f89a6e693643d4?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Decorative element"
            className="object-contain shrink-0 aspect-[0.98] w-[58px]"
          />
        </div>
        <div className="flex flex-wrap px-16 items-center justify-center mx-auto mt-6 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="self-end w-full max-w-[1072px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                  <BorderedCircle>
                    <ResponsiveImage
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac3de71d51821b46dc19f40ef4772f37b1f9f9a0b17e86c7dedb4c42ea45123?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
                      alt="T-shirt design preview"
                      className="object-contain w-full aspect-square"
                    />
                  </BorderedCircle>
                </div>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-orange-200 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                      <div className="text-3xl tracking-wide leading-none max-md:max-w-full">
                        incident'25 T-shirt Orders
                      </div>
                      <div className="mt-9 text-xl tracking-wide leading-6">
                        Price: ₹399 , All shirts are oversized.
                        <br />
                        Available Sizes: S, M, L, XL, XXL
                        <br />
                      </div>
                      <div className="mt-9 text-lg tracking-normal leading-5 max-md:max-w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                    </div>
                    <ResponsiveImage
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/48844304c01059a3badfa7d0d6aec6e8e90d445a9425ac61f395689aec078e06?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
                      alt="Additional design element"
                      className="object-contain mt-12 max-w-full aspect-[5.1] w-[347px] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ResponsiveImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69c87d0f1e1254f67ba598492526087fc368d6e4ba4807f39ca9c5f4e15fdea?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
              alt="Decorative element"
              className="object-contain mt-2.5 aspect-[1.02] w-[60px]"
            />
          </div>
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab3cc9b0f6ddda4a8110b649b3fe625517bfed8cc4ce09620556cab333c4989?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Decorative element"
            className="object-contain shrink-0 self-end mt-96 aspect-[0.98] w-[58px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};










import React from 'react';


export const ResponsiveImage= ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
    />
  );
};




export const BorderedCircle= ({ children }) => {
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
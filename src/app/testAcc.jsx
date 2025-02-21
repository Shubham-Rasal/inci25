'use client'

export const Accommodation = () => {
  return (
    <div id="accomodation" className="flex overflow-hidden flex-col px-20 py-32 max-md:mt-10 lg:w-4/5 lg:mx-auto max-md:px-5 max-md:py-24">
      <ResponsiveImage
        src="/acc.png"
        alt="Incident 25 Logo"
        className="object-contain self-center max-w-full aspect-[4.31] w-[263px]"
      />
      <div className="flex overflow-hidden flex-col mt-14 w-full border border-yellow-600 border-solid max-md:mt-10  h-full lg:h-[500px] max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:max-w-full">
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
        <div className="lg:flex  w-full items-center justify-center self-center mx-auto px-4 text-center mt-6">
          <div className="lg:w-1/2 text-[#C4A462]">
            <div className="flex items-center mb-6">
              <ResponsiveImage
                src="https://example.com/your-image.png"
                alt="Left side image"
                className="object-contain w-1/3 max-md:w-1/2 mr-4"
              />
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-cinzel mb-4">Reservation</h3>
                <p className="mb-6 text-lg">
                  Experience luxury and comfort in our carefully designed accommodations.
                  Each room is crafted to provide an unforgettable stay with attention to every detail.
                </p>
                <div className="mb-6">
                  <h4 className="font-cinzel mb-2">CONTACT:</h4>
                  <div className="space-y-2">
                    <p>NAME: +1 234 567 890</p>
                    <p>NAME: +1 234 567 890</p>
                    <p>NAME: +1 234 567 890</p>
                  </div>
                </div>
              </div>
            </div>
            <ResponsiveImage
              src="/enquiry.png"
              className="object-contain mt-12 max-w-full aspect-[5.1] max-md:mt-10 mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between shrink-0 basis-0 w-full max-md:max-w-full">
          <ResponsiveImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69c87d0f1e1254f67ba598492526087fc368d6e4ba4807f39ca9c5f4e15fdea?placeholderIfAbsent=true&apiKey=0def968ddfc54ad08cb5c8196cfa1cf5"
            alt="Decorative element"
            className="object-contain shrink-0 self-end mt-96 aspect-[0.98] w-[58px] max-md:mt-10"
          />
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

export const ResponsiveImage = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export const BorderedCircle = ({ children }) => {
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

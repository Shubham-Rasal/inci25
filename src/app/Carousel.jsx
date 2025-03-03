import { ArrowRight } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";





const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, date, location } = slide;

  return (
    <div className="[perspective:900px] ">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[40vmin] h-full mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full mx-auto  h-full rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 md:pl-6 object-cover opacity-100 scale-110  transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {/* {current === index && (
            <div className="absolute inset-0  transition-all duration-1000" />
          )} */}

        <article
          className={`relative mt-[75vmin] mx-auto md:mt-[60vmin]  p-[4vmin] transition-opacity duration-1000  ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
            {date}
          </h2>
          <div className="flex justify-center">
           {location}
          </div>
        </article>
        </div>
      </li>
    </div>
  );
};




const CarouselControl = ({
  type,
  title,
  handleClick,
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};



export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setCurrentX(event.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const distance = startX - currentX;
    if (distance > 50) {
      handleNextClick();
    } else if (distance < -50) {
      handlePreviousClick();
    }
    setIsDragging(false);
  };

  const id = useId();

  return (
    <div
      className="relative w-[40vmin] h-full mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
      ref={carouselRef}
    >
      <ul
        className="absolute flex mx-[-4vmin] h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute inset-0 lg:top-64 top-32 flex gap-4 lg:mt-32 mt-2 items-center justify-between">
        <button
          type="button"
          className="rounded-full  size-96 " // Increased padding for smaller devices
          onClick={handlePreviousClick}
        >
          <img src="/ra.svg" alt="Arrow" className="object-contain  z-30" />
        </button>
        <button
          type="button"
          className="rounded-full  size-96 " // Increased padding for smaller devices
          onClick={handleNextClick}
        >
          <img src="/la.svg" alt="Arrow" className="object-contain  z-30" />
        </button>
      </div>
    </div>
  );
} 
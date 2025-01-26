'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
    {
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
    {
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto text-[#ca9d34] p-[120px] space-y-0 flex justify-between">
      <div className="flex-1">
        <Image
          src="/faq.png"
          alt="FAQ Illustration"
          width={324}
          height={158}
          className="rounded-lg "
        />
      </div>

      <div className="flex-1 space-y-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative  "
          >
            <Image
              src="/faqQues.png"
              alt="FAQ Background"
              layout="fill"
              // objectFit="cover"
              className="rounded-lg "
            />
            <div
              className="relative flex justify-between items-center cursor-pointer p-6"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold z-10">{faq.question}</h3>
              {/* <Image
                src="/chevronDown.png"
                alt="Chevron Icon"
                width={22.17}
                height={28}
                className="absolute z-10"
                style={{
                  top: '28.92px',
                  left: '601.5px',
                  background: 'linear-gradient(180deg, #B98A14 30%, #FBC743 50%, #B98A14 67%)',
                  border: '0.18px solid #1E0E03',
                  transform: 'rotate(-90deg)'
                }}
              /> */}

            </div>

            {activeIndex === index && (
              <p className="relative mt-4 text-sm text-[#5e4c22] z-10 px-10 pb-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

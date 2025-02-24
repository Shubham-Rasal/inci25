'use client'

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';

const AccordionContext = createContext(null);

function useAccordion() {
  return useContext(AccordionContext);
}

function AccordionProvider({ children }) {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  function toggleAccordion(id) {
    return () => {
      setOpenAccordionId(openAccordionId === id ? null : id);
    };
  }

  return (
    <AccordionContext.Provider value={{ openAccordionId, toggleAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
}

function FAQAccordion({ question, answer, id }) {
  const { openAccordionId, toggleAccordion } = useAccordion();
  const isOpen = openAccordionId === id;
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      onClick={toggleAccordion(id)}
      className="border border-[#B98A15] p-4 rounded-lg tracking-wide cursor-pointer transition w-full max-w-md"
    >
      <div className="flex justify-between tracking-wide items-center font-bold">
        <span>{question}</span>
        <ChevronDownIcon
          className={`text-[#B98A15] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <p ref={contentRef} className="mt-1 text-gray-500">
          {answer}
        </p>
      </div>
    </div>
  );
}

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'Will accommodation be provided for outstation participants?',
      answer: (
        <>
          Yes, accommodation will be available for outstation participants. You can find details and
          book your stay through this <Link href="/accommodation" className="text-blue-600 underline">link</Link>.
        </>
      ),
    },
    {
      id: 2,
      question: 'Where can I buy official Incident merchandise?',
      answer: (
        <>
          Incident 2025 merchandise, including T-shirts and hoodies, will be available online and at
          designated stalls during the fest. Stay tuned for pre-order details{' '}
          <Link href="/merch" className="text-blue-600 underline">here</Link>!
        </>
      ),
    },
    {
      id: 3,
      question: 'How do I register for events?',
      answer:
        'You can register for events through the official Incident website under their respective categories. Make sure to check deadlines and participation rules before signing up!',
    },
    {
      id: 4,
      question: 'Is there an entry fee for attending the fest?',
      answer:
        'Entry to the fest is free for NITK students. For external participants, there might be a registration fee depending on the events they wish to attend.',
    },
    {
      id: 5,
      question: 'How can I stay updated on the latest announcements?',
      answer:
        'Follow our official social media handles and check the website regularly for updates regarding events, registrations, and schedules.',
    },
  ];

  return (
    <div id="faqs" className="p-4 select-none flex flex-wrap items-start justify-evenly gap-4 tracking-wide">
      <Image src="/faq.png" alt="FAQ Illustration" width={600} height={800} className="w-80 md:w-96" />

      <AccordionProvider>
      <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQAccordion key={faq.id} {...faq} />
          ))}
        </div>
      </AccordionProvider>
    </div>
  );
};

export default FAQSection;


// return (
//   <div id="faqs" className="p-4 select-none flex flex-wrap items-start justify-evenly gap-4">
//     <Image
//       src="/faq.png"
//       alt="FAQ Illustration"
//       width={400}
//       height={800}
//     />

//     <AccordionProvider>
//       <div className="flex flex-col gap-2">
//         {faqs.map(faq => <FAQAccordion key={faq.id} {...faq} />)}
//       </div>
//     </AccordionProvider>
//   </div>
// );





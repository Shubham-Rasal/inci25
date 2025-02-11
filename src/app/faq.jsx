'use client'

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';

const AccordionContext = createContext(null);

function useAccordion() {
  return useContext(AccordionContext);
}

function AccordionProvider({ children }) {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  function toggleAccordion(id) {
    return () => {
      if (openAccordionId === id) setOpenAccordionId(() => null);
      else setOpenAccordionId(() => id);
    }
  }

  return <AccordionContext.Provider value={{
    openAccordionId,
    toggleAccordion
  }}>
    {children}
  </AccordionContext.Provider>
}

function FAQAccordion({ question, answer, id }) {
  const { openAccordionId, toggleAccordion } = useAccordion();
  const isOpen = openAccordionId === id;
  const [accHeight, setAccHeight] = useState(0);

  let accChild = useRef(null);

  useEffect(() => {
    setAccHeight(() => accChild.current?.offsetHeight);
  }, []);

  return <div onClick={toggleAccordion(id)} className="border border-[#B98A15] p-4 rounded cursor-pointer transition">
    <div className="flex gap-4 font-bold">
      {question}
      <ChevronDownIcon className={`${isOpen ? "rotate-180" : ""} text-[#B98A15] transition`} />
    </div>
    <div style={{ height: (isOpen ? accHeight : 0) + "px" }} className={`h-0 overflow-hidden transition-all duration-300`}>
      <p ref={accChild}>{answer}</p>
    </div>
  </div>
}

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
    {
      id: 2,
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
    {
      id: 3,
      question: 'Will accomodation be provided for outstation participants?',
      answer: 'Yes you can find details on this link here',
    },
  ];

  return (
    <div id="faqs" className="p-4 select-none flex flex-wrap items-start justify-evenly gap-4">
      <Image
        src="/faq.png"
        alt="FAQ Illustration"
        width={400}
        height={800}
      />

      <AccordionProvider>
        <div className="flex flex-col gap-2">
          {faqs.map(faq => <FAQAccordion key={faq.id} {...faq} />)}
        </div>
      </AccordionProvider>
    </div>
  );
};

export default FAQSection;

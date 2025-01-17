'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDownIcon } from 'lucide-react'

const faqs = [
  {
    question: "What is Incident?",
    answer: "Incident is a cultural festival that celebrates the rhythm of timeless essence through various art forms and performances."
  },
  {
    question: "When and where is it happening?",
    answer: "The event details and venue information will be announced soon. Stay tuned to our social media channels for updates."
  },
  {
    question: "How can I participate?",
    answer: "You can participate by registering through our website once registrations open. We have various categories for participation."
  },
  {
    question: "Is there a registration fee?",
    answer: "Registration fees vary depending on the events you wish to participate in. Early bird discounts are available."
  },
  {
    question: "What about merchandise?",
    answer: "Official Incident merchandise will be available for purchase at the venue and through our online store."
  },
  {
    question: "How can I contact the organizers?",
    answer: "You can reach out to us through our social media channels or email us at contact@incident.com"
  }
]

export default function FAQSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#1a1408]">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl text-[#c4a962] mb-8 font-sanskrit text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="relative border-none"
            >
              <AccordionTrigger className="group w-full">
                <div className="relative w-full bg-[#1a1408] py-4 px-6">
                  {/* Geometric border */}
                  <div className="absolute inset-0 border-2 border-[#c4a962]">
                    {/* Left arrows */}
                    <div className="absolute left-0 top-0 h-full w-8 flex items-center">
                      <div className="w-full h-[2px] bg-[#c4a962]"></div>
                      <div className="absolute left-0 w-3 h-3 border-l-2 border-b-2 border-[#c4a962] transform -skew-x-45"></div>
                    </div>
                    {/* Right arrows */}
                    <div className="absolute right-0 top-0 h-full w-8 flex items-center">
                      <div className="w-full h-[2px] bg-[#c4a962]"></div>
                      <div className="absolute right-0 w-3 h-3 border-r-2 border-b-2 border-[#c4a962] transform skew-x-45"></div>
                    </div>
                  </div>
                  
                  {/* Question text */}
                  <span className="text-[#c4a962] font-sanskrit text-lg">
                    {faq.question}
                  </span>
                  
                  {/* Custom chevron */}
                  <ChevronDownIcon 
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#c4a962] transform transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 pb-4 text-[#8b7355]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


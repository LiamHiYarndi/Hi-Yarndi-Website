import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Will this show up on a drug test?",
      answer: "No. Our hemp seed oil is 100% THC-free and compliant with FSANZ standards."
    },
    {
      question: "How should I consume it?",
      answer: "We recommend one can post-workout or whenever you need hydration. It is best served chilled."
    },
    {
      question: "Is it suitable for vegans?",
      answer: "Yes, all our products are 100% plant-based and contain no animal products."
    },
    {
      question: "Shipping information?",
      answer: "We ship Australia-wide. Standard shipping is 3-5 business days."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-[800px] mx-auto">
       <h2 className="text-3xl font-semibold mb-12 text-center tracking-tight">Q&A</h2>
       <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
         {faqs.map((faq, index) => (
           <div key={index} className="bg-white">
             <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                onClick={() => toggle(index)}
             >
               <span className="text-lg font-medium text-premium-black group-hover:text-gray-600 transition-colors">{faq.question}</span>
               {openIndex === index ? <Minus className="w-5 h-5 text-soft-gray" /> : <Plus className="w-5 h-5 text-soft-gray" />}
             </button>
             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
               <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
};
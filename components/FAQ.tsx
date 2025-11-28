
import React, { useState } from 'react';
import { FAQItem, SiteMode } from '../types';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  siteMode?: SiteMode;
}

export const FAQ: React.FC<FAQProps> = ({ siteMode = 'performance' }) => {
  const performanceFaqs: FAQItem[] = [
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

  const merchFaqs: FAQItem[] = [
      {
          question: "How do the hoodies fit?",
          answer: "Our hoodies feature a boxy, oversized cut with dropped shoulders for that streetwear silhouette. If you prefer a standard/slimmer fit, we recommend sizing down."
      },
      {
          question: "Why Hemp clothing?",
          answer: "Hemp is 4x more durable than cotton, naturally antimicrobial, and requires 50% less water to grow. It gets softer with every wash while retaining its strength."
      },
      {
          question: "Care Instructions?",
          answer: "To keep the puff print and fabric in top condition, wash cold inside out and hang dry in the shade. Do not tumble dry."
      },
      {
          question: "Returns & Exchanges?",
          answer: "We offer 30-day returns on all unworn items with tags attached. If the fit isn't right, we'll swap it."
      }
  ];

  const faqs = siteMode === 'merch' ? merchFaqs : performanceFaqs;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-6 mx-4 md:mx-6 bg-theme-bg rounded-[2.5rem] shadow-xl border border-theme-border/50">
       <div className="max-w-[800px] mx-auto">
           <h2 className="text-3xl font-semibold mb-12 text-center tracking-tight text-theme-text">
               {siteMode === 'merch' ? 'Culture Q&A' : 'Performance Q&A'}
           </h2>
           <div className="divide-y divide-theme-border border-t border-b border-theme-border">
             {faqs.map((faq, index) => (
               <div key={index} className="bg-transparent">
                 <button 
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                    onClick={() => toggle(index)}
                 >
                   <span className="text-lg font-medium text-theme-text group-hover:text-theme-sub transition-colors pr-4">{faq.question}</span>
                   {openIndex === index ? <Minus className="w-5 h-5 text-theme-sub shrink-0" /> : <Plus className="w-5 h-5 text-theme-sub shrink-0" />}
                 </button>
                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-theme-sub leading-relaxed">{faq.answer}</p>
                 </div>
               </div>
             ))}
           </div>
       </div>
    </section>
  );
};

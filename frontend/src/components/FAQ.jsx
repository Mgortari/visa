import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqData } from '../mock/visaData';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-slate-600">
            Respuestas a las dudas más comunes sobre el proceso de visa
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="bg-gray-100 rounded-xl px-6 border-2 border-slate-200 hover:border-blue-300 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

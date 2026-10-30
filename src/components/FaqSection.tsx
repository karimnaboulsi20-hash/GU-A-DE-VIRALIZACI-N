import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/upsellContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto border-t border-slate-900">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-semibold mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          Preguntas Frecuentes
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
          Resolvemos Todas Tus Dudas
        </h3>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-[#070A16] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

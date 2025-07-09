"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import type { FAQ } from "../types";

interface FAQListProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQList({ faqs, className }: FAQListProps) {
  return (
    <div
      className={`columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6 ${
        className || ""
      }`}
    >
      {faqs.map((faq) => (
        <article key={faq.id} className="break-inside-avoid mb-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value={faq.id}
              className="border border-white/10 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 ease-in-out"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
                <h3 className="font-oxanium font-semibold text-white text-base leading-tight break-words hyphens-auto">
                  {faq.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-white/80 leading-relaxed text-sm break-words hyphens-auto">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
      ))}
    </div>
  );
}

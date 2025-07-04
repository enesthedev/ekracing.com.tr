import { TextAnimate } from "@/app/components/ui";
import { Suspense } from "react";
import { getAllFAQs } from "../actions";
import { FAQList } from "./faq-list";

interface FAQSectionProps {
  locale?: string; // Reserved for future i18n implementation
}

export async function FAQSection({}: FAQSectionProps) {
  const faqs = await getAllFAQs();

  return (
    <section className="flex flex-col items-start justify-start py-10 px-5">
      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="text"
        className="xl:text-52/tight md:text-4xl/tight text-3xl font-oxanium font-bold uppercase text-white mb-8"
      >
        Frequently Asked Questions
      </TextAnimate>

      <div className="w-full">
        <Suspense
          fallback={
            <div className="animate-pulse columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-6 h-32 bg-white/10 rounded-lg"
                />
              ))}
            </div>
          }
        >
          <FAQList faqs={faqs} />
        </Suspense>
      </div>
    </section>
  );
}

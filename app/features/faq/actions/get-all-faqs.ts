import type { FAQ } from "../types";

const mockFAQs: FAQ[] = [
  {
    id: "1",
    question: "What is ECU tuning?",
    answer:
      "ECU tuning is the process of modifying the software in your vehicle's Engine Control Unit to optimize performance, fuel efficiency, and other parameters. We use professional tools and techniques to safely enhance your engine's capabilities.",
    category: "ECU Tuning",
    order: 1,
  },
  {
    id: "2",
    question: "Is ECU tuning safe for my vehicle?",
    answer:
      "Yes, when performed by experienced professionals like our team, ECU tuning is completely safe. We use conservative tuning approaches that stay within safe operating parameters while maximizing your vehicle's potential.",
    category: "ECU Tuning",
    order: 2,
  },
  {
    id: "3",
    question:
      "What is the difference between Stage 1, Stage 2, and Stage 3 tuning?",
    answer:
      "Stage 1 involves software-only modifications for immediate power gains. Stage 2 includes hardware upgrades like downpipes or intakes. Stage 3 requires significant hardware changes like turbocharger upgrades for maximum performance.",
    category: "ECU Tuning",
    order: 3,
  },
  {
    id: "4",
    question: "Do you offer mobile tuning services?",
    answer:
      "Yes, we provide mobile ECU tuning services. Our technicians can come to your location with professional equipment to perform the tuning at your convenience.",
    category: "Services",
    order: 4,
  },
  {
    id: "5",
    question: "How long does the tuning process take?",
    answer:
      "Most ECU tuning sessions take 2-4 hours depending on the complexity of your vehicle and the type of tune being performed. We always ensure thorough testing before completion.",
    category: "Services",
    order: 5,
  },
  {
    id: "6",
    question: "What warranty do you provide?",
    answer:
      "We offer a comprehensive warranty on all our tuning work. If you experience any issues related to our tuning within the warranty period, we'll address them at no additional cost.",
    category: "Services",
    order: 6,
  },
  {
    id: "7",
    question: "Will tuning void my vehicle's warranty?",
    answer:
      "Tuning modifications may affect your manufacturer's warranty. We recommend discussing this with your dealer. However, many of our clients find the performance benefits worth the trade-off.",
    category: "General",
    order: 7,
  },
  {
    id: "8",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards, bank transfers, and cryptocurrency payments. Payment is due upon completion of the tuning service.",
    category: "General",
    order: 8,
  },
];

export async function getAllFAQs(): Promise<FAQ[]> {
  // Simulate API delay - in production this would use locale for i18n
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockFAQs.sort((a, b) => a.order - b.order);
}

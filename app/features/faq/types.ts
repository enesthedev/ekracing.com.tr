export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface FAQsByCategory {
  [category: string]: FAQ[];
}

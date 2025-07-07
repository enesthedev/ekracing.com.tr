import { Dealer } from "../types";

// Mock data for now - will be replaced with database calls
export const mockDealers: Dealer[] = [
  {
    id: "tr-ankara-hq",
    country: "Turkey",
    city: "Ankara",
    dealerName: "EK Racing Turkey",
    contactPerson: "Mehmet Özkan",
    phone: "+90 312 456 7890",
    email: "mehmet@ekracing.com.tr",
    isHeadquarters: true,
    isActive: true,
    locale: "tr",
  },
  {
    id: "de-berlin",
    country: "Germany",
    city: "Berlin",
    dealerName: "EK Racing Deutschland",
    contactPerson: "Hans Mueller",
    phone: "+49 30 123 4567",
    email: "hans@ekracing.de",
    isHeadquarters: false,
    isActive: true,
    locale: "de",
  },
  {
    id: "us-newyork",
    country: "United States",
    city: "New York",
    dealerName: "EK Racing USA",
    contactPerson: "John Smith",
    phone: "+1 212 555 0123",
    email: "john@ekracing.us",
    isHeadquarters: false,
    isActive: true,
    locale: "en",
  },
  {
    id: "eg-cairo",
    country: "Egypt",
    city: "Cairo",
    dealerName: "EK Racing Egypt",
    contactPerson: "Ahmed Hassan",
    phone: "+20 2 123 4567",
    email: "ahmed@ekracing.eg",
    isHeadquarters: false,
    isActive: true,
    locale: "ar",
  },
  {
    id: "gb-london",
    country: "United Kingdom",
    city: "London",
    dealerName: "EK Racing UK",
    contactPerson: "James Wilson",
    phone: "+44 20 7123 4567",
    email: "james@ekracing.co.uk",
    isHeadquarters: false,
    isActive: true,
    locale: "en",
  },
  {
    id: "ie-dublin",
    country: "Ireland",
    city: "Dublin",
    dealerName: "EK Racing Ireland",
    contactPerson: "Sean O'Connor",
    phone: "+353 1 234 5678",
    email: "sean@ekracing.ie",
    isHeadquarters: false,
    isActive: true,
    locale: "en",
  },
];

export async function getAllDealers(locale: string): Promise<Dealer[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // For now return mock data
  // Later this will be replaced with actual database call
  // We can use locale for filtering or translations in the future
  return mockDealers.filter((dealer) => dealer.isActive);
}

export async function getDealersByCountry(country: string): Promise<Dealer[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockDealers.filter(
    (dealer) =>
      dealer.country.toLowerCase() === country.toLowerCase() && dealer.isActive
  );
}

export async function getHeadquarters(): Promise<Dealer | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockDealers.find((dealer) => dealer.isHeadquarters) || null;
}

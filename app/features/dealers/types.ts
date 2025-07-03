export interface Dealer {
  id: string;
  country: string;
  city: string;
  dealerName: string;
  contactPerson: string;
  phone: string;
  email?: string;
  address?: string;
  isHeadquarters: boolean;
  isActive: boolean;
  locale: string;
}

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  bodyType: string;
  interiorColor: string;
  exteriorColor: string;
  price: number;
  source: 'Facebook' | 'Craigslist' | 'Ebay';
  image: string;
  mileage: number;
  transmission: string;
  fuelType: string;
  description: string;
  deliveryMethod: string;
  titleStatus: string;
  location: string;
  features: string[];
}
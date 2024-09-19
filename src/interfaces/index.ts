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

export interface CarFilters {
  distance?: number;
  vehicleType?: 'cars' | 'trucks' | 'rv-campers';
  bodyType?: 'convertibles' | 'coupes' | 'hatchbacks' | 'minivans' | 'sedans' | 'suvs' | 'trucks';
  minPrice?: number;
  maxPrice?: number;
  deliveryMethod?: string;
  itemCondition?: string;
  make?: string;
  model?: string;
  minYear?: number;
  maxYear?: number;
  minMileage?: number;
  maxMileage?: number;
  transmissionType?: string;
}

export interface FoundCarAtFacebook {
  url: string;
  img: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  location: string;
  mileage: number;
}
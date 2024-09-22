import { EAutoTransmission, EAutoDriveTrain, EAutoCylinders, ECondition, ELanguage, E_RVType, EAutoPaint, EAutoTitleStatus, EAutoFuelType, EAutoBodyType } from "./craigslistTypes"
import { FBTopLevelVehicleType, FBCarType, FBSellerType, ECarfaxHistory, FBSortBy } from "./facebookTypes"

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

export interface FBCarFilters {
  distance?: number;
  topLevelVehicleType?: FBTopLevelVehicleType;
  carType?: FBCarType[];
  sellerType?: FBSellerType;
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
  carFaxHistory?: ECarfaxHistory[];
  sortBy?: FBSortBy
}

export interface FoundCar {
  url: string;
  img?: string;
  title: string;
  oldPrice?: number;
  newPrice: number;
  monthlyPayment?: number;
  location?: string;
  mileage: number;
}

export interface CraigslistFiters {
  vehicleType?: "cars" | "trucks" | "rv-campers";
  purveyor?: "owner" | "dealer",
  bundleDuplicates?: 0 | 1;
  postedToday?: 0 | 1;
  hasPic?: 0 | 1;
  srchType?: "T";
  search_distance?: number;
  postal?: string;
  min_price?: number;
  max_price?: number;
  min_monthly_payment?: number;
  max_monthly_payment?: number;
  auto_make_model?: string;
  min_auto_miles?: number;
  max_auto_miles?: number;
  min_auto_year?: number;
  max_auto_year?: number;
  auto_transmission?: EAutoTransmission;
  auto_drivetrain?: EAutoDriveTrain;
  auto_cylinders?: EAutoCylinders;
  condition?: ECondition;
  auto_fuel_type?: EAutoFuelType;
  auto_paint?: EAutoPaint;
  auto_title_status?: EAutoTitleStatus;
  language?: ELanguage;
}

export interface CLCarFilters extends CraigslistFiters {
  auto_bodytype?: EAutoBodyType;
}

export interface CLRVFilters extends CraigslistFiters {
  rv_type?: E_RVType;
}

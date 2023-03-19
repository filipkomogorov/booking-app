import { PropertyCategory, PropertyType } from "../enums/Property.enum";

export interface Location {
  city: string;
  address: string;
  zip: string;
  region: string;
}

export interface AdditionalInfo {
  basemenet: boolean;
  balcony: boolean;
  elevator: boolean;
}

export interface AdditionalInfoRental extends AdditionalInfo {
  ownBath: boolean;
  stove: boolean;
  ownKitchen: boolean;
  ownToilet: boolean;
  refrigerator: boolean;
  petsAllowed: boolean;
  sharedLaundry: boolean;
}

export interface IProperty {
  id?: string;
  description?: string;
  title: string;
  location: Location;
  price: number;
  size: number;
  rooms: number;
  type: PropertyType;
  category: PropertyCategory;
  additionalInfo: AdditionalInfo;
}

export interface IRentalProperty extends IProperty {
  deposit: number;
  additionalInfo: AdditionalInfoRental;
}

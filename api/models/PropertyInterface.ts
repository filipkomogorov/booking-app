import {
  AdditionalInfo,
  PropertyCategory,
  PropertyType,
  AdvertisementType,
} from "../enums/Property.enum";

export interface Location {
  city: string;
  address: string;
  zip: string;
  region: string;
}

export interface IProperty {
  id?: string;
  title: string;
  images: Array<string>;
  location: Location;
  description?: string;
  deposit?: number;
  price: number;
  size: number;
  rooms: number;
  type: PropertyType;
  category: PropertyCategory;
  advertisementType: AdvertisementType;
  contacts: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  additionalInfo: Array<AdditionalInfo>;
}

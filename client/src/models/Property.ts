import { AdditionalInfo } from "./Property.enum";

export interface Location {
    city: string;
    address: string;
    zip: string;
    region: string;
  }

export enum AdvertisementType {
    RENT = "FOR_RENT",
    SELL = "FOR_SELL"
}

export enum PropertyType{
    APARTMENT = 'APARTMENT',
    TERRACED_HOUSE = 'TERRACED_HOUSE',
    HOUSE = "HOUSE",
    ROOM = 'ROOM'
}

export enum PropertyCategory{
    FAMILY_HOUSE = "FAMILY_HOUSE",
    SENIOR_HOUSING = "SENIOR_HOUSING",
    YOUTH_HOUSING = 'YOUTH_HOUSING',
    CARE_HOME = 'CARE_HOME'
}
export interface PropertyData {
    title: string;
    images: Array<string>;
    location: Location;
    description?: string;
    price?: number;
    deposit?: number;
    size?: number;
    rooms?: number;
    type?: PropertyType;
    category?: PropertyCategory;
    advertisementType?: AdvertisementType;
    additionalInfo?: Array<AdditionalInfo>;
  }
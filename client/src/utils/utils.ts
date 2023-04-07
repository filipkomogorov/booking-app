import { AdditionalInfo } from "../models/Property.enum";

export const additionalInfoNames: { [key in AdditionalInfo]: string } = {
    [AdditionalInfo.BALCONY]: "Balcony",
    [AdditionalInfo.BASEMENT]: "Basement",
    [AdditionalInfo.ELEVATOR]: "Elevator",
    [AdditionalInfo.OWN_BATH]: "Own Bath",
    [AdditionalInfo.OWN_KITCHEN]: "Own Kitchen",
    [AdditionalInfo.OWN_TOILET]: "Own Toilet",
    [AdditionalInfo.PETS_ALLOWED]: "Pets Allowed",
    [AdditionalInfo.REFRIGERATOR]: "Refrigerator",
    [AdditionalInfo.SHARED_LAUNDRY]: "Shared Laundry",
    [AdditionalInfo.STOVE]: "Stove",
  };
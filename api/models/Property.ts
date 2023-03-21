import { Schema, model } from "mongoose";
import { AdvertisementType, PropertyCategory, PropertyType } from "../enums/Property.enum";

const additionalInfoSchema = new Schema({
    basemenet: {
        type: Boolean,
        required: false,
        default: false
      },
      balcony: {
        type: Boolean,
        required: false,
        default: false
      },
      elevator: {
        type: Boolean,
        required: false,
        default: false
      },
})

const additionalInfoRentalSchema = new Schema({
    ...additionalInfoSchema.obj,
      ownBath: {
        type: Boolean,
        required: false,
        default: false
      },
      stove: {
        type: Boolean,
        required: false,
        default: false
      },
      ownKitchen: {
        type: Boolean,
        required: false,
        default: false
      },
      ownToilet: {
        type: Boolean,
        required: false,
        default: false
      },
      refrigerator: {
        type: Boolean,
        required: false,
        default: false
      },
      petsAllowed: {
        type: Boolean,
        required: false,
        default: false
      },
      sharedLaundry: {
        type: Boolean,
        required: false,
        default: false
      },
})

const PropertySchema = new Schema({
    title: { type: String, required: true },
    location: { type: Location, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    rooms: { type: Number, required: true },
    type: { type: String, enum: PropertyType, required: true },
    category: { type: String, enum: PropertyCategory, required: true },
    advertisementType: {type: String, enum: AdvertisementType, required: true},
    additionalInfo: additionalInfoSchema
  });
  

const RentalPropertySchema = new Schema({
  ...PropertySchema.obj,
  deposit: { type: Number, required: true },
  additionalInfo: additionalInfoRentalSchema
});

export const Property = model('Property', PropertySchema)
export const RentalProperty = model('RentalProperty', RentalPropertySchema)



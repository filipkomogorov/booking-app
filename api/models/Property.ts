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
    images: {type: [String], reqired: true},
    location: {
      city: {type: String, required: true},
      address: {type: String, required: true},
      zip: {type: String, required: true},
      region: {type: String, required: true},
    },
    description: { type: String, required: false },
    price: { type: String, required: true },
    deposit: { type: String, required: true, default: 0},
    size: { type: String, required: true },
    rooms: { type: Number, required: true },
    type: { type: String, enum: PropertyType, required: true },
    category: { type: String, enum: PropertyCategory, required: true },
    advertisementType: {type: String, enum: AdvertisementType, required: true},
    additionalInfo: additionalInfoSchema
  });
  


export const Property = model('Property', PropertySchema)



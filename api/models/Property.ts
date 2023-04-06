import { Schema, model } from "mongoose";
import { AdvertisementType, PropertyCategory, PropertyType } from "../enums/Property.enum";
import { AdditionalInfo } from "../enums/Property.enum";


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
    price: { type: Number, required: true},
    deposit: { type: Number,},
    size: { type: Number, required: true},
    rooms: { type: Number, required: true },
    type: { type: String, enum: PropertyType, required: true },
    category: { type: String, enum: PropertyCategory, required: true },
    advertisementType: {type: String, enum: AdvertisementType, required: true},
    additionalInfo: {type: [String], enum: AdditionalInfo}
  });
  


export const Property = model('Property', PropertySchema)



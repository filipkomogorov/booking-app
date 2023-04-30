import { Request, Response } from "express";
import { cloudinary } from "./cloudinary";
import { Property } from "../models/Property";
import * as jwt from "jsonwebtoken";
import { AdvertisementType } from "../enums/Property.enum";
import { IProperty } from "../models/PropertyInterface";
export const uploadImages = async (base64Images: Array<string>) => {
  const uploadedImages = [];

  for (const base64Image of base64Images) {
    try {
      const mediaType = base64Image.match(
        /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/
      )?.[1];

      if (mediaType) {
        const response = await cloudinary.uploader.upload(base64Image);
        uploadedImages.push(response.secure_url);
      } else {
        console.log("Error uploading image: Invalid image format");
      }
    } catch (err) {
      console.log("Error uploading image:", err);
    }
  }

  return uploadedImages;
};

type VerifyingJwtOptions = {
  jwtSecret: string;
  token: string;
};

export const verifyUser = (
  options: VerifyingJwtOptions
): Promise<jwt.JwtPayload> => {
  const { jwtSecret, token } = options;

  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, {}, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user as jwt.JwtPayload);
      }
    });
  });
};

export const getTheLatestProperties = async (req: Request, res: Response) => {
  try {
    const propertiesForSale = await Property.find({
      advertisementType: AdvertisementType.SELL,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    const propertiesForRent = await Property.find({
      advertisementType: AdvertisementType.RENT,
    })
      .sort({ createdAt: -1 })
      .limit(5);
    const properties = {
      sell: propertiesForSale,
      rent: propertiesForRent,
    };
    res.status(200).json(properties);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error getting latest properties for sell" });
  }
};

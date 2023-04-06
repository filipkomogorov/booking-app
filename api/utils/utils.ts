import { IUser } from "../models/UserInterface";
import { cloudinary } from "./cloudinary"
import User from "../models/User";
import * as jwt from 'jsonwebtoken'
export const uploadImages = async (base64Images: Array<string>) => {
    const uploadedImages = []

    for (const base64Image of base64Images) {
        try{
            const mediaType = base64Image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1];


            if(mediaType) {
                const response = await cloudinary.uploader.upload(base64Image);
                uploadedImages.push(response.secure_url);
            }else{
                console.log('Error uploading image: Invalid image format');
            }
        }catch(err){
            console.log('Error uploading image:', err)
        }
    }

    return uploadedImages
}

type VerifyingJwtOptions = {
    jwtSecret: string;
    token: string
}

export const verifyUser = (options: VerifyingJwtOptions): Promise<jwt.JwtPayload> => {
    const {jwtSecret, token} = options;

    return new Promise((resolve, reject)=>{
        jwt.verify(token, jwtSecret, {}, (err, user)=>{
            if(err){
                reject(err)
            }else{
                resolve(user as jwt.JwtPayload)
            }
        })
    })
}
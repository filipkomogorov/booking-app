import * as yup from 'yup'
import { AdvertisementType, PropertyCategory, PropertyType } from '../models/Property'
import { Location } from '../models/Property'
import { AdditionalInfo } from '../models/Property.enum'

export interface WizardStepOneProps {
    advertisementType?: AdvertisementType,
    title: string,
    price?: number,
    size?: number,
    rooms?: number
    deposit: number,
    location: Location,
}

export interface WizardStepTwoProps {
    description: string
    type?: PropertyType,
    category?: PropertyCategory,
    additionalInfo?: Array<AdditionalInfo>
}

export interface WizardStepThreeProps {
    images: Array<string>
}

export const WizardStepOneSchema = yup.object<WizardStepOneProps>().shape({
    advertisementType: yup.mixed<AdvertisementType>().oneOf(Object.values(AdvertisementType)).required('Required'),
    title: yup.string().required('Required'),
    price: yup.number().required('Required'),
    deposit: yup.number(),
    size: yup.string().required('Required'),
    rooms: yup.number().required('Required'),
    location: yup.object().shape({
        city: yup.string().required('Required'),
        address: yup.string().required('Required'),
        zip: yup.string().required('Required'),
        region: yup.string().required('Required'),
    })
})

export const WizardStepTwoSchema = yup.object<WizardStepTwoProps>().shape({
    description: yup.string(),
    type: yup.mixed().oneOf(Object.values(PropertyType)).required('Required'),
    category: yup.mixed().oneOf(Object.values(PropertyCategory)).required('Required'),
})

export const WizardStepThreeSchema = yup.object<WizardStepThreeProps>().shape({
    images: yup.lazy(val => (Array.isArray(val) ? yup.array().of(yup.string()): yup.string()))
})
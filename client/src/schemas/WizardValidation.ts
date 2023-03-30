import * as yup from 'yup'
import { AdvertisementType, PropertyCategory, PropertyType } from '../models/Property'
import { Location } from '../models/Property'

export interface AdditionalInfo {
    basemenet?: boolean,
    balcony?: boolean,
    elevator?: boolean,
    ownBath?: boolean,
    stove?: boolean,
    ownKitchen?: boolean,
    ownToilet?: boolean,
    refrigerator?: boolean,
    petsAllowed?: boolean,
    sharedLaundry?: boolean,
}

export interface WizardStepOneProps {
    advertisementType?: AdvertisementType,
    title: string,
    price: string,
    deposit: string,
    location: Location,
    description: string
}

export interface WizardStepTwoProps {
    size: string,
    rooms?: number
    type?: PropertyType,
    category?: PropertyCategory,
    additionalInfo?: AdditionalInfo
}

export const WizardStepOneSchema  = yup.object<WizardStepOneProps>().shape({
    advertisementType: yup.mixed<AdvertisementType>().oneOf(Object.values(AdvertisementType)).required('Required'),
    title: yup.string().required('Required'),
    price: yup.string().required('Required'),
    deposit: yup.string(),
    location: yup.object().shape({
        city: yup.string().required('Required'),
        address: yup.string().required('Required'),
        zip: yup.string().required('Required'),
        region: yup.string().required('Required'),
    })
})

export const WizardStepTwoSchema = yup.object<WizardStepTwoProps>().shape({
    size: yup.string().required('Required'),
    rooms: yup.number().required('Required'),
    type: yup.mixed().oneOf(Object.values(PropertyType)).required('Required'),
    category: yup.mixed().oneOf(Object.values(PropertyCategory)).required('Required'),
})
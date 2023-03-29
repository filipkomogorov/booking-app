import * as yup from 'yup'
import { AdvertisementType } from '../models/Property'
import { Location } from '../models/Property'

export interface WizardStepOneProps {
    advertisementType?: AdvertisementType,
    title: string,
    price: string,
    deposit: string,
    location: Location,
    description: string
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
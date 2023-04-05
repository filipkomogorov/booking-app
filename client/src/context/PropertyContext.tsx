import React, { createContext, useContext, useState, ReactNode } from 'react';

import { PropertyData } from '../models/Property';

type PropertyContextType = {
  propertyData: PropertyData;
  setPropertyData: (propertyData: PropertyData) => void;
};

const initialValues:PropertyData = {
  title: '',
  images: [],
  location: {
    city: '',
    address: '',
    zip: '',
    region: ''
  },
  description: '',
  price: undefined,
  deposit: undefined,
  size: undefined,
  rooms: undefined,
  type: undefined,
  category: undefined,
  advertisementType: undefined,
  additionalInfo: []
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

type PropertyProviderProps = {
  children: ReactNode;
};

export const PropertyDataProvider: React.FC<PropertyProviderProps> = ({ children }) => {
  const [propertyData, setPropertyData] = useState<PropertyData>(initialValues);

  return (
    <PropertyContext.Provider value={{ propertyData, setPropertyData }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyData = () => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('usePropertyData must be used within a PropertyDataProvider');
  }
  return context;
};

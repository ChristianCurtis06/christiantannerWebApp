import React from 'react';

type PricingTier = {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
};

interface ServicesState {
  webDevelopmentTiers: PricingTier[];
  graphicDesignTiers: PricingTier[];
}

interface ServicesContextType {
  services: ServicesState;
  setServices: React.Dispatch<React.SetStateAction<ServicesState>>;
}

const ServicesContext = React.createContext<ServicesContextType>({
  services: {
    webDevelopmentTiers: [],
    graphicDesignTiers: [],
  },
  setServices: () => {},
});

export default ServicesContext;
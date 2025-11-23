import React from 'react';
import { PageMerchCollection } from './PageMerchCollection';
import { Product, Currency } from '../types';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
}

export const PageHoodies: React.FC<Props> = (props) => (
    <PageMerchCollection 
        title="Hoodies" 
        description="Heavyweight, sustainable fleece. Built for warmth and durability in the cooler months."
        filterFn={(p) => p.title.toLowerCase().includes('hoodie')}
        {...props}
    />
);
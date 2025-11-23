import React from 'react';
import { PageMerchCollection } from './PageMerchCollection';
import { Product, Currency } from '../types';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
}

export const PageAccessories: React.FC<Props> = (props) => (
    <PageMerchCollection 
        title="Accessories" 
        description="From gym towels to bottles. The essential gear to complete your setup."
        filterFn={(p) => !p.title.toLowerCase().includes('hoodie') && !p.title.toLowerCase().includes('tee') && !p.title.toLowerCase().includes('cap') && !p.title.toLowerCase().includes('hat')}
        {...props}
    />
);
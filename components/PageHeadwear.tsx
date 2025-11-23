import React from 'react';
import { PageMerchCollection } from './PageMerchCollection';
import { Product, Currency } from '../types';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
}

export const PageHeadwear: React.FC<Props> = (props) => (
    <PageMerchCollection 
        title="Headwear" 
        description="Caps, beanies, and buckets. Keeping the sun off and the style on."
        filterFn={(p) => p.title.toLowerCase().includes('cap') || p.title.toLowerCase().includes('hat') || p.title.toLowerCase().includes('beanie')}
        {...props}
    />
);
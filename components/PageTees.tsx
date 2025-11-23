import React from 'react';
import { PageMerchCollection } from './PageMerchCollection';
import { Product, Currency } from '../types';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
}

export const PageTees: React.FC<Props> = (props) => (
    <PageMerchCollection 
        title="Tees" 
        description="Vintage wash, boxy fit tees. Made from organic cotton for everyday wear."
        filterFn={(p) => p.title.toLowerCase().includes('tee')}
        {...props}
    />
);
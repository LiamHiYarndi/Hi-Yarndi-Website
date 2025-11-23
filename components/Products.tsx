import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { products } from '../data';

interface ProductsProps {
  onAddToCart: () => void;
  onProductClick: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart, onProductClick }) => {
  return (
    <section className="py-32 px-6 max-w-[1000px] mx-auto">
      <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-premium-black mb-4">The Collection.</h2>
          <p className="text-soft-gray text-lg">Essentials for the unconventional.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
};
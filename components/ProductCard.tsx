import React from 'react';
import { Button } from './Button';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="group bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-medium flex flex-col h-full cursor-pointer" onClick={onClick}>
      <div className="relative aspect-square mb-8 bg-premium-gray rounded-2xl overflow-hidden flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-premium-black shadow-sm">
            {product.tag}
          </span>
        )}
      </div>
      
      <div className="flex flex-col flex-grow items-center text-center">
        <h3 className="font-semibold text-2xl text-premium-black mb-2 group-hover:text-gray-600 transition-colors">{product.title}</h3>
        <p className="text-soft-gray text-sm mb-6 leading-relaxed max-w-[250px]">{product.description}</p>
        
        <div className="mt-auto w-full flex flex-col items-center gap-4">
             <span className="font-medium text-lg text-premium-black">${product.price.toFixed(2)}</span>
             <Button 
              variant="primary" 
              className="w-full rounded-xl" 
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking add to cart
                onAddToCart();
              }}
             >
                Add to Bag
            </Button>
        </div>
      </div>
    </div>
  );
};
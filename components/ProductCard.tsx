
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
    <div className="group cursor-pointer flex flex-col h-full" onClick={onClick}>
      {/* Image - Sharp corners (Fashion Look) with 3D Rotation */}
      <div className="relative aspect-[4/5] mb-3 md:mb-6 bg-gray-100/50 [perspective:1000px] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:[transform:rotateY(360deg)]"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest text-theme-text z-10">
            {product.tag}
          </span>
        )}
        {/* Quick Add on Hover - appears after rotation starts */}
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block">
             <Button 
                variant="primary" 
                size="sm" 
                fullWidth 
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart();
                }}
             >
                 Quick Add
             </Button>
        </div>
      </div>
      
      {/* Text - Minimal, Floating, Adjusted for Mobile */}
      <div className="flex flex-col flex-grow items-center text-center space-y-1 md:space-y-2">
        <div className="text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest text-theme-sub truncate w-full">{product.range}</div>
        <h3 className="font-sans font-bold text-sm md:text-lg text-theme-text uppercase tracking-wider leading-tight">{product.title}</h3>
        <p className="font-serif text-theme-sub text-xs md:text-base italic leading-tight line-clamp-2 min-h-[2.5em] md:min-h-0">{product.subtitle || product.description}</p>
        <span className="font-serif text-sm md:text-lg text-theme-text pt-1 md:pt-2">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

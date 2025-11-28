
import React, { useState, useEffect } from 'react';
import { products, formatPrice } from '../data';
import { Product, Currency, SiteMode } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
  siteMode: SiteMode;
}

export const PageShop: React.FC<Props> = ({ onProductClick, currency, siteMode }) => {
  const [activeRange, setActiveRange] = useState<string>('All');

  useEffect(() => {
    setActiveRange('All');
  }, [siteMode]);

  const performanceRanges = ['Recovery+', 'Energize^', 'Drip°', 'Fuel*', 'Bundles'];
  const merchCategories = ['Lifestyle', 'Performance', 'Gear', 'Bundles'];
  const availableFilters = siteMode === 'performance' ? performanceRanges : merchCategories;

  const filteredProducts = products.filter(p => {
    // Determine Product Type
    const isMixedBundle = p.range === 'Bundles' && p.id.includes('merch-bundle');
    const isPerformanceBundle = p.range === 'Bundles' && !isMixedBundle;
    const isConsumable = ['Recovery+', 'Energize^', 'Drip°', 'Fuel*'].includes(p.range);
    const isWearable = p.range === 'Merch';

    // 1. Filter by Mode Inclusion
    if (siteMode === 'performance') {
        // Performance Shop: Consumables + Performance Bundles + Mixed Bundles
        if (!isConsumable && !isPerformanceBundle && !isMixedBundle) return false;
    } else {
        // Culture Shop: Wearables + Mixed Bundles ONLY
        if (!isWearable && !isMixedBundle) return false;
    }

    // 2. Filter by Active Range Tab
    if (activeRange === 'All') return true;

    if (activeRange === 'Bundles') {
        // If 'Bundles' tab is selected, show any product with range 'Bundles' that passed the Mode filter above
        return p.range === 'Bundles';
    }

    if (siteMode === 'performance') {
        return p.range === activeRange;
    } else {
        // Merch categories (Lifestyle, Performance, Gear)
        return p.merchCategory === activeRange;
    }
  });

  return (
    <div className="min-h-screen pb-32 pt-6 md:pt-10 animate-fade-in bg-theme-bg text-theme-text">
      <div className="py-10 md:py-20 text-center border-b border-theme-border mb-8 md:mb-16 px-6">
          <h1 className="font-sans text-3xl md:text-7xl font-bold uppercase tracking-editorial mb-4 md:mb-6">
              {siteMode === 'merch' ? 'The Collection' : 'Shop All'}
          </h1>
          <p className="font-serif text-lg md:text-xl text-theme-sub italic max-w-lg mx-auto leading-relaxed">
              {siteMode === 'merch' 
                ? "Limited edition drops. Sustainable fabrics."
                : "Plant-based performance for the modern athlete."
              }
          </p>
      </div>

      <div className="container mx-auto px-4 md:px-6">
          {/* Minimal Filters - Horizontal Scroll on Mobile */}
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto justify-start md:justify-center gap-6 md:gap-8 mb-10 md:mb-20 pb-4 no-scrollbar px-2">
              <button
                onClick={() => setActiveRange('All')}
                className={`text-xs font-sans font-bold uppercase tracking-widest transition-all pb-1 border-b-2 whitespace-nowrap ${
                    activeRange === 'All' 
                    ? 'border-theme-text text-theme-text' 
                    : 'border-transparent text-theme-sub hover:text-theme-text'
                }`}
              >
                  Shop All
              </button>
              {availableFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveRange(filter)}
                    className={`text-xs font-sans font-bold uppercase tracking-widest transition-all pb-1 border-b-2 whitespace-nowrap ${
                        activeRange === filter 
                        ? 'border-theme-text text-theme-text' 
                        : 'border-transparent text-theme-sub hover:text-theme-text'
                    }`}
                  >
                      {filter === 'Lifestyle' ? 'Everyday' : filter === 'Performance' ? 'Sportswear' : filter}
                  </button>
              ))}
          </div>

          {/* Grid - 2 Column on Mobile, 3/4 on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => onProductClick(product)}
                    onAddToCart={() => {}} // Quick add handled in card
                  />
              ))}
              {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-20 opacity-50">
                      <p className="font-sans font-bold uppercase text-sm">No products found in this category.</p>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};

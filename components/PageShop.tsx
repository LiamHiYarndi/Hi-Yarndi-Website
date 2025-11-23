
import React, { useState, useEffect } from 'react';
import { products, formatPrice } from '../data';
import { Product, Currency, SiteMode } from '../types';
import { Shirt } from 'lucide-react';

interface Props {
  onProductClick: (product: Product) => void;
  currency: Currency;
  siteMode: SiteMode;
}

export const PageShop: React.FC<Props> = ({ onProductClick, currency, siteMode }) => {
  const [activeRange, setActiveRange] = useState<string>('All');

  // Reset filter when mode changes
  useEffect(() => {
    setActiveRange('All');
  }, [siteMode]);

  // Define available ranges based on mode
  const performanceRanges = ['Recovery+', 'Energize^', 'Drip°', 'Fuel*'];
  const merchCategories = ['Hoodies', 'Tees', 'Headwear', 'Accessories'];

  const availableFilters = siteMode === 'performance' ? performanceRanges : merchCategories;

  // Filter Logic
  const filteredProducts = products.filter(p => {
    // 1. Strict Mode Filter
    const isMerch = p.range === 'Merch';
    if (siteMode === 'performance' && isMerch) return false;
    if (siteMode === 'merch' && !isMerch) return false;

    // 2. Active Range Filter
    if (activeRange === 'All') return true;

    if (siteMode === 'performance') {
        return p.range === activeRange;
    } else {
        return p.title.toLowerCase().includes(activeRange.toLowerCase().slice(0, -1));
    }
  });

  return (
    <div className={`min-h-screen pb-20 pt-10 animate-fade-in bg-theme-bg`}>
      {/* Header */}
      <div className={`py-16 border-b mb-10 transition-colors bg-theme-card border-theme-border`}>
          <div className="container mx-auto px-6 text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-black text-theme-text mb-4 animate-fade-in-up">
                  {siteMode === 'merch' ? 'THE COLLECTION' : 'SHOP HI YARNDI'}
              </h1>
              <p className="text-theme-sub text-lg max-w-xl mx-auto animate-fade-in-up delay-100">
                  {siteMode === 'merch' 
                    ? "Limited edition drops. Sustainable fabrics. Built for the hustle."
                    : "Choose your range, pick your flavour, and back your training with plant-based performance."
                  }
              </p>
          </div>
      </div>

      <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 animate-fade-in-up delay-200">
              <button
                onClick={() => setActiveRange('All')}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeRange === 'All' 
                    ? 'bg-theme-text text-theme-card shadow-lg scale-105' 
                    : 'bg-theme-card text-theme-sub hover:bg-theme-bg hover:scale-105 border border-transparent'
                } border-theme-border`}
              >
                  Shop All
              </button>
              {availableFilters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveRange(filter)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeRange === filter 
                        ? 'bg-theme-text text-theme-card shadow-lg scale-105' 
                        : 'bg-theme-card text-theme-sub hover:bg-theme-bg hover:scale-105 border border-theme-border'
                    }`}
                  >
                      {filter}
                  </button>
              ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className={`rounded-3xl p-5 transition-all hover:shadow-xl cursor-pointer group animate-fade-in-up bg-theme-card border border-theme-border`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => onProductClick(product)}
                  >
                      {/* Range Pill */}
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4
                          ${product.range === 'Recovery+' ? 'bg-teal-50 text-teal-700' : ''}
                          ${product.range === 'Energize^' ? 'bg-yellow-50 text-yellow-700' : ''}
                          ${product.range === 'Drip°' ? 'bg-blue-50 text-blue-700' : ''}
                          ${product.range === 'Fuel*' ? 'bg-orange-50 text-orange-700' : ''}
                          ${product.range === 'Merch' ? 'bg-theme-bg border border-theme-border text-theme-text' : ''}
                      `}>
                          {product.range}
                      </div>

                      {/* Image */}
                      <div className={`aspect-[4/5] rounded-2xl mb-6 overflow-hidden relative bg-theme-bg`}>
                         <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         {/* Quick Add Button (Desktop Hover) */}
                         <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                             <button className="w-full bg-theme-card/90 backdrop-blur text-theme-text py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-accent hover:text-black transition-all">
                                 View Product
                             </button>
                         </div>
                      </div>

                      {/* Info */}
                      <div>
                          <h3 className="font-heading font-bold text-xl text-theme-text mb-1 leading-tight group-hover:text-theme-sub transition-colors">{product.title}</h3>
                          <p className="text-theme-sub text-xs mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                              <div>
                                  <span className="block font-bold text-lg text-theme-text">{formatPrice(product.price, currency)}</span>
                                  {product.compareAtPrice && (
                                      <span className="text-xs text-gray-400 line-through">{formatPrice(product.compareAtPrice, currency)}</span>
                                  )}
                              </div>
                              <div className="text-xs font-medium bg-theme-bg px-2 py-1 rounded text-theme-sub">
                                  {product.range === 'Merch' ? (
                                      <div className="flex items-center gap-1"><Shirt className="w-3 h-3" /> Gear</div>
                                  ) : (
                                      <span>{product.flavours?.length} Flavours</span>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};
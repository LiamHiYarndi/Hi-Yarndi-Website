import React from 'react';
import { products, formatPrice } from '../data';
import { Product, Currency } from '../types';
import { Shirt } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  filterFn: (p: Product) => boolean;
  onProductClick: (product: Product) => void;
  currency: Currency;
}

export const PageMerchCollection: React.FC<Props> = ({ title, description, filterFn, onProductClick, currency }) => {
  const filteredProducts = products.filter(p => p.range === 'Merch' && filterFn(p));

  return (
    <div className="min-h-screen bg-white pb-20 pt-10 animate-fade-in">
      <div className="py-16 border-b border-gray-100 mb-10">
          <div className="container mx-auto px-6 text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-black text-off-black mb-4 animate-fade-in-up uppercase">
                  {title}
              </h1>
              <p className="text-gray-600 text-lg max-w-xl mx-auto animate-fade-in-up delay-100">
                  {description}
              </p>
          </div>
      </div>

      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="bg-gray-50 rounded-3xl p-5 transition-all hover:shadow-xl cursor-pointer group animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => onProductClick(product)}
                  >
                      <div className="aspect-[4/5] bg-white rounded-2xl mb-6 overflow-hidden relative">
                         <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div>
                          <h3 className="font-heading font-bold text-xl text-off-black mb-1 leading-tight group-hover:text-gray-600 transition-colors">{product.title}</h3>
                          <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                              <div>
                                  <span className="block font-bold text-lg">{formatPrice(product.price, currency)}</span>
                              </div>
                              <div className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-500 flex items-center gap-1">
                                  <Shirt className="w-3 h-3" /> Gear
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
              {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-20 text-gray-400">
                      <p>No products found in this collection.</p>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { myProducts } from '../products'; 
import { Button } from './Button';

export const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Energize^');
  
  // Filter products based on the active tab
  const filteredProducts = myProducts.filter(product => product.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300" id="shop">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-premium-black dark:text-white tracking-tight">
                THE LINEUP
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Science-backed formulas designed for the modern athlete.
            </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Energize^', 'Recovery+', 'Drip°'].map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border-2 ${
                        activeCategory === category
                            ? 'bg-premium-black text-white border-premium-black dark:bg-white dark:text-black dark:border-white shadow-lg scale-105'
                            : 'bg-transparent text-gray-500 border-gray-200 dark:border-zinc-700 hover:border-premium-black dark:hover:border-white hover:text-premium-black dark:hover:text-white'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
                <div key={product.id} className="group relative bg-gray-50 dark:bg-zinc-800/50 rounded-3xl p-6 hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-gray-100 dark:hover:border-zinc-700 shadow-sm hover:shadow-xl transition-all duration-500 ease-out">
                    
                    {/* Image Area */}
                    <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/50 flex items-center justify-center">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        <div className="text-xs font-bold text-yarndi-green uppercase tracking-wider">
                            {product.category}
                        </div>
                        <h3 className="text-lg font-bold text-premium-black dark:text-white group-hover:text-yarndi-green transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            {product.description}
                        </p>
                        
                        <div className="pt-4 flex items-center justify-between">
                            <span className="font-bold text-premium-black dark:text-white">{product.price}</span>
                            <button className="w-8 h-8 rounded-full bg-premium-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

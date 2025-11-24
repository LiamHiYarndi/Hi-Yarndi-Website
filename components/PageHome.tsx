import React from 'react';
import { PageView, Currency, SiteMode } from '../types';
import { products, formatPrice } from '../data';
import { Hero } from './Hero';
import { HeroMerch } from './HeroMerch';
import { Marquee } from './Marquee';
import { SocialFeed } from './SocialFeed';
import { Button } from './Button';
import { Leaf, Activity, Zap } from 'lucide-react';

interface Props {
  onNavigate: (page: PageView) => void;
  currency: Currency;
  siteMode: SiteMode;
}

export const PageHome: React.FC<Props> = ({ onNavigate, currency, siteMode }) => {
  // Filter best sellers, excluding merch items for the performance section
  const bestSellers = products.filter(p => p.range !== 'Merch').slice(0, 4);

  // --- MERCH LAYOUT ---
  if (siteMode === 'merch') {
      return (
        <div className="overflow-x-hidden bg-theme-bg">
            <HeroMerch onShopNow={() => onNavigate('shop')} />
            <Marquee />
            
            {/* MERCH CATEGORIES - VISUAL GRID */}
            <section className="py-20 px-6 max-w-[1200px] mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* APPAREL - Large Left Card */}
                    <div 
                        className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-theme-border" 
                        onClick={() => onNavigate('hoodies')}
                    >
                        {/* Replace src with your actual apparel marketing image */}
                        <img 
                            src="/api/placeholder/800/800" 
                            alt="Apparel" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="relative h-full flex items-end p-8">
                            <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">APPAREL</h3>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Stacked Cards */}
                    <div className="flex flex-col gap-4">
                        
                        {/* HEADWEAR */}
                        <div 
                            className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer border border-theme-border min-h-[190px]" 
                            onClick={() => onNavigate('headwear')}
                        >
                            {/* Replace src with your actual headwear marketing image */}
                            <img 
                                src="/api/placeholder/800/400" 
                                alt="Headwear" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="relative h-full flex items-end p-8">
                                <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">HEADWEAR</h3>
                            </div>
                        </div>

                        {/* ACCESSORIES */}
                         <div 
                            className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer border border-theme-border min-h-[190px]" 
                            onClick={() => onNavigate('accessories')}
                        >
                            {/* Replace src with your actual accessory marketing image */}
                            <img 
                                src="/api/placeholder/800/400" 
                                alt="Accessories" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="relative h-full flex items-end p-8">
                                <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">ACCESSORIES</h3>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
            
            <SocialFeed />
        </div>
      )
  }

  // --- PERFORMANCE LAYOUT (Standard) ---
  return (
    <div className="overflow-x-hidden bg-theme-bg">
      {/* 1. User's Requested Hero & Ticker */}
      <Hero onNavigate={onNavigate} />
      <Marquee />

      {/* RANGES OVERVIEW WITH UPDATED FLAVOURS */}
      <section className="py-20 bg-theme-bg">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Recovery+ */}
                <div className="bg-theme-card p-8 rounded-3xl border border-theme-border cursor-pointer hover:shadow-lg transition-shadow group flex flex-col" onClick={() => onNavigate('ranges')}>
                    <Activity className="w-10 h-10 text-teal-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-xl mb-1 text-theme-text">Recovery+</h3>
                    <p className="text-sm text-theme-sub mb-4">Recover, rehydrate, reset.</p>
                    <div className="mt-auto pt-4 border-t border-theme-border/50">
                        <span className="text-[10px] font-black tracking-widest text-theme-sub uppercase block mb-1">Flavours</span>
                        {/* Updated to: Watermelon, Blue Raspberry, Strawberry Kiwi, Lemonade */}
                        <p className="text-xs text-theme-text font-medium">Watermelon, Blue Raspberry, Strawberry Kiwi, Lemonade</p>
                    </div>
                </div>

                {/* Energize^ */}
                <div className="bg-theme-card p-8 rounded-3xl border border-theme-border cursor-pointer hover:shadow-lg transition-shadow group flex flex-col" onClick={() => onNavigate('ranges')}>
                    <Zap className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-xl mb-1 text-theme-text">Energize^</h3>
                    <p className="text-sm text-theme-sub mb-4">Tri-Action Energy System.</p>
                    <div className="mt-auto pt-4 border-t border-theme-border/50">
                        <span className="text-[10px] font-black tracking-widest text-theme-sub uppercase block mb-1">Flavours</span>
                        {/* Updated to: Watermelon, Lychee, Pineapple, Mango */}
                        <p className="text-xs text-theme-text font-medium">Watermelon, Lychee, Pineapple, Mango</p>
                    </div>
                </div>

                {/* Drip° */}
                <div className="bg-theme-card p-8 rounded-3xl border border-theme-border cursor-pointer hover:shadow-lg transition-shadow group flex flex-col" onClick={() => onNavigate('ranges')}>
                    <Leaf className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-xl mb-1 text-theme-text">Drip°</h3>
                    <p className="text-sm text-theme-sub mb-4">Daily hydration & salts.</p>
                    <div className="mt-auto pt-4 border-t border-theme-border/50">
                        <span className="text-[10px] font-black tracking-widest text-theme-sub uppercase block mb-1">Flavours</span>
                        {/* Updated to: Lychee, Kakadu Plum, Passionfruit, Guava */}
                        <p className="text-xs text-theme-text font-medium">Lychee, Kakadu Plum, Passionfruit, Guava</p>
                    </div>
                </div>

                {/* Fuel* (Unchanged as no new data provided) */}
                <div className="bg-theme-card p-8 rounded-3xl border border-theme-border cursor-pointer hover:shadow-lg transition-shadow group flex flex-col" onClick={() => onNavigate('ranges')}>
                    <Leaf className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-xl mb-1 text-theme-text">Fuel*</h3>
                    <p className="text-sm text-theme-sub mb-4">Plant-based fuel.</p>
                    <div className="mt-auto pt-4 border-t border-theme-border/50">
                         <span className="text-[10px] font-black tracking-widest text-theme-sub uppercase block mb-1">Flavours</span>
                         <p className="text-xs text-theme-text font-medium">Unflavoured, Raw Cacao</p>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* WHY HI YARNDI */}
      <section className="py-20 bg-theme-card text-theme-text border-y border-theme-border">
         <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-black mb-16 uppercase">WHY HI YARNDI?</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-theme-bg flex items-center justify-center mb-6 text-[var(--accent-green)] border border-theme-border">
                        <Leaf className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-lg mb-3">Powered By Hemp</h3>
                     <p className="text-theme-sub text-sm max-w-xs mx-auto">No fillers. No heavy metals. Just clean plants.</p>
                 </div>
                 <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-theme-bg flex items-center justify-center mb-6 text-[var(--accent-green)] border border-theme-border">
                        <Activity className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-lg mb-3">Tri-Action Systems</h3>
                     <p className="text-theme-sub text-sm max-w-xs mx-auto">Formulated with effective dosages.</p>
                 </div>
                 <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-theme-bg flex items-center justify-center mb-6 text-[var(--accent-green)] border border-theme-border">
                        <Zap className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-lg mb-3">Australian Owned</h3>
                     <p className="text-theme-sub text-sm max-w-xs mx-auto">Built for local conditions.</p>
                 </div>
             </div>
         </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-24 bg-theme-bg">
         <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
                 <h2 className="text-3xl md:text-4xl font-black text-theme-text uppercase">FAN FAVORITES</h2>
                 <Button variant="outline" onClick={() => onNavigate('shop')}>Shop All</Button>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {bestSellers.map((product) => (
                     <div key={product.id} className="group bg-theme-card rounded-3xl p-4 transition-all hover:shadow-lg border border-theme-border">
                         <div className="aspect-square bg-theme-bg rounded-2xl mb-4 overflow-hidden relative cursor-pointer" onClick={() => onNavigate('shop')}>
                            {/* Product Image */}
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                         </div>
                         <div className="px-2 mb-4 cursor-pointer" onClick={() => onNavigate('shop')}>
                             <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-theme-sub">{product.range}</div>
                             <h3 className="font-bold text-lg text-theme-text mb-1 truncate">{product.title}</h3>
                             <p className="text-xs text-theme-sub line-clamp-1">{product.subtitle}</p>
                         </div>
                         <div className="flex items-center justify-between px-2">
                             <span className="font-bold text-lg text-theme-text">{formatPrice(product.price, currency)}</span>
                             <button className="w-8 h-8 rounded-full bg-[var(--btn-bg)] text-[var(--btn-text)] flex items-center justify-center hover:opacity-80 transition-opacity" onClick={() => onNavigate('shop')}>
                                 +
                             </button>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      <SocialFeed />

      {/* NEWSLETTER */}
      <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">STAY AHEAD OF THE GAME</h2>
              <p className="text-green-100 mb-8">Get training tips, product drops, and exclusive offers.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full text-black focus:outline-none" />
                  <button className="bg-[#ccff00] text-black px-8 py-4 rounded-full font-bold">Join The Squad</button>
              </div>
          </div>
      </section>
    </div>
  );
};

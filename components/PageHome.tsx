
import React from 'react';
import { PageView, Currency, SiteMode, Product } from '../types';
import { products, formatPrice } from '../data';
import { Hero } from './Hero';
import { HeroMerch } from './HeroMerch';
import { Marquee } from './Marquee';
import { SocialFeed } from './SocialFeed';
import { FAQ } from './FAQ';
import { Button } from './Button';
import { Leaf, Activity, Zap } from 'lucide-react';
import { SwirlSection } from './SwirlSection';
import { BrandStory } from './BrandStory';
import { FeaturesSection } from './FeaturesSection';
import { LiquidBackground } from './LiquidBackground';

interface Props {
  onNavigate: (page: PageView) => void;
  currency: Currency;
  siteMode: SiteMode;
}

// Infinite Scrolling Carousel
const ProductCarousel: React.FC<{ 
    title: string, 
    items: Product[], 
    currency: Currency, 
    onNavigate: (view: PageView) => void,
    onShop: () => void 
}> = ({ title, items, currency, onNavigate, onShop }) => {
    const carouselItems = [...items, ...items];

    return (
        <section className="py-16 md:py-32 bg-theme-bg rounded-[2.5rem] border border-theme-border/50 overflow-hidden relative z-10 shadow-sm mx-4 md:mx-6">
            <div className="container mx-auto px-6 mb-8 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    <h2 className="font-sans text-3xl md:text-5xl font-bold text-theme-text uppercase tracking-editorial leading-none text-center md:text-left w-full md:w-auto">{title}</h2>
                    <Button variant="outline" onClick={onShop} className="hidden md:flex bg-transparent shrink-0">View All</Button>
                </div>
            </div>
            
            <div className="flex overflow-hidden w-full">
                <div className="flex gap-6 md:gap-8 animate-infinite-scroll hover:[animation-play-state:paused] w-max px-6">
                    {carouselItems.map((product, index) => (
                        <div 
                            key={`${product.id}-${index}`} 
                            className="shrink-0 w-[200px] md:w-[350px] group cursor-pointer transition-opacity hover:opacity-80" 
                            onClick={onShop}
                        >
                            <div className="aspect-[4/5] mb-4 md:mb-6 bg-gray-50 dark:bg-black/20 relative [perspective:1000px] overflow-hidden rounded-xl border border-theme-border">
                               <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:[transform:rotateY(360deg)] mix-blend-multiply dark:mix-blend-normal" 
                               />
                               {product.comingSoon && (
                                   <span className="absolute top-2 right-2 md:top-4 md:right-4 bg-off-black text-white text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1 z-10">Pre-Launch</span>
                               )}
                            </div>
                            <div className="text-center space-y-1">
                                <h3 className="font-sans text-xs md:text-sm font-bold text-theme-text uppercase tracking-widest truncate px-2">{product.title}</h3>
                                <p className="font-serif text-xs md:text-base text-theme-sub italic truncate px-2">{product.subtitle}</p>
                                <p className="font-sans text-xs md:text-sm font-bold text-theme-text pt-1 md:pt-2">{formatPrice(product.price, currency)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-8 px-6 md:hidden flex justify-center">
                 <Button variant="outline" size="sm" onClick={onShop} fullWidth>View All</Button>
            </div>
        </section>
    );
};

// --- MARQUEE CONTENT LISTS ---
const BRAND_COPY = [
    "THE UNFAIR ADVANTAGE",
    "RECOVERY EVOLVED",
    "0% THC • 100% FOCUS",
    "ILLEGALLY GOOD",
    "PLANT BASED PERFORMANCE"
];

const SALES_COPY = [
    "FREE SHIPPING OVER $100",
    "AFTERPAY AVAILABLE",
    "LIMITED STOCK",
    "JOIN THE CLUB",
    "SHOP THE DROP"
];

export const PageHome: React.FC<Props> = ({ onNavigate, currency, siteMode }) => {
  const bestSellers = products.filter(p => p.range !== 'Merch' && p.range !== 'Bundles').slice(0, 6);
  const consumables = products.filter(p => p.range !== 'Merch' && p.range !== 'Bundles').slice(0, 6);

  if (siteMode === 'merch') {
      return (
        <div className="overflow-x-hidden relative min-h-screen text-theme-text">
            
            {/* Global Animated Background - Wave Style (Same as Performance) */}
            <div className="fixed inset-0 z-0">
                <LiquidBackground variant="forest" className="opacity-100" />
            </div>

            {/* Content Wrapper - Floating Card Layout */}
            <div className="relative z-10 flex flex-col gap-6 md:gap-12 py-6 md:py-8">
                
                {/* Hero Card */}
                <div className="mx-4 md:mx-6 rounded-[2.5rem] overflow-hidden shadow-2xl bg-off-black">
                    <Marquee items={BRAND_COPY} direction="right" speed={30} />
                    <HeroMerch onShopNow={() => onNavigate('shop')} />
                    <Marquee items={SALES_COPY} direction="left" speed={25} />
                </div>
                
                {/* Categories Card */}
                <section className="py-16 md:py-32 px-4 md:px-6 mx-4 md:mx-6 bg-theme-bg rounded-[2.5rem] shadow-xl border border-theme-border/50">
                     <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="h-[400px] md:h-[600px] bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-end p-6 md:p-12 cursor-pointer group relative overflow-hidden" onClick={() => onNavigate('hoodies')}>
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                            <h3 className="relative z-10 font-sans text-3xl md:text-4xl font-bold text-white uppercase tracking-editorial">Apparel</h3>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6 h-[400px] md:h-[600px]">
                            <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-end p-6 md:p-12 cursor-pointer group relative overflow-hidden" onClick={() => onNavigate('headwear')}>
                                 <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                 <h3 className="relative z-10 font-sans text-2xl md:text-3xl font-bold text-white uppercase tracking-editorial">Headwear</h3>
                            </div>
                             <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-end p-6 md:p-12 cursor-pointer group relative overflow-hidden" onClick={() => onNavigate('accessories')}>
                                 <img src="https://images.unsplash.com/photo-1602143407151-11115cd4e69b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                 <h3 className="relative z-10 font-sans text-2xl md:text-3xl font-bold text-white uppercase tracking-editorial">Accessories</h3>
                            </div>
                        </div>
                     </div>
                </section>

                <ProductCarousel 
                    title="Fuel Your Lifestyle" 
                    items={consumables} 
                    currency={currency} 
                    onNavigate={onNavigate} 
                    onShop={() => onNavigate('shop')} 
                />
                
                <FAQ siteMode={siteMode} />
                
                <div className="mx-4 md:mx-6 rounded-[2.5rem] overflow-hidden shadow-xl border border-theme-border/50">
                    <SocialFeed />
                </div>
            </div>
        </div>
      )
  }

  return (
    <div className="overflow-x-hidden relative min-h-screen text-theme-text">
      
      {/* Global Animated Background - Wave Style */}
      <div className="fixed inset-0 z-0">
         <LiquidBackground variant="forest" className="opacity-100" />
      </div>

      {/* Content Wrapper - Card Layout with Visible Gaps */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-12 py-6 md:py-8">
          
          {/* Hero Card */}
          <div className="mx-4 md:mx-6 rounded-[2.5rem] overflow-hidden shadow-2xl bg-theme-bg">
              <Marquee items={BRAND_COPY} direction="right" speed={30} />
              <Hero onNavigate={onNavigate} />
              <Marquee items={SALES_COPY} direction="left" speed={25} />
          </div>

          <BrandStory />
          
          <FeaturesSection />

          {/* Ranges - Compact Mobile List - Card Style */}
          <section className="py-16 md:py-24 px-6 mx-4 md:mx-6 bg-theme-bg rounded-[2.5rem] shadow-xl border border-theme-border/50">
             <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-theme-border/50 border border-theme-border/50">
                {[
                    { title: "Recovery+", icon: Activity, desc: "Post-Session Reset" },
                    { title: "Energize^", icon: Zap, desc: "Tri-Action Energy" },
                    { title: "Drip°", icon: Leaf, desc: "Daily Hydration" },
                    { title: "Fuel*", icon: Leaf, desc: "Plant Protein" }
                ].map((range, i) => (
                    <div key={i} className="bg-theme-bg p-6 md:p-12 flex flex-row md:flex-col items-center justify-between md:justify-center text-left md:text-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group" onClick={() => onNavigate('ranges')}>
                        <div className="flex items-center gap-4 md:flex-col md:gap-0">
                            <range.icon className="w-6 h-6 md:w-8 md:h-8 text-theme-text mb-0 md:mb-6 group-hover:scale-110 transition-transform" />
                            <div>
                                 <h3 className="font-sans font-bold text-base md:text-lg uppercase tracking-widest md:mb-2">{range.title}</h3>
                                 <p className="font-serif text-theme-sub italic text-sm md:text-base md:hidden">{range.desc}</p>
                            </div>
                        </div>
                        <p className="font-serif text-theme-sub italic hidden md:block">{range.desc}</p>
                        <div className="md:hidden">
                            <svg className="w-4 h-4 text-theme-sub" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                ))}
             </div>
          </section>

          <SwirlSection />

          <ProductCarousel 
            title="Fan Favorites" 
            items={bestSellers} 
            currency={currency} 
            onNavigate={onNavigate} 
            onShop={() => onNavigate('shop')} 
          />

          <FAQ />
          
          <div className="mx-4 md:mx-6 rounded-[2.5rem] overflow-hidden shadow-xl border border-theme-border/50">
              <SocialFeed />
          </div>
      </div>
    </div>
  );
};

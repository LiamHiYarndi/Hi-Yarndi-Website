
import React from 'react';
import { Leaf, Droplets, Zap, ShieldCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-theme-bg mx-4 md:mx-6 rounded-[2.5rem] shadow-xl border border-theme-border/50 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div>
             <h2 className="font-tropiland text-3xl md:text-6xl uppercase tracking-tight leading-none mb-4 md:mb-6 text-theme-text">
               Engineered <br/> by Nature.
             </h2>
             <p className="font-serif text-lg md:text-xl text-theme-sub italic max-w-md">
               We didn't build this for the yoga studio. We built it for the pit, the park, and the surf. 
             </p>
          </div>
          <Leaf className="w-12 h-12 md:w-16 md:h-16 text-yarndi-green hidden md:block animate-blob" />
        </div>

        {/* Open Grid - No Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          <div className="relative group">
            <div className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-2xl mb-6 md:mb-8 border border-theme-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1558589340-17b986c94f95?q=80&w=1974&auto=format&fit=crop" 
                  alt="Hemp Field"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
            </div>
            <div className="space-y-2">
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-widest text-theme-text">Plant-Based Power</h3>
                <p className="font-serif text-theme-sub text-base md:text-lg leading-relaxed">
                    Rich in Omega 3 & 6. Our hemp is 100% Australian grown, supporting local farmers and your body's natural inflammation response.
                </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 md:gap-16">
              <div className="border-t border-theme-border/50 pt-6 md:pt-8">
                  <Droplets className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-2 md:mb-4" />
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest mb-1 md:mb-2 text-theme-text">Hydration+</h4>
                  <p className="font-serif text-theme-sub text-sm md:text-base">Rapid electrolyte absorption matching sweat loss.</p>
              </div>
              <div className="border-t border-theme-border/50 pt-6 md:pt-8">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mb-2 md:mb-4" />
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest mb-1 md:mb-2 text-theme-text">Zero High</h4>
                  <p className="font-serif text-theme-sub text-sm md:text-base">THC Free. Safe for work, driving, and elite sport.</p>
              </div>
              <div className="border-t border-theme-border/50 pt-6 md:pt-8">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-green-600 mb-2 md:mb-4" />
                  <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest mb-1 md:mb-2 text-theme-text">FSANZ Compliant</h4>
                  <p className="font-serif text-theme-sub text-sm md:text-base">Fully approved for consumption in AU & NZ.</p>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

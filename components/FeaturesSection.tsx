import React from 'react';
import { Zap, ShieldCheck, Leaf, Droplets } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-bold text-premium-black mb-4 tracking-tight leading-tight">
               Engineered by Nature. <br/>
               Refined by Science.
             </h2>
             <p className="text-gray-500 text-base md:text-lg">
               We didn't build this for the yoga studio. We built it for the pit, the park, and the surf. 
             </p>
          </div>
          <div className="hidden md:block pb-2">
             <Leaf className="w-12 h-12 text-yarndi-green" />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Large Card - Hemp Field Image */}
          <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-premium-black min-h-[400px] md:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1558589340-17b986c94f95?q=80&w=1974&auto=format&fit=crop" 
              alt="Hemp Field"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 scale-100 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="bg-yarndi-green/90 text-premium-black inline-flex p-2 rounded-lg mb-4 backdrop-blur">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Plant-Based Power</h3>
              <p className="text-gray-300 leading-relaxed max-w-md text-sm md:text-base">
                Rich in Omega 3 & 6. Our hemp is 100% Australian grown, supporting local farmers and your body's natural inflammation response.
              </p>
            </div>
          </div>

          {/* Card 2 - Hydration (Water Texture) */}
          <div className="col-span-1 md:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-blue-50 min-h-[200px] md:min-h-0">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
            <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <Droplets className="w-8 h-8 text-blue-600" />
                <div>
                    <h4 className="font-bold text-xl text-premium-black mb-1">Hydration+</h4>
                    <p className="text-xs text-gray-600 font-medium">
                        Rapid electrolyte absorption.
                    </p>
                </div>
            </div>
            {/* Decorative water drop */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Card 3 - Zero High (Dark) */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-premium-black rounded-3xl p-6 flex flex-col justify-between hover:bg-gray-900 transition-colors border border-gray-800 min-h-[200px] md:min-h-0">
            <div className="flex justify-between items-start">
                <Zap className="w-8 h-8 text-yarndi-green" />
                <span className="text-[10px] font-bold border border-gray-700 text-gray-400 px-2 py-1 rounded-full">THC FREE</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-1">Zero High</h3>
                <p className="text-gray-400 text-xs">
                  Safe for work, driving, and elite sport.
                </p>
            </div>
          </div>

          {/* Card 4 - Wide bottom card */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-premium-gray rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden group min-h-[150px] md:min-h-0">
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-premium-black" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Certified</span>
                </div>
                <h4 className="font-bold text-2xl text-premium-black">FSANZ Compliant</h4>
                <p className="text-gray-600 text-sm mt-1">Fully approved for consumption in AU & NZ.</p>
             </div>
             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gray-200 to-transparent skew-x-12 group-hover:skew-x-6 transition-transform duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
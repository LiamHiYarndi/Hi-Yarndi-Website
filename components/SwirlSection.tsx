import React from 'react';
import { Zap, MapPin, Leaf } from 'lucide-react';

export const SwirlSection: React.FC = () => {
  return (
    <section className="relative py-24 border-y-2 border-off-black overflow-hidden text-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#ccff00,#ff00cc,#00ccff,#ccff00)] bg-[length:400%_400%] animate-swirl opacity-80 z-0"></div>
      
      <div className="relative z-10 inline-block bg-white p-10 md:p-16 border-2 border-off-black shadow-brutal-hover rotate-[-2deg] max-w-[90vw] md:max-w-[600px]">
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl uppercase mb-6">Why Hemp? Why Now?</h2>
        <p className="text-lg font-medium mb-8 leading-relaxed">
          We didn't build this for the yoga studio. We built it for the pit, the park, and the surf. 
          Rich in Omega 3 & 6 for inflammation support and packed with natural magnesium.
        </p>
        
        <ul className="text-left space-y-4 font-bold text-lg">
          <li className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-neon-pink fill-neon-pink" />
            <span>Zero THC (Won't get you high)</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-deep-orange fill-deep-orange" />
            <span>100% Australian Grown</span>
          </li>
          <li className="flex items-center gap-3">
            <Leaf className="w-6 h-6 text-neon-green fill-neon-green" />
            <span>Plant-Based Recovery</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
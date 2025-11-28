
import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface HeroMerchProps {
    onShopNow: () => void;
}

export const HeroMerch: React.FC<HeroMerchProps> = ({ onShopNow }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-off-black overflow-hidden">
      
      {/* Background with texture */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop"
            alt="Streetwear Texture"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="animate-slide-in-left space-y-6 md:space-y-8 pt-8 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Season 02 Drop</span>
          </div>
          
          <h1 className="font-tropiland text-5xl sm:text-6xl md:text-8xl tracking-tighter text-white leading-[0.9]">
            WEAR THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">PLANT.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-lg leading-relaxed">
            Heavyweight hemp blends. Vintage washes. 
            Engineered for the gym, the street, and everything in between.
          </p>
          
          <div className="flex gap-4">
            <Button variant="primary" className="bg-white text-black hover:bg-gray-200 border-none px-8" onClick={onShopNow}>
              Shop The Collection
            </Button>
          </div>
        </div>
        
        {/* Visual Asset */}
        <div className="relative flex justify-center md:justify-end animate-fade-in-up delay-200">
             <div className="relative aspect-[3/4] w-[300px] md:w-[400px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                    alt="Model in Hoodie"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex justify-between items-center">
                    <div>
                        <p className="text-white font-bold text-sm">Oversized Hoodie</p>
                        <p className="text-gray-400 text-xs">Heavyweight French Terry</p>
                    </div>
                    <div className="bg-white rounded-full p-2">
                        <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

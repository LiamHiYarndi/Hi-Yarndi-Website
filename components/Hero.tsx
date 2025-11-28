


import React from 'react';
import { Button } from './Button';
import { Play, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
    onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Use the local duck mascot image
  const MASCOT_URL = "/images/Logos/mascot-duck.png";

  const handleWatchFilm = () => {
      window.open('https://www.youtube.com/@HiYarndi', '_blank');
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-12 md:pt-20 md:pb-20 transition-colors duration-500 bg-theme-bg z-10">
      
      <div className="container max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Content - Editorial Style */}
        <div className="animate-fade-in-up space-y-6 md:space-y-10 text-center lg:text-left order-2 lg:order-1">
          
          <div className="space-y-3 md:space-y-4">
              <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-accent block">
                  Plant Based Performance
              </span>
              <h1 className="font-tropiland text-5xl sm:text-7xl md:text-8xl tracking-tight text-theme-text leading-[0.9] uppercase mix-blend-multiply dark:mix-blend-normal">
                NATURE'S <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-theme-text">COMPETITIVE EDGE.</span>
              </h1>
          </div>
          
          <div className="max-w-sm md:max-w-xl mx-auto lg:mx-0">
            <p className="font-heading text-lg md:text-3xl font-black uppercase tracking-widest text-theme-text mb-3 leading-tight">
              Energy<span className="text-accent">.</span> Hydration<span className="text-accent">.</span> Recovery<span className="text-accent">.</span>
            </p>
            <p className="font-serif text-lg md:text-2xl text-theme-sub leading-relaxed italic">
              The complete performance stack powered by Australian Hemp.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 md:gap-6 justify-center lg:justify-start w-full pt-4 md:pt-6">
            <Button 
                variant="primary" 
                size="lg"
                onClick={() => onNavigate('shop')}
                className="w-full sm:w-auto shadow-2xl shadow-green-900/20 font-black text-lg tracking-widest h-16 px-12 group hover:scale-[1.02] transition-all duration-300"
            >
              Shop The Range <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <button 
                onClick={handleWatchFilm}
                className="group flex items-center gap-3 text-theme-text hover:opacity-70 transition-opacity w-full sm:w-auto justify-center bg-gray-100 dark:bg-white/10 rounded-full px-6 py-4 border border-theme-border/50 h-16"
            >
              <div className="w-10 h-10 rounded-full bg-theme-text flex items-center justify-center">
                 <Play className="w-4 h-4 fill-theme-bg text-theme-bg" />
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest">Watch Film</span>
            </button>
          </div>
        </div>
        
        {/* Visual Asset - Sharp, Floating */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
          <div className="relative z-10 w-[240px] sm:w-[400px] lg:w-full max-w-lg">
             <img 
                src={MASCOT_URL} 
                alt="Yarndi Mascot" 
                className="w-full h-auto object-contain drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
             />
             
             {/* Minimal Floating Badge */}
             <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/90 backdrop-blur-md border border-gray-100 p-4 md:p-6 flex flex-col gap-1 animate-fade-in-up delay-500 rounded-2xl shadow-soft">
                <span className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-theme-sub">Active Ingredients</span>
                <span className="font-serif text-lg md:text-2xl italic text-theme-text">100% Natural</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
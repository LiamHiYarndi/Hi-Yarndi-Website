
import React from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
    onNavigate?: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // --- GOOGLE DRIVE SETUP ---
  const MASCOT_ID = "PASTE_MASCOT_ID_HERE"; 
  const MASCOT_URL = (MASCOT_ID.includes("PASTE") || MASCOT_ID.length < 10)
    ? "https://placehold.co/600x600/ffffff/0e0e0e.png?text=Mascot" // Fallback
    : `https://drive.google.com/uc?export=view&id=${MASCOT_ID}`;

  return (
    <section className="relative min-h-[90vh] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-theme-bg overflow-hidden pointer-events-none">
         <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
         <div className="absolute -bottom-32 left-20 w-64 h-64 md:w-96 md:h-96 bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content - Order 1 on Mobile */}
        <div className="animate-fade-in-up space-y-5 md:space-y-6 text-center md:text-left order-1 md:order-1 flex flex-col items-center md:items-start pt-8 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-card border border-theme-border shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-theme-text">Plant Based Performance</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-theme-text leading-[0.95]">
            RECOVERY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-600">EVOLVED.</span>
          </h1>
          
          <p className="text-base md:text-xl text-theme-sub font-medium max-w-md leading-relaxed px-2 md:px-0">
            The electrolyte blend built for the unconventional athlete. 
            Powered by Australian Hemp. Zero sugar crash.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <Button 
                variant="primary" 
                className="w-full sm:w-auto shadow-xl"
                onClick={() => onNavigate?.('shop')}
            >
              Shop The Drop
            </Button>
            <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-theme-card/50 backdrop-blur-md border border-theme-border hover:bg-theme-card transition-all w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-theme-text flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Play className="w-3 h-3 text-theme-bg fill-current ml-0.5" />
              </div>
              <span className="text-sm font-bold text-theme-text">Watch the Film</span>
            </button>
          </div>
        </div>

        {/* Visual Asset - Order 2 on Mobile */}
        <div className="relative flex justify-center md:justify-end animate-float order-2 md:order-2 mt-4 md:mt-0">
          <div className="relative z-10 w-[240px] sm:w-[280px] md:w-full max-w-md">
             <img 
                src={MASCOT_URL} 
                alt="Yarndi Mascot" 
                className="w-full h-auto object-contain drop-shadow-2xl filter contrast-125"
             />
             
             {/* Floating badge */}
             <div className="absolute -bottom-2 -left-4 md:-bottom-4 md:-left-4 bg-theme-card/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-theme-border flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] text-theme-sub font-bold uppercase">Magnesium</div>
                    <div className="text-xs font-bold text-theme-text">300mg Added</div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

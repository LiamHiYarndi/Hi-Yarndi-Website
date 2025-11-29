
import React from 'react';
import { Button } from './Button';
import { ChevronRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  // --- GOOGLE DRIVE SETUP ---
  // 1. Share file as "Anyone with link"
  // 2. Copy the ID (the random characters between /d/ and /view)
  // 3. Paste it below
  
 const MASCOT_URL = "/images/logos/mascot-duck.png";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 pb-20 md:py-0">
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[#FAFAFA] overflow-hidden">
         {/* Organic Blob 1: Hemp Green */}
         <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-yarndi-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         
         {/* Organic Blob 2: Sky/Water Blue */}
         <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
         
         {/* Organic Blob 3: Energy Yellow/Warmth */}
         <div className="absolute -bottom-32 left-20 w-72 h-72 md:w-96 md:h-96 bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
         
         {/* Glass Overlay to soften everything */}
         <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="animate-fade-in-up space-y-6 md:space-y-8 text-center md:text-left pt-8 md:pt-0 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-yarndi-green animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-premium-black">Plant Based Performance</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-premium-black leading-[0.95]">
            RECOVERY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-emerald-600">EVOLVED.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-lg leading-relaxed mx-auto md:mx-0">
            The electrolyte blend built for the unconventional athlete. 
            Powered by Australian Hemp. Zero sugar crash.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start w-full">
            <Button variant="primary" className="shadow-xl shadow-emerald-900/10 w-full sm:w-auto">
              Shop The Drop
            </Button>
            <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 hover:bg-white transition-all w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-premium-black flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Play className="w-3 h-3 text-white fill-current ml-0.5" />
              </div>
              <span className="text-sm font-bold text-premium-black">Watch the Film</span>
            </button>
          </div>
        </div>
        
        {/* Visual Asset - Mascot + Product Composition */}
        <div className="relative flex justify-center md:justify-end animate-float order-1 md:order-2">
          
          <div className="relative z-10 w-[280px] sm:w-full max-w-md">
             <img 
                src={MASCOT_URL} 
                alt="Yarndi Mascot" 
                className="w-full h-auto object-contain drop-shadow-2xl filter contrast-125"
             />
             
             {/* Floating badge */}
             <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-soft border border-white/50 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">Magnesium</div>
                    <div className="text-xs md:text-sm font-bold text-premium-black">300mg Added</div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

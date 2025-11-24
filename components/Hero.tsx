import React from 'react';
import { Button } from './Button'; 
import { ChevronRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 pb-20 md:py-0 bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         {/* Blobs - Only visible in Light Mode (hidden in dark mode to prevent white haze) */}
         <div className="dark:hidden absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-yarndi-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="dark:hidden absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
         <div className="dark:hidden absolute -bottom-32 left-20 w-72 h-72 md:w-96 md:h-96 bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
         
         {/* Dark Mode Specific Glow (Subtle Green) */}
         <div className="hidden dark:block absolute top-0 right-0 w-[500px] h-[500px] bg-yarndi-green/5 rounded-full filter blur-[100px]"></div>

         <div className="absolute inset-0 bg-white/30 dark:bg-black/10 backdrop-blur-[2px]"></div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in-up space-y-6 md:space-y-8 text-center md:text-left pt-8 md:pt-0 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-yarndi-green animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-premium-black dark:text-white">Plant Based Performance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-premium-black dark:text-white leading-[1.1]">
                RECOVERY <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-emerald-600">EVOLVED.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-lg leading-relaxed mx-auto md:mx-0">
                The electrolyte blend built for the unconventional athlete. Powered by Australian Hemp. Zero sugar crash.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start w-full">
                <Button variant="primary" className="shadow-xl shadow-emerald-900/10 w-full sm:w-auto">
                    Shop The Drop
                </Button>
                
                <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all">
                    <div className="w-8 h-8 rounded-full bg-premium-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 text-white dark:text-black fill-current ml-0.5" />
                    </div>
                    <span className="text-sm font-bold text-premium-black dark:text-white">Watch the Film</span>
                </button>
            </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end animate-float order-1 md:order-2">
             <div className="relative z-10 w-[280px] sm:w-full max-w-md">
                <img
                  src="/mascot.png"
                  alt="Mascot"
                  className="w-full h-auto object-contain drop-shadow-2xl filter contrast-125"
                />
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-soft border border-white/50 dark:border-white/10 flex items-center gap-3 md:gap-4 animate-bounce-slow">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Magnesium</div>
                    <div className="text-xs md:text-sm font-bold text-premium-black dark:text-white">300mg Added</div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

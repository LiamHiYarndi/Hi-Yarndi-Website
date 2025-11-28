
import React from 'react';
import { Button } from './Button';

export const SwirlSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden z-10 bg-theme-bg mx-4 md:mx-6 rounded-[2.5rem] shadow-xl border border-theme-border/50">
        
        <div className="container mx-auto px-6 relative z-20">
             <div className="text-center mb-16 md:mb-24 relative flex flex-col items-center justify-center">
                 {/* Styled Typography Graphic */}
                 <div className="relative">
                     {/* Background Stroke Text */}
                     <h2 className="font-tropiland text-[5rem] md:text-[10rem] text-transparent tracking-tighter leading-none select-none whitespace-nowrap" style={{ WebkitTextStroke: '2px var(--theme-sub)', opacity: 0.1 }}>
                        CULTURE
                     </h2>
                     
                     {/* Foreground Title */}
                     <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-tropiland text-4xl md:text-7xl text-theme-text uppercase tracking-tight z-10 w-full">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-emerald-600">EARTH.</span>
                     </h2>
                 </div>
                 
                 <p className="relative font-serif text-lg md:text-xl text-theme-sub mt-2 italic">
                    Built for the modern athlete.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
                 {/* Visual: Map of Australia */}
                <div className="relative group order-2 md:order-1 flex items-center justify-center bg-gray-50/50 dark:bg-white/5 rounded-[3rem] p-8 border border-theme-border/50">
                    <div className="relative w-full aspect-square max-w-md">
                        {/* Map Silhouette */}
                        <img 
                            src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/au/vector.svg" 
                            alt="Australia Map" 
                            className="w-full h-full object-contain opacity-20 dark:opacity-40 filter drop-shadow-lg" 
                        />
                        
                        {/* Brisbane Marker */}
                        <div className="absolute top-[40%] right-[8%] flex flex-col items-center group/marker">
                            <div className="relative">
                                <div className="w-4 h-4 bg-yarndi-green rounded-full shadow-lg animate-pulse relative z-10"></div>
                                <div className="absolute inset-0 bg-yarndi-green rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-theme-card border border-theme-border px-3 py-1 rounded-lg shadow-md transition-all opacity-0 group-hover/marker:opacity-100 whitespace-nowrap z-20">
                                <span className="text-[10px] font-bold uppercase text-theme-text">Brisbane (Origin)</span>
                            </div>
                        </div>
                        
                        {/* Melbourne Marker */}
                        <div className="absolute bottom-[12%] right-[22%] flex flex-col items-center group/marker">
                            <div className="relative">
                                <div className="w-4 h-4 bg-theme-text rounded-full shadow-lg relative z-10"></div>
                                <div className="absolute inset-0 bg-theme-text rounded-full animate-pulse opacity-50"></div>
                            </div>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-theme-card border border-theme-border px-3 py-1 rounded-lg shadow-md whitespace-nowrap z-20">
                                <span className="text-[10px] font-bold uppercase text-theme-text">Melbourne (HQ)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-8 order-1 md:order-2 text-center md:text-left">
                     <h3 className="font-tropiland text-3xl md:text-4xl text-theme-text leading-tight">
                        NOT JUST A DRINK.<br/>
                        <span className="text-theme-sub">A MOVEMENT.</span>
                     </h3>
                     <div className="prose text-theme-sub text-base md:text-lg leading-relaxed font-serif">
                         <p className="mb-4">
                             Hi Yarndi isn't a boardroom invention. It was forged on the fields of Brisbane and refined in the laneways of Melbourne.
                         </p>
                         <p>
                            We believe recovery should be natural, effective, and accessible. No synthetic fillers. No sugar crash. Just the raw, anti-inflammatory power of Australian Hemp combined with clinical hydration.
                         </p>
                     </div>
                     <div className="pt-2">
                        <Button variant="outline" className="px-8 bg-transparent">Read Our Story</Button>
                     </div>
                </div>
             </div>
        </div>
    </section>
  );
};

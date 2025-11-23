import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface MerchSectionProps {
    onNavigate: () => void;
}

export const MerchSection: React.FC<MerchSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-off-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content */}
                    <div className="order-2 lg:order-1 animate-slide-in-left">
                        <div className="inline-block px-3 py-1 rounded-full border border-gray-700 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest mb-6">
                            Limited Edition Drop
                        </div>
                        <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                            WEAR THE <br/> <span className="text-yarndi-green">PLANT.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                            Heavyweight hemp blends, puff-print branding, and vintage washes. 
                            Engineered for the streets and the squat rack.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                             <Button onClick={onNavigate} className="bg-white text-black hover:bg-gray-200">
                                Shop Gear
                             </Button>
                             <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-gray-800 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                <span>Sustainable</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>Durable</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>Breathable</span>
                             </div>
                        </div>
                    </div>

                    {/* Visuals */}
                    <div className="order-1 lg:order-2 relative group cursor-pointer" onClick={onNavigate}>
                        <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="relative aspect-[4/5] bg-gray-800 rounded-[3rem] overflow-hidden shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                                alt="Hi Yarndi Merch" 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                             />
                             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                                 <div className="flex justify-between items-end">
                                     <div>
                                         <p className="text-accent font-bold text-sm uppercase tracking-wider mb-1">New Arrival</p>
                                         <p className="text-white font-bold text-2xl">Oversized Hoodie</p>
                                     </div>
                                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                         <ArrowRight className="w-5 h-5 text-black" />
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const MadeForAthletes: React.FC = () => {
  
  // Using a reliable Unsplash image for the athlete section
  const ATHLETE_IMAGE = "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title - Small */}
        <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-premium-black text-white text-xs font-bold uppercase tracking-widest mb-4">
                Made for Athletes
            </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side - Edgy/Native */}
            <div className="relative group">
                <div className="absolute -inset-4 bg-yarndi-green rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img 
                        src={ATHLETE_IMAGE} 
                        alt="Will Hood Training" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                        <p className="font-bold text-lg">Will Hood</p>
                        <p className="text-xs text-gray-300 uppercase tracking-wider">Hi Yarndi Athlete</p>
                    </div>
                </div>
            </div>

            {/* Content Side - Bold Copy */}
            <div className="lg:pl-10 space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-premium-black leading-[0.95] font-troopiland">
                    FOR THE ONES <br/>
                    WHO MOVE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-green-600">DIFFERENT.</span>
                </h2>

                <div className="space-y-6 text-lg font-medium text-gray-600 leading-relaxed border-l-4 border-yarndi-green pl-6">
                    <p>
                        Hi Yarndi is for the ones training before work, surfing past sunset, or hitting the bag just to clear their head.
                    </p>
                    <p>
                        It’s hydration built for the <span className="text-premium-black font-bold">6AM rise and the 6PM sesh</span>. Hemp-powered recovery that works as hard as you do.
                    </p>
                </div>

                <div className="pt-4">
                    <Button className="bg-premium-black text-white hover:bg-zinc-800 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 group">
                        Meet The Crew 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Performance-Backed. Recovery-Ready.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

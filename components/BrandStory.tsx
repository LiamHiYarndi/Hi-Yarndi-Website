
import React from 'react';
import { Button } from './Button';
import { MapPin, Users, Zap } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 bg-premium-gray border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Image Masonry */}
           <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                      <img 
                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" 
                        alt="The Crew" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
                      <span className="text-4xl font-bold text-yarndi-green mb-1">100%</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-premium-black">Aussie Owned</span>
                  </div>
              </div>
              <div className="space-y-4">
                  <div className="bg-premium-black text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between min-h-[140px]">
                      <Zap className="w-8 h-8 text-yarndi-green" />
                      <p className="font-bold text-lg leading-tight">"No fillers. Just fuel."</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                      <img 
                        src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop" 
                        alt="Skate Culture" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                  </div>
              </div>
           </div>

           {/* Content Narrative */}
           <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 mb-4">
                 <MapPin className="w-4 h-4 text-yarndi-green" />
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Melbourne, Australia</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-premium-black mb-6 font-troopiland leading-[0.9]">
                BORN IN THE <br/>
                BACKYARD.
              </h2>
              
              <div className="prose text-lg text-gray-600 mb-8 leading-relaxed">
                <p className="mb-4">
                  Hi Yarndi started with a simple question between two mates: 
                  <span className="font-semibold text-premium-black"> "Why is recovery so complicated?"</span>
                </p>
                <p>
                  We grew up skating, surfing, and training. We didn't want synthetic neon sludge. 
                  We wanted something that felt as natural as the sport itself. 
                </p>
                <p>
                  So we stripped it back. No secret blends. No sugar crashes. 
                  Just the raw, anti-inflammatory power of Australian Hemp combined with 
                  clinical-grade electrolytes.
                </p>
              </div>

              {/* USPs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-200 pt-8 mb-8">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                        <h4 className="font-bold text-premium-black text-sm">Community First</h4>
                        <p className="text-xs text-gray-500 mt-1">Built by athletes, for athletes. We support local clubs and creators.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                        <h4 className="font-bold text-premium-black text-sm">Science Backed</h4>
                        <p className="text-xs text-gray-500 mt-1">Formulated with dietitians to hit the exact hydration sweet spot.</p>
                    </div>
                 </div>
              </div>

              {/* Athlete Endorsement */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft relative">
                  <div className="text-4xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
                  <p className="text-premium-black font-medium italic relative z-10 pl-4">
                     Recovery+ has become the only thing I drink after a long session in the water. 
                     It kills the salt thirst instantly without bloating me up.
                  </p>
                  <div className="mt-4 flex items-center gap-3 pl-4">
                      <img 
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" 
                        alt="Pro Surfer" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                          <div className="text-xs font-bold uppercase text-premium-black">Jamie L.</div>
                          <div className="text-[10px] font-bold uppercase text-yarndi-green tracking-wider">Pro Surfer</div>
                      </div>
                  </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

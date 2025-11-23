
import React from 'react';

export const PageAbout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fade-in">
        <div className="relative h-[60vh] bg-off-black flex items-center justify-center text-center px-6">
            <div className="max-w-3xl relative z-10">
                <h1 className="font-heading text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">POWERED <br/> BY HEMP.</h1>
                <p className="text-xl text-gray-300 animate-fade-in-up delay-100">Hi Yarndi is proudly Australian owned and operated. Created for athletes who want plant-based performance without the junk.</p>
            </div>
        </div>
        
        <div className="container mx-auto px-6 py-24">
             {/* Our Story Section */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 animate-slide-in-up delay-200">
                 <div>
                     <h2 className="font-heading text-3xl font-bold mb-6">OUR STORY</h2>
                     <div className="prose prose-lg text-gray-600">
                         <p className="mb-4">It started in a backyard gym in Melbourne. We were sick of synthetic pre-workouts that made our skin crawl and recovery proteins that sat heavy in our stomachs.</p>
                         <p>We wanted something that matched the way we ate and trained: clean, effective, and sustainable.</p>
                         <p>So we stripped it back. We looked at native Australian ingredients and the power of Hemp. The result is a range that supports your body, not just your ego.</p>
                     </div>
                 </div>
                 <div className="bg-gray-100 rounded-3xl h-96 overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gym Culture" />
                 </div>
             </div>

             {/* Founders Section */}
             <div className="mb-24 animate-fade-in-up delay-200">
                <h2 className="font-heading text-3xl font-bold mb-12 text-center text-off-black">MEET THE FOUNDERS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    
                    {/* Liam */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-56 h-56 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                                alt="Liam" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-off-black">Liam</h3>
                        <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 bg-off-black px-3 py-1 rounded-full mt-2">Co-Founder & Product</span>
                        <p className="text-gray-600 max-w-sm leading-relaxed">
                            The science brain. With a background in sports physiology, Liam obsesses over the efficacy of every milligram. If it doesn't have a clinical paper backing it, it doesn't go in the bag.
                        </p>
                    </div>

                    {/* Tom */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-56 h-56 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" 
                                alt="Tom" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-off-black">Tom</h3>
                        <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 bg-off-black px-3 py-1 rounded-full mt-2">Co-Founder & Brand</span>
                        <p className="text-gray-600 max-w-sm leading-relaxed">
                            The culture driver. Growing up in surf and skate scenes, Tom ensures Hi Yarndi speaks to the athlete, not just the lab coat. He keeps the brand grounded, authentic, and loud.
                        </p>
                    </div>

                </div>
             </div>

             {/* Transparency Grid */}
             <div className="bg-bloom-cream p-12 rounded-3xl text-center mb-24 animate-zoom-in delay-300">
                 <h2 className="font-heading text-2xl font-bold mb-8">FULL TRANSPARENCY</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl mb-4">🇦🇺</div>
                         <h3 className="font-bold mb-2">Australian Owned</h3>
                         <p className="text-sm text-gray-600">Proudly operated from Melbourne.</p>
                     </div>
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl mb-4">🔬</div>
                         <h3 className="font-bold mb-2">Designed in Australia</h3>
                         <p className="text-sm text-gray-600">Formulated by local dietitians.</p>
                     </div>
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl mb-4">🌏</div>
                         <h3 className="font-bold mb-2">Global Manufacturing</h3>
                         <p className="text-sm text-gray-600">Partnering with world-class hemp specialists.</p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  );
};

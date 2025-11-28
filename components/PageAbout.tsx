
import React from 'react';
import { MapPin, Users, GraduationCap, Plane } from 'lucide-react';

export const PageAbout: React.FC = () => {
  return (
    <div className="bg-theme-card min-h-screen animate-fade-in">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[70vh] bg-off-black flex items-center justify-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-off-black/50 to-off-black"></div>
            
            <div className="max-w-4xl relative z-10">
                <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">Est. Melbourne, Australia</span>
                <h1 className="font-heading text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 animate-fade-in-up delay-100 leading-[0.9]">
                    TWO MATES. <br/> ONE MISSION.
                </h1>
                <p className="text-gray-300 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-serif italic">
                    From the fields of Nudgee College to the streets of Melbourne. <br/>
                    This is the story of how we changed recovery forever.
                </p>
            </div>
        </div>
        
        <div className="container mx-auto px-6 py-12 md:py-32">
             
             {/* Chapter 1: Nudgee */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40">
                 <div className="order-2 lg:order-1 animate-slide-in-left">
                     <div className="flex items-center gap-3 mb-4 text-theme-sub">
                        <GraduationCap className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">Chapter 01: The Foundation</span>
                     </div>
                     <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-theme-text leading-tight">FORGED ON THE FIELDS.</h2>
                     <div className="prose prose-lg text-theme-sub text-sm md:text-lg leading-relaxed font-serif">
                         <p className="mb-4">
                             It didn't start with a business plan. It started in the scrum. We met at <strong className="text-theme-text">Nudgee College</strong>, a place where sport isn't just a pastime—it's a religion.
                         </p>
                         <p className="mb-4">
                             Those years taught us grit. 5 AM starts, muddy drills, and the kind of camaraderie that only comes from bleeding alongside your mates. We weren't just classmates; we were teammates. That discipline to push beyond the pain barrier was drilled into us early.
                         </p>
                         <p>
                             We learned quickly that performance wasn't just about how hard you trained, but how fast you could get back up.
                         </p>
                     </div>
                 </div>
                 <div className="order-1 lg:order-2 relative group animate-zoom-in">
                    <div className="absolute inset-0 bg-yarndi-green rounded-[3rem] rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                    <div className="relative aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Rugby Fields" />
                    </div>
                 </div>
             </div>

             {/* Chapter 2: The Uni Grind */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40">
                 <div className="relative group animate-zoom-in">
                    <div className="absolute inset-0 bg-off-black rounded-[3rem] -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>
                    <div className="relative aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Home Gym" />
                    </div>
                 </div>
                 <div className="animate-slide-in-right">
                     <div className="flex items-center gap-3 mb-4 text-theme-sub">
                        <Users className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">Chapter 02: The Gap</span>
                     </div>
                     <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-theme-text leading-tight">LIVING THE PROBLEM.</h2>
                     <div className="prose prose-lg text-theme-sub text-sm md:text-lg leading-relaxed font-serif">
                         <p className="mb-4">
                             University brought independence, and for a few years, we lived under the same roof. The training didn't stop, but the lifestyle got busier.
                         </p>
                         <p className="mb-4">
                             Our kitchen bench was a graveyard of half-empty tubs. Neon pre-workouts that made our skin crawl. Protein shakes that sat heavy in our guts like cement. We were spending a fortune on "health" products that felt anything but healthy.
                         </p>
                         <p>
                             <strong className="text-theme-text">"Why is recovery so artificial?"</strong> became the question we couldn't shake. We wanted something that matched the way we ate—clean, natural, effective.
                         </p>
                     </div>
                 </div>
             </div>

             {/* Chapter 3: Melbourne */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40">
                 <div className="order-2 lg:order-1 animate-slide-in-left">
                     <div className="flex items-center gap-3 mb-4 text-theme-sub">
                        <Plane className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">Chapter 03: The Catalyst</span>
                     </div>
                     <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-theme-text leading-tight">THE MELBOURNE SHIFT.</h2>
                     <div className="prose prose-lg text-theme-sub text-sm md:text-lg leading-relaxed font-serif">
                         <p className="mb-4">
                             Then came the move. I packed my bags for <strong className="text-theme-text">Melbourne</strong> to chase a career opportunity. The corporate grind hit hard. Long hours, high stress, and the struggle to maintain elite fitness.
                         </p>
                         <p className="mb-4">
                             But Melbourne did something else. It exposed us to a culture that valued quality over quantity. Specialty coffee, functional medicine, holistic wellness. The distance didn't break the partnership; it clarified the vision.
                         </p>
                         <p>
                             On a phone call between Brisbane and Melbourne, Hi Yarndi was born. We decided to stop waiting for a better product and build it ourselves using Australia's most misunderstood plant: <strong className="text-yarndi-green">Hemp.</strong>
                         </p>
                     </div>
                 </div>
                 <div className="order-1 lg:order-2 relative group animate-zoom-in">
                    <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                    <div className="relative aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Melbourne Laneway" />
                    </div>
                 </div>
             </div>

             {/* Founders Section */}
             <div className="mb-16 md:mb-24 animate-fade-in-up delay-200 border-t border-theme-border pt-20">
                <h2 className="font-heading text-3xl md:text-5xl font-black mb-16 text-center text-theme-text">THE TEAM</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-5xl mx-auto">
                    
                    {/* Liam */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 bg-theme-bg shadow-xl border-4 border-theme-card group-hover:scale-105 transition-transform duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                                alt="Liam" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-theme-text">Liam</h3>
                        <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 bg-off-black px-4 py-1.5 rounded-full mt-2">Product & Science</span>
                        <p className="text-theme-sub max-w-sm leading-relaxed text-sm md:text-lg font-serif italic">
                            "I don't care about trends. I care about physiology. If it's not bioavailable, it's expensive urine. We formulated Hi Yarndi to work with the body, not shock it."
                        </p>
                    </div>

                    {/* Tom */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 bg-theme-bg shadow-xl border-4 border-theme-card group-hover:scale-105 transition-transform duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" 
                                alt="Tom" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-theme-text">Tom</h3>
                        <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 bg-off-black px-4 py-1.5 rounded-full mt-2">Brand & Culture</span>
                        <p className="text-theme-sub max-w-sm leading-relaxed text-sm md:text-lg font-serif italic">
                            "We built this for the mates we grew up with. The ones who work hard, play hard, and need gear that looks as good as it performs. Melbourne style, QLD grit."
                        </p>
                    </div>

                </div>
             </div>

             {/* Transparency Grid */}
             <div className="bg-theme-bg p-8 md:p-16 rounded-[3rem] text-center mb-16 md:mb-24 animate-zoom-in delay-300 border border-theme-border shadow-2xl">
                 <h2 className="font-heading text-2xl md:text-4xl font-black mb-12 text-theme-text">THE PROMISE</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl md:text-5xl mb-4">🇦🇺</div>
                         <h3 className="font-bold text-lg mb-2 text-theme-text uppercase tracking-widest">Australian Grown</h3>
                         <p className="text-sm text-theme-sub font-serif">We source our hemp from Tasmania and Victoria, supporting local farmers.</p>
                     </div>
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl md:text-5xl mb-4">🚫</div>
                         <h3 className="font-bold text-lg mb-2 text-theme-text uppercase tracking-widest">Zero Nasties</h3>
                         <p className="text-sm text-theme-sub font-serif">No artificial colors, sweeteners, or binders. Just clean plants.</p>
                     </div>
                     <div className="hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-4xl md:text-5xl mb-4">♻️</div>
                         <h3 className="font-bold text-lg mb-2 text-theme-text uppercase tracking-widest">Sustainable</h3>
                         <p className="text-sm text-theme-sub font-serif">Hemp captures 4x more CO2 than trees. Our packaging is 100% recyclable.</p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  );
};

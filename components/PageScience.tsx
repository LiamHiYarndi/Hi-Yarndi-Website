
import React, { useState } from 'react';
import { Zap, ShieldCheck, Leaf, FlaskConical, Microscope, Activity, Droplets, Brain, Battery } from 'lucide-react';

// --- CUSTOM SVG CHARTS ---

// 1. Energy Curve (Caffeine vs L-Theanine)
const EnergyCurveChart = () => (
    <div className="relative w-full h-56 md:h-64 bg-white rounded-2xl border border-gray-100 p-4 md:p-6 overflow-hidden shadow-sm">
        <h4 className="absolute top-4 left-4 md:left-6 text-xs font-bold uppercase text-gray-400">Plasma Concentration</h4>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 top-12 left-8 md:left-12 right-4 md:right-6 bottom-8 flex flex-col justify-between pointer-events-none">
            {[1,2,3,4].map(i => <div key={i} className="border-b border-gray-100 border-dashed w-full h-0"></div>)}
        </div>
        
        <div className="absolute inset-0 top-12 left-8 right-4 bottom-8">
            <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                {/* Competitor Line (Spike & Crash) */}
                <path 
                    d="M0,180 Q60,20 80,20 Q120,180 160,180 T400,180" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                    className="opacity-40"
                />
                
                {/* Yarndi Line (Sustained) */}
                <path 
                    d="M0,180 C60,100 80,60 140,60 C240,60 300,90 400,120" 
                    fill="none" 
                    stroke="#fbbf24" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                />
                
                {/* Area under Yarndi */}
                <path 
                    d="M0,180 C60,100 80,60 140,60 C240,60 300,90 400,120 V180 H0 Z" 
                    fill="url(#energyGradient)" 
                    opacity="0.2"
                />
                
                <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        {/* Legend / Annotations */}
        <div className="absolute top-10 right-4 text-[9px] md:text-[10px] text-right space-y-1 bg-white/80 p-1 rounded backdrop-blur">
             <div className="text-yellow-600 font-bold">Energize^ (Buffered)</div>
             <div className="text-red-400 font-bold">Standard Stim (Crash)</div>
        </div>

        {/* X Axis */}
        <div className="absolute bottom-2 left-8 md:left-12 right-4 md:right-6 flex justify-between text-[8px] md:text-[10px] text-gray-400 font-bold uppercase">
            <span>0m</span>
            <span>30m</span>
            <span>60m</span>
            <span>90m</span>
            <span>120m</span>
        </div>
    </div>
);

// 2. Probiotic Survivability
const ProbioticChart = () => (
    <div className="w-full space-y-6 md:space-y-8 bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h4 className="text-xs font-bold uppercase text-gray-400 mb-4">Gastric Survival Rate (pH 2.0)</h4>
        
        {/* Yarndi Bar */}
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-blue-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4"/> B. coagulans
                </span>
                <span className="text-xs font-bold text-blue-600">~70%</span>
            </div>
            <div className="h-10 w-full bg-blue-50 rounded-lg overflow-hidden relative">
                <div className="h-full bg-blue-500 w-[70%] rounded-r-lg flex items-center justify-end px-3 animate-slide-in-right" style={{animationDuration: '1.5s'}}>
                    <span className="text-[10px] font-bold text-white/90">Spore Form</span>
                </div>
            </div>
        </div>

        {/* Competitor Bar */}
        <div className="space-y-2 opacity-60 grayscale">
            <div className="flex justify-between items-end">
                <span className="text-sm font-bold flex items-center gap-2">
                    Standard Yogurt
                </span>
                <span className="text-xs font-bold">&lt; 5%</span>
            </div>
            <div className="h-10 w-full bg-gray-100 rounded-lg overflow-hidden relative">
                <div className="h-full bg-gray-400 w-[5%] rounded-r-lg"></div>
            </div>
        </div>
        
        <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-4 mt-2">
            <strong>The Science:</strong> <em>Bacillus coagulans</em> is a spore-forming probiotic. It lies dormant inside a protective shell, allowing it to survive stomach acid.
        </p>
    </div>
);

// 3. Protein Matrix (Amino Acid Complementarity)
const ProteinMatrixChart = () => (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h4 className="text-xs font-bold uppercase text-gray-400 mb-6">Amino Acid Complementarity (PDCAAS)</h4>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 h-auto md:h-48 mb-4 relative">
            {/* Pea */}
            <div className="w-full md:w-1/4 bg-green-100 rounded-lg md:rounded-t-lg md:rounded-b-none p-3 md:p-0 relative group h-14 md:h-[60%] flex flex-row md:flex-col justify-between md:justify-end items-center md:pb-2">
                <span className="md:hidden text-xs font-bold text-green-800">Pea Protein</span>
                <div className="text-xs md:text-[10px] font-bold text-green-800 md:rotate-[-90deg] md:mb-4">Low Methionine</div>
            </div>
            {/* Plus */}
            <div className="text-gray-300 font-black text-xl rotate-90 md:rotate-0">+</div>
            {/* Hemp */}
            <div className="w-full md:w-1/4 bg-yellow-100 rounded-lg md:rounded-t-lg md:rounded-b-none p-3 md:p-0 relative group h-14 md:h-[70%] flex flex-row md:flex-col justify-between md:justify-end items-center md:pb-2">
                 <span className="md:hidden text-xs font-bold text-yellow-800">Hemp Protein</span>
                <div className="text-xs md:text-[10px] font-bold text-yellow-800 md:rotate-[-90deg] md:mb-4">Low Lysine</div>
            </div>
            {/* Equals */}
            <div className="text-gray-300 font-black text-xl rotate-90 md:rotate-0">=</div>
            {/* Fuel Matrix */}
            <div className="w-full md:w-1/3 bg-orange-500 rounded-lg md:rounded-t-lg md:rounded-b-none p-4 md:p-0 relative h-20 md:h-[95%] shadow-lg flex flex-col justify-center md:justify-end items-center md:pb-4">
                 <div className="text-sm md:text-xs font-bold text-white mb-1">Fuel*</div>
                 <div className="text-xs md:text-[10px] font-medium text-white/80">Complete Profile</div>
            </div>
        </div>
        
        <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
            By combining <strong>Pea</strong> and <strong>Hemp</strong>, Fuel* achieves a Protein Digestibility Corrected Amino Acid Score (PDCAAS) comparable to whey.
        </p>
    </div>
);

// 4. Magnesium Bioavailability Chart
const MagnesiumChart = () => (
    <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
        <h4 className="text-xs font-bold uppercase text-gray-400 mb-6">Magnesium Absorption (Bioavailability)</h4>
        
        <div className="flex flex-col gap-6">
            {/* Citrate (Yarndi) */}
            <div>
                <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-teal-600">Magnesium Citrate</span>
                    <span className="text-xs font-bold text-teal-600">High Absorption</span>
                </div>
                <div className="h-8 w-full bg-teal-50 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-[90%] rounded-full animate-slide-in-right" style={{animationDuration: '1s'}}></div>
                </div>
            </div>

            {/* Oxide (Generic) */}
            <div>
                <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-gray-400">Magnesium Oxide</span>
                    <span className="text-xs font-bold text-gray-400">~4% Absorption</span>
                </div>
                <div className="h-8 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 w-[10%] rounded-full"></div>
                </div>
            </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-6 mt-6">
            We use <strong>Magnesium Citrate</strong>, an organic salt that is highly soluble and readily absorbed by muscles.
        </p>
    </div>
);


export const PageScience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'energize' | 'gut' | 'fuel' | 'recovery_plus'>('energize');

  return (
    <div className="bg-white min-h-screen animate-fade-in">
        {/* Hero */}
        <div className="bg-off-black text-white pt-24 pb-32 md:pb-40 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur text-accent text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                    <Microscope className="w-4 h-4" /> Manufacturer Specifications
                </div>
                <h1 className="font-heading text-4xl md:text-7xl font-black mb-6 leading-[0.9] animate-fade-in-up delay-100">
                    ENGINEERED <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">FROM THE SOIL UP.</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    Exact science, dosage, and rationale behind every milligram.
                </p>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 md:px-6 -mt-20 md:-mt-24 relative z-20 pb-24">
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-fade-in-up delay-300">
                <button 
                    onClick={() => setActiveTab('energize')}
                    className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl text-xs md:text-base ${activeTab === 'energize' ? 'bg-yellow-100 text-off-black ring-2 ring-yellow-400' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                >
                    <Zap className="w-4 h-4 md:w-5 md:h-5" /> Energize^
                </button>
                <button 
                    onClick={() => setActiveTab('recovery_plus')}
                    className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl text-xs md:text-base ${activeTab === 'recovery_plus' ? 'bg-teal-100 text-off-black ring-2 ring-teal-400' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                >
                    <Battery className="w-4 h-4 md:w-5 md:h-5" /> Recovery+
                </button>
                <button 
                    onClick={() => setActiveTab('gut')}
                    className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl text-xs md:text-base ${activeTab === 'gut' ? 'bg-blue-100 text-off-black ring-2 ring-blue-400' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                >
                    <Activity className="w-4 h-4 md:w-5 md:h-5" /> Drip°
                </button>
                <button 
                    onClick={() => setActiveTab('fuel')}
                    className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl text-xs md:text-base ${activeTab === 'fuel' ? 'bg-orange-100 text-off-black ring-2 ring-orange-400' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                >
                    <Leaf className="w-4 h-4 md:w-5 md:h-5" /> Fuel*
                </button>
            </div>

            {/* Panel Content */}
            <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-2xl p-6 md:p-16 border border-gray-100 min-h-[500px] animate-fade-in-up">
                
                {/* --- ENERGY SECTION (ENERGIZE^) --- */}
                {activeTab === 'energize' && (
                    <div className="animate-fade-in">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-16">
                            <div className="lg:col-span-7">
                                <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 md:mb-6 text-off-black">TRI-ACTION ENERGY.</h2>
                                <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Energize^ uses a <strong className="text-yellow-500">Tri-Action System</strong> to Ignite, Sustain, and Repair, eliminating the crash.
                                </p>
                                
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-700 shrink-0 mt-1">
                                            <Zap className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base md:text-lg mb-1">1. IGNITE</h3>
                                            <p className="text-gray-500 text-xs md:text-sm"><strong>200mg Natural Caffeine</strong> derived from Green Tea & Guarana.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-1">
                                            <Brain className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base md:text-lg mb-1">2. SUSTAIN</h3>
                                            <p className="text-gray-500 text-xs md:text-sm"><strong>150mg L-Theanine</strong> smoothes out the "jitter" curve.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700 shrink-0 mt-1">
                                            <Leaf className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base md:text-lg mb-1">3. REPAIR</h3>
                                            <p className="text-gray-500 text-xs md:text-sm"><strong>2.5g Hemp Protein Peptides</strong> + <strong>1g Taurine</strong>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-4 md:p-8 border border-gray-100">
                                <EnergyCurveChart />
                                <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1">Vasodilation</div>
                                        <div className="text-xl md:text-2xl font-black text-off-black">2000<span className="text-[10px] md:text-xs align-top">mg</span></div>
                                        <div className="text-[10px] md:text-xs font-medium text-yellow-500 mt-1">Citrulline Malate</div>
                                    </div>
                                    <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1">Adaptogen</div>
                                        <div className="text-xl md:text-2xl font-black text-off-black">100<span className="text-[10px] md:text-xs align-top">mg</span></div>
                                        <div className="text-[10px] md:text-xs font-medium text-blue-500 mt-1">Rhodiola Extract</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* --- RECOVERY+ SECTION --- */}
                {activeTab === 'recovery_plus' && (
                    <div className="animate-fade-in">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-16">
                            <div className="lg:col-span-6">
                                <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 md:mb-6 text-off-black">SYSTEMIC RESET.</h2>
                                <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Recovery+ is a <strong>clinical-grade cool down</strong> protocol.
                                </p>
                                
                                <div className="space-y-4 md:space-y-6">
                                    <div className="bg-teal-50 p-4 md:p-6 rounded-2xl border-l-4 border-teal-500">
                                        <h3 className="font-bold text-base md:text-lg mb-2">Hemp Seed Oil (GLA)</h3>
                                        <p className="text-xs md:text-sm text-gray-600">
                                            Rich in Gamma-Linolenic Acid (GLA) to inhibit pro-inflammatory leukotrienes.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 md:p-6 rounded-2xl border-l-4 border-off-black">
                                        <h3 className="font-bold text-base md:text-lg mb-2">Magnesium Citrate (300mg)</h3>
                                        <p className="text-xs md:text-sm text-gray-600">
                                            We use Citrate, not Oxide. Highly soluble and readily absorbed to prevent cramping.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <MagnesiumChart />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- GUT SECTION (DRIP) --- */}
                {activeTab === 'gut' && (
                    <div className="animate-fade-in">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-16">
                            <div className="lg:col-span-6 order-2 lg:order-1">
                                <ProbioticChart />
                            </div>

                            <div className="lg:col-span-6 order-1 lg:order-2">
                                <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 md:mb-6 text-off-black">SYNBIOTIC HYDRATION.</h2>
                                <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Drip° pairs <strong>1 Billion CFU of Bacillus coagulans</strong> with prebiotic fibres.
                                </p>
                                <ul className="space-y-4 md:space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">1</div>
                                        <div>
                                            <h4 className="font-bold text-base md:text-lg">Spore-Forming Resilience</h4>
                                            <p className="text-xs md:text-sm text-gray-500">Survives stomach acid to colonize where it counts.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">2</div>
                                        <div>
                                            <h4 className="font-bold text-base md:text-lg">Native Botanical Blend</h4>
                                            <p className="text-xs md:text-sm text-gray-500">Includes <strong>Kakadu Plum</strong> (Vitamin C) for oxidative support.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- FUEL SECTION (FUEL*) --- */}
                {activeTab === 'fuel' && (
                    <div className="animate-fade-in">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
                             <div>
                                <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 md:mb-6 text-off-black">THE COMPLETE MATRIX.</h2>
                                <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                    Fuel* solves the "incomplete protein" problem with a precision blend of <strong>Hemp & Pea Protein</strong>.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-4 md:p-6 rounded-2xl border-l-4 border-orange-500">
                                        <h3 className="font-bold text-base md:text-lg mb-2">Edestin Protein (Hemp)</h3>
                                        <p className="text-xs md:text-sm text-gray-600">
                                            Highly digestible and structurally similar to human blood plasma proteins.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 md:p-6 rounded-2xl border-l-4 border-yellow-400">
                                        <h3 className="font-bold text-base md:text-lg mb-2">Macadamia Oil (Omega 7)</h3>
                                        <p className="text-xs md:text-sm text-gray-600">
                                            Australian Macadamia Oil provides sustained satiety.
                                        </p>
                                    </div>
                                </div>
                             </div>

                             <div className="flex flex-col gap-8">
                                 <ProteinMatrixChart />
                             </div>
                         </div>
                    </div>
                )}
                
            </div>
        </div>
    </div>
  );
};

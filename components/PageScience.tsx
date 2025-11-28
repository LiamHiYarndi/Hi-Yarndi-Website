
import React, { useState } from 'react';
import { Zap, ShieldCheck, Leaf, FlaskConical, Activity, Droplets, Brain, Sprout, Info, CheckCircle2, Dna, ArrowRight, ArrowDown, Scale, Scissors, Thermometer, Recycle, Layers, Ruler } from 'lucide-react';
import { SiteMode } from '../types';
import { LiquidBackground } from './LiquidBackground';

// --- VISUALS FOR PERFORMANCE ---

const TriActionVisual = () => (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h5 className="font-bold text-xs uppercase tracking-widest text-center mb-4 text-gray-500">Pharmacokinetic Release Profile</h5>
        <div className="flex justify-between items-end h-48 gap-2 mb-2">
            {/* Ignite Phase */}
            <div className="flex-1 flex flex-col justify-end group h-full">
                <div className="w-full bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t-lg relative overflow-hidden transition-all group-hover:opacity-90" style={{height: '40%'}}>
                    <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-yellow-900 uppercase">Ignite</div>
                </div>
            </div>
            {/* Sustain Phase */}
            <div className="flex-1 flex flex-col justify-end group h-full">
                <div className="w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg relative overflow-hidden transition-all group-hover:opacity-90" style={{height: '70%'}}>
                    <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-blue-900 uppercase">Sustain</div>
                </div>
            </div>
            {/* Repair Phase */}
            <div className="flex-1 flex flex-col justify-end group h-full">
                <div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg relative overflow-hidden transition-all group-hover:opacity-90" style={{height: '30%'}}>
                    <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-green-900 uppercase">Buffer</div>
                </div>
            </div>
        </div>
        
        {/* X-Axis Timeline */}
        <div className="border-t border-gray-300 pt-2 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            <span>0 Min</span>
            <span>30 Min</span>
            <span>60 Min</span>
            <span>90 Min+</span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="text-[10px] text-gray-500 leading-tight"><span className="font-bold text-yellow-600 block">Caffeine</span>Adenosine Antagonist</div>
            <div className="text-[10px] text-gray-500 leading-tight"><span className="font-bold text-blue-600 block">L-Tyrosine</span>Catecholamine Preservation</div>
            <div className="text-[10px] text-gray-500 leading-tight"><span className="font-bold text-green-600 block">Citrulline</span>Ammonia Scavenging</div>
        </div>
    </div>
);

const VasodilationVisual = () => (
    <div className="bg-theme-bg border border-theme-border rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-center">
        <h4 className="font-bold text-sm uppercase tracking-widest text-theme-sub mb-8 text-center">Ammonia Clearance Mechanism</h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative z-10">
            {/* Constricted */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-red-100 border-[8px] border-red-300 flex items-center justify-center relative">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    <span className="absolute -bottom-8 text-[10px] font-bold uppercase text-red-400 text-center w-32">Hyperammonemia<br/>(Fatigue)</span>
                </div>
            </div>
            
            <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
            <ArrowDown className="md:hidden w-6 h-6 text-gray-300" />

            {/* Dilated */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-green-50 border-[4px] border-green-400 flex items-center justify-center relative shadow-xl">
                    <div className="w-16 h-16 bg-green-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center justify-center text-white text-[10px] font-bold">
                        UREA<br/>CYCLE
                    </div>
                    <span className="absolute -bottom-8 text-[10px] font-bold uppercase text-green-600 text-center w-32">Scavenged by<br/>Citrulline (2g)</span>
                </div>
            </div>
        </div>
        <p className="text-center text-xs text-theme-sub mt-12 max-w-xs mx-auto leading-relaxed">
            Unlike "pump" products, we use 2g of Citrulline Malate specifically to accelerate the urea cycle, scrubbing toxic ammonia that causes the "burn".
        </p>
    </div>
);

const SporeShieldVisual = () => (
    <div className="bg-theme-bg border border-theme-border rounded-3xl p-8 relative overflow-hidden h-full flex flex-col items-center justify-center min-h-[300px]">
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
            {/* Acid Rain Labels */}
            <div className="absolute -top-6 text-[10px] font-bold uppercase text-yellow-500 animate-bounce">Stomach Acid (pH 2.0)</div>
            
            {/* Acid Rain Drops */}
            <div className="absolute -top-2 left-0 right-0 flex justify-center gap-8 z-20">
                <div className="w-1 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="w-1 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="w-1 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
            
            {/* The Spore Shell */}
            <div className="w-32 h-32 relative z-10 mt-4">
                {/* Outer Shield */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    {/* Inner Bacteria */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-blue-200">
                        <span className="text-[10px] font-bold text-blue-800 text-center leading-tight">GBI-30<br/>Spore</span>
                    </div>
                </div>
                
                {/* Deflection Arc */}
                <div className="absolute -top-4 left-0 right-0 h-4 border-t-4 border-yellow-400 rounded-[50%] opacity-60"></div>
            </div>
        </div>
        <h4 className="font-bold text-sm uppercase tracking-widest text-theme-text mb-2">Spore Shield Tech</h4>
        <p className="text-center text-xs text-theme-sub max-w-xs leading-relaxed">
            Most kombucha cultures die in the stomach. Bacillus coagulans GBI-30 uses a natural protein shell to survive acid, activating only in the gut.
        </p>
    </div>
);

const OsmolalityVisual = () => (
    <div className="bg-theme-bg border border-theme-border rounded-3xl p-8 relative overflow-hidden min-h-[300px] h-full flex flex-col justify-center">
        <h4 className="font-bold text-sm uppercase tracking-widest text-theme-sub mb-6 text-center">Glycogen Resynthesis (3:1 Ratio)</h4>
        
        <div className="relative h-48 flex items-center justify-center">
            {/* The Cell Wall */}
            <div className="absolute top-0 bottom-0 w-4 bg-gray-200 border-x border-gray-300 z-10 flex flex-col justify-center items-center">
                <span className="absolute -top-6 text-[9px] font-bold uppercase text-gray-400 whitespace-nowrap">Muscle Cell</span>
                {/* The Gate (GLUT4) */}
                <div className="w-12 h-20 bg-teal-600 rounded-lg shadow-lg flex items-center justify-center relative z-20 border-2 border-white">
                    <span className="text-white font-bold text-[10px] rotate-90">GLUT4</span>
                </div>
            </div>

            {/* Left Side (Bloodstream) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-center w-1/3">
                <div className="flex justify-center gap-1 mb-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" title="Glucose"></div>
                    <div className="w-3 h-3 bg-white border border-gray-300 rounded-full" title="Amino Acid"></div>
                </div>
                <span className="text-[10px] font-bold uppercase text-gray-400 block mb-2">Substrates</span>
                <div className="w-8 h-8 bg-teal-400 rounded-full mx-auto animate-pulse opacity-50"></div>
                <span className="text-[10px] font-bold text-teal-500 block mt-1">Insulin Spike</span>
            </div>

            {/* Arrow through gate */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-32 h-8 flex items-center justify-center opacity-50">
                <ArrowRight className="w-8 h-8 text-white animate-pulse" />
            </div>

            {/* Right Side (Storage) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-center w-1/3">
                <div className="w-full h-24 bg-teal-50 rounded-xl border border-teal-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-teal-400 uppercase">Glycogen<br/>Restored</span>
                </div>
            </div>
        </div>

        <p className="text-center text-xs text-theme-sub mt-4 leading-relaxed">
            The <strong>3:1 Carb:Protein</strong> stoichiometry maximizes the insulin signaling pathway to drive nutrients through the GLUT4 transporter for rapid repair.
        </p>
    </div>
);

// --- VISUALS FOR MERCH ---

const GsmVisual = () => (
    <div className="w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center h-full">
        <h5 className="font-bold text-xs uppercase tracking-widest text-center mb-8 text-gray-500">Fabric Density Comparison</h5>
        <div className="flex justify-center items-end gap-8 h-48">
            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="w-full bg-gray-200 rounded-t-lg relative" style={{height: '60%'}}>
                    <span className="absolute -top-6 left-0 right-0 text-center text-[10px] font-bold text-gray-400">Standard</span>
                </div>
                <span className="font-bold text-sm text-gray-400">300 GSM</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="w-full bg-off-black rounded-t-lg relative shadow-xl" style={{height: '100%'}}>
                    <span className="absolute -top-6 left-0 right-0 text-center text-[10px] font-bold text-white bg-off-black px-2 py-1 rounded">Yarndi</span>
                </div>
                <span className="font-bold text-xl text-off-black">500 GSM</span>
            </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
            Gram per Square Meter. Higher density means better drape, structural integrity, and warmth.
        </p>
    </div>
);

const FiberVisual = () => (
    <div className="w-full bg-theme-bg p-8 rounded-3xl border border-theme-border flex items-center justify-center h-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
        <div className="relative w-48 h-48">
            {/* Cotton Strand */}
            <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-300 rounded-full rotate-45 opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-300 rounded-full -rotate-45 opacity-50"></div>
            
            {/* Hemp Strand (Stronger/Thicker) */}
            <div className="absolute top-1/2 left-0 w-full h-6 bg-yarndi-green rounded-full rotate-45 z-10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-0 w-full h-6 bg-yarndi-green rounded-full -rotate-45 z-10 mix-blend-multiply"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-3 rounded-full shadow-lg font-bold text-xs uppercase tracking-widest border border-gray-100 z-20">
                    Interlock
                </div>
            </div>
        </div>
    </div>
);

interface Props {
    siteMode: SiteMode;
}

export const PageScience: React.FC<Props> = ({ siteMode }) => {
    const [activeTab, setActiveTab] = useState<'energize' | 'recovery' | 'drip' | 'fuel'>('energize');
    const [activeMerchTab, setActiveMerchTab] = useState<'fiber' | 'weight' | 'construction'>('fiber');

    // --- MERCH DATA ---
    const merchPhilosophy = [
        {
            title: "Heavyweight Engineering",
            icon: <Scale className="w-6 h-6 text-off-black" />,
            desc: "We don't do fast fashion. Our 500GSM French Terry is nearly double the weight of standard hoodies, built to withstand decades of wear, not just seasons."
        },
        {
            title: "Sustainable Fiber",
            icon: <Recycle className="w-6 h-6 text-green-600" />,
            desc: "Hemp requires 50% less water than cotton and zero pesticides. It regenerates the soil it grows in, making every garment a vote for the planet."
        },
        {
            title: "Structural Fit",
            icon: <Ruler className="w-6 h-6 text-blue-600" />,
            desc: "Fabric weight determines silhouette. Our heavy blends resist drooping and twisting, maintaining a structured, architectural fit wash after wash."
        }
    ];

    const merchGlossary = [
        { term: "GSM", def: "Grams per Square Meter. A measure of fabric density. 500GSM provides superior warmth and structural integrity." },
        { term: "French Terry", def: "A knit construction with loops on the inside for breathability and a smooth surface on the outside." },
        { term: "Drop Shoulder", def: "A seam placement that falls below the natural shoulder line, creating a relaxed, streetwear silhouette." },
        { term: "Puff Print", def: "A screen printing technique using plastisol ink that expands when heated, creating a 3D relief effect." },
        { term: "Bast Fiber", def: "Plant fibers collected from the phloem (inner bark) of the hemp stalk, known for high tensile strength." },
        { term: "Pre-Shrunk", def: "Fabric treated during manufacturing to minimize shrinkage in the wash, ensuring consistent fit." },
    ];

    // --- PERFORMANCE DATA ---
    const philosophyPoints = [
        {
            title: "Bio-Efficacious Naturalism",
            icon: <Sprout className="w-6 h-6 text-yarndi-green" />,
            desc: "We reject the binary of 'Clinical vs. Natural'. We use ingredients that are naturally derived but chemically selected for their specific synergistic interactions within human metabolism."
        },
        {
            title: "The Hemp Foundation",
            icon: <Leaf className="w-6 h-6 text-teal-600" />,
            desc: "Hemp Seed Extract is our nutritional scaffold. Rich in Edestin (globulin protein) and an optimal 3:1 ratio of Omega-6 to Omega-3, it provides the anti-inflammatory baseline for all our formulas."
        },
        {
            title: "Systemic Synergy",
            icon: <Activity className="w-6 h-6 text-accent" />,
            desc: "We design for the Gut-Brain-Muscle axis. Fatigue is not just muscular; it's neurological and systemic. Our formulas address the root cause, not just the symptom."
        }
    ];

    const glossary = [
        { term: "Bacillus coagulans GBI-30", def: "A spore-forming probiotic that survives stomach acid to support protein absorption and gut immunity." },
        { term: "Edestin", def: "A globular hemp protein highly similar to human blood plasma, ensuring 90%+ digestibility without bloating." },
        { term: "L-Tyrosine", def: "A precursor amino acid that replenishes dopamine levels in the brain to prevent cognitive fatigue during stress." },
        { term: "Citrulline Malate", def: "A compound that accelerates the Urea Cycle to remove toxic ammonia (waste) from the blood during exercise." },
        { term: "Acacia Fibre", def: "A complex, slow-fermenting prebiotic fiber that feeds gut bacteria throughout the entire colon without gas." },
        { term: "Magnesium Bisglycinate", def: "Magnesium bound to glycine for maximum absorption and calming effects on the nervous system." },
    ];

    // --- RENDER: MERCH MODE ---
    if (siteMode === 'merch') {
        return (
            <div className="min-h-screen bg-theme-bg pb-20 animate-fade-in relative overflow-hidden">
                <LiquidBackground variant="neon" />
                
                {/* HERO HEADER */}
                <div className="bg-off-black text-white pt-16 pb-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 border border-gray-700 bg-white/5 backdrop-blur px-3 py-1 rounded-full mb-6">
                            <Scissors className="w-3 h-3 text-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Fabric Engineering</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-7xl font-black mb-6 uppercase leading-none">
                            Material <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">Innovation.</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-serif italic leading-relaxed">
                            "Fast fashion is broken. We build gear for the long haul." <br/>
                            Heavyweight hemp blends engineered for the street and the squat rack.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6 -mt-12 relative z-20">
                    
                    {/* 1. PHILOSOPHY SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {merchPhilosophy.map((point, i) => (
                            <div key={i} className="bg-theme-card p-8 rounded-3xl shadow-xl border border-theme-border hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center mb-6 border border-theme-border shadow-sm">
                                    {point.icon}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-theme-text mb-3 uppercase tracking-wide">{point.title}</h3>
                                <p className="text-sm text-theme-sub leading-relaxed font-medium">{point.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 2. DEEP DIVES */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl font-black text-theme-text uppercase">Fabric Specs</h2>
                            <p className="text-theme-sub mt-2">The science behind the stitch.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {[
                                { id: 'fiber', label: 'The Fiber' },
                                { id: 'weight', label: 'The Weight' },
                                { id: 'construction', label: 'The Build' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveMerchTab(tab.id as any)}
                                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border-2 ${
                                        activeMerchTab === tab.id 
                                        ? 'bg-off-black text-white border-off-black shadow-lg scale-105' 
                                        : 'bg-transparent text-theme-sub border-theme-border hover:border-gray-400'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="bg-theme-card border border-theme-border rounded-[3rem] p-8 md:p-16 shadow-2xl animate-fade-in min-h-[500px]">
                            {/* FIBER TAB */}
                            {activeMerchTab === 'fiber' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Hemp vs. Cotton</h3>
                                            <p className="text-lg font-serif text-theme-sub italic">Target: Durability & Breathability</p>
                                        </div>
                                        <div className="prose text-theme-sub text-sm leading-loose">
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">Tensile Strength:</strong> Hemp fiber is one of the strongest natural fibers on the planet, with 4x the tensile strength of cotton. This prevents warping, holes, and thinning over time.
                                            </p>
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">The Blend (55/45):</strong> Pure hemp can be coarse. We blend 55% Hemp for structure with 45% Organic Cotton for softness. This creates a "best of both worlds" fabric that gets softer with every wash but never loses its shape.
                                            </p>
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">Antimicrobial:</strong> Hemp has natural antibacterial properties, reducing odors even after intense training sessions.
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" /> 4x Stronger than Cotton
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Naturally Anti-Odor
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="h-full">
                                        <FiberVisual />
                                    </div>
                                </div>
                            )}

                            {/* WEIGHT TAB */}
                            {activeMerchTab === 'weight' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">500GSM Heavyweight</h3>
                                            <p className="text-lg font-serif text-theme-sub italic">Target: Warmth & Silhouette</p>
                                        </div>
                                        <div className="prose text-theme-sub text-sm leading-loose">
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">Defining GSM:</strong> "Grams per Square Meter" measures fabric density. Standard fast-fashion hoodies sit around 280-300 GSM. They feel thin and lose shape quickly.
                                            </p>
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">The 500 Advantage:</strong> Our Founders Edition hoodie is 500 GSM. This density provides superior thermal insulation without bulk, and crucially, creates a structured silhouette that stands off the body rather than clinging to it.
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-off-black" /> Premium Heavyweight Drape
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-off-black" /> Superior Heat Retention
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="h-full">
                                        <GsmVisual />
                                    </div>
                                </div>
                            )}

                            {/* CONSTRUCTION TAB */}
                            {activeMerchTab === 'construction' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Built for Abuse</h3>
                                            <p className="text-lg font-serif text-theme-sub italic">Target: Longevity</p>
                                        </div>
                                        <div className="prose text-theme-sub text-sm leading-loose">
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">French Terry Weave:</strong> Unlike fleece which can pill and shed, our French Terry features moisture-wicking loops on the interior. It allows air circulation during training while insulating heat during rest.
                                            </p>
                                            <p>
                                                <strong className="text-theme-text uppercase text-xs tracking-wider">Reinforced Stitching:</strong> All high-stress points (shoulders, cuffs, hem) feature double-needle cover stitching to prevent seam failure under tension.
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-gray-600" /> Anti-Pill Interior
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                                <CheckCircle2 className="w-5 h-5 text-gray-600" /> Double Needle Seams
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center">
                                        <div className="text-center space-y-4 opacity-50">
                                            <Layers className="w-24 h-24 text-off-black mx-auto" />
                                            <h4 className="font-bold text-off-black uppercase">French Terry Loop</h4>
                                            <p className="text-xs text-gray-500">Breathable Interior Structure</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 3. GLOSSARY */}
                    <div className="mb-20">
                        <h2 className="font-heading text-2xl font-bold text-theme-text mb-8 border-b border-theme-border pb-4 uppercase">Material Codex</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {merchGlossary.map((item, i) => (
                                <div key={i} className="bg-theme-card p-6 rounded-2xl border border-theme-border hover:border-theme-text transition-colors group">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-theme-sub mt-0.5 group-hover:text-accent transition-colors" />
                                        <div>
                                            <h4 className="font-bold text-sm text-theme-text uppercase tracking-wider mb-2">{item.term}</h4>
                                            <p className="text-xs text-theme-sub leading-relaxed">{item.def}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // --- RENDER: PERFORMANCE MODE (EXISTING) ---
    return (
        <div className="min-h-screen bg-theme-bg pb-20 animate-fade-in relative overflow-hidden">
            <LiquidBackground variant="light" />
            
            {/* HERO HEADER */}
            <div className="bg-off-black text-white pt-16 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 border border-gray-700 bg-white/5 backdrop-blur px-3 py-1 rounded-full mb-6">
                        <FlaskConical className="w-3 h-3 text-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Research & Development</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-7xl font-black mb-6 uppercase leading-none">
                        Physiology <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yarndi-green to-emerald-400">First.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-serif italic leading-relaxed">
                        "If it’s not bioavailable, it’s expensive urine." <br/>
                        Our formulations are built on rigorous stoichiometry, not marketing trends.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-12 relative z-20">
                
                {/* 1. PHILOSOPHY SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {philosophyPoints.map((point, i) => (
                        <div key={i} className="bg-theme-card p-8 rounded-3xl shadow-xl border border-theme-border hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-theme-bg flex items-center justify-center mb-6 border border-theme-border shadow-sm">
                                {point.icon}
                            </div>
                            <h3 className="font-heading text-lg font-bold text-theme-text mb-3 uppercase tracking-wide">{point.title}</h3>
                            <p className="text-sm text-theme-sub leading-relaxed font-medium">{point.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 2. PRODUCT DEEP DIVES */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-black text-theme-text uppercase">Molecular Mechanisms</h2>
                        <p className="text-theme-sub mt-2">Select a formulation to explore its architecture.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {[
                            { id: 'energize', label: 'Energize^' },
                            { id: 'recovery', label: 'Recovery+' },
                            { id: 'drip', label: 'Drip°' },
                            { id: 'fuel', label: 'Fuel*' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border-2 ${
                                    activeTab === tab.id 
                                    ? 'bg-off-black text-white border-off-black shadow-lg scale-105' 
                                    : 'bg-transparent text-theme-sub border-theme-border hover:border-gray-400'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="bg-theme-card border border-theme-border rounded-[3rem] p-8 md:p-16 shadow-2xl animate-fade-in min-h-[600px]">
                        
                        {/* ENERGIZE */}
                        {activeTab === 'energize' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Neuro-Metabolic Potentiation</h3>
                                        <p className="text-lg font-serif text-theme-sub italic">Target: Central Nervous System & Ammonia Clearance</p>
                                    </div>
                                    <div className="prose text-theme-sub text-sm leading-loose">
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">The Central Fatigue Hypothesis:</strong> During high-intensity exertion, dopamine levels deplete while serotonin rises, causing the brain to "refuse" to drive muscle contraction. Energize^ targets this failure point.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">The 500mg Tyrosine Lock:</strong> We pair 200mg of Caffeine (an adenosine antagonist) with <span className="bg-yellow-100 px-1 rounded text-yellow-800 font-bold">500mg of L-Tyrosine</span>. While caffeine increases neuronal firing, Tyrosine provides the precursor to replenish the dopamine being consumed. This "push-pull" mechanic prevents the crash and sustains cognitive drive.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Peripheral Buffering:</strong> We include <span className="bg-green-100 px-1 rounded text-green-800 font-bold">2g of Citrulline Malate</span>. Often mistaken as just a "pump" ingredient, at this dosage it primes the Urea Cycle to scavenge ammonia (a metabolic toxin) from the blood, delaying peripheral acidosis.
                                        </p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Prevents Dopamine Depletion
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Scavenges Metabolic Ammonia
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <TriActionVisual />
                                    <div className="h-64">
                                        <VasodilationVisual />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* RECOVERY */}
                        {activeTab === 'recovery' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Systemic Repair Matrix</h3>
                                        <p className="text-lg font-serif text-theme-sub italic">Target: Glycogen Resynthesis & Inflammation</p>
                                    </div>
                                    <div className="prose text-theme-sub text-sm leading-loose">
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">The Golden Ratio (3:1):</strong> Recovery+ utilizes a precise stoichiometry of 3 parts Carbohydrate (Maltodextrin) to 1 part Protein. This specific ratio stimulates an insulin spike that drives amino acids into the muscle cell via the GLUT4 transporter more effectively than protein alone.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Hemp Edestin:</strong> We use Hemp Protein for its globulin structure (Edestin), which mimics human blood plasma for high digestibility. Crucially, it retains Omega-3 (ALA) and GLA to actively resolve systemic inflammation post-training.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Nervous System Reset:</strong> Included is <span className="bg-blue-100 px-1 rounded text-blue-800 font-bold">Magnesium Bisglycinate</span>. Unlike oxide, this chelated form crosses the blood-brain barrier to calm the sympathetic nervous system, transitioning the body from "Fight or Flight" to "Rest and Repair".
                                        </p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" /> Rapid Glycogen Reloading
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500" /> Anti-Inflammatory Lipids
                                        </li>
                                    </ul>
                                </div>
                                <div className="h-full">
                                    <OsmolalityVisual />
                                </div>
                            </div>
                        )}

                        {/* DRIP */}
                        {activeTab === 'drip' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Synbiotic Stability</h3>
                                        <p className="text-lg font-serif text-theme-sub italic">Target: Microbiome & Mucosal Barrier</p>
                                    </div>
                                    <div className="prose text-theme-sub text-sm leading-loose">
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">The Survivability Crisis:</strong> Traditional kombuchas rely on fragile vegetative bacteria that often die in acid. Drip° uses <span className="bg-purple-100 px-1 rounded text-purple-800 font-bold">Bacillus coagulans GBI-30</span>, a spore-forming strain encased in a natural protein shell. It remains dormant in the can and stomach, germinating only when it reaches the gut.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Dual-Fiber Matrix:</strong> Single-source inulin often causes bloating due to rapid fermentation. We combine Inulin (fast fermenting) with <span className="bg-orange-100 px-1 rounded text-orange-800 font-bold">Acacia Fibre</span> (slow fermenting). This ensures full-colon coverage and eliminates gas production.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Mucosal Healing:</strong> A botanical complex of Kudzu and Calendula provides anti-inflammatory support to the gut lining, aiding in the repair of "leaky gut" tight junctions.
                                        </p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-purple-500" /> 10x Survivability vs Yogurt
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500" /> Zero Bloat Fiber Blend
                                        </li>
                                    </ul>
                                </div>
                                <div className="h-full">
                                    <SporeShieldVisual />
                                </div>
                            </div>
                        )}

                        {/* FUEL */}
                        {activeTab === 'fuel' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-heading text-3xl font-black text-theme-text mb-2 uppercase">Nutritional Architecture</h3>
                                        <p className="text-lg font-serif text-theme-sub italic">Target: Complete Anabolism & Glycogen</p>
                                    </div>
                                    <div className="prose text-theme-sub text-sm leading-loose">
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Amino Acid Complementation:</strong> Plant proteins are often incomplete. Fuel* pairs Hemp (High Methionine) with Pea (High Lysine). This complementary action creates a PDCAAS (Protein Digestibility) score comparable to animal sources, ensuring full muscle repair.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Glucose vs. Fructose:</strong> Competitors use dates (high fructose), which refill liver glycogen. We use <span className="bg-yellow-100 px-1 rounded text-yellow-800 font-bold">Brown Rice Syrup</span>, a complex glucose polymer. Glucose preferentially refills skeletal muscle glycogen, making it the superior fuel for athletic recovery.
                                        </p>
                                        <p>
                                            <strong className="text-theme-text uppercase text-xs tracking-wider">Functional Lipids:</strong> We include Macadamia Oil, rich in Palmitoleic Acid (Omega-7). Research suggests Omega-7 improves insulin sensitivity, helping partition nutrients into muscle tissue rather than fat storage.
                                        </p>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Complete EAA Profile
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-theme-text">
                                            <CheckCircle2 className="w-5 h-5 text-yellow-500" /> Muscle-Specific Glycogen
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <Dna className="w-24 h-24 text-gray-300 mx-auto" />
                                        <h4 className="font-bold text-theme-text uppercase">Amino Acid Synergy</h4>
                                        <div className="flex justify-center gap-4 text-xs">
                                            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                                                <span className="block font-bold text-green-600">Hemp</span>
                                                Methionine + Cysteine
                                            </div>
                                            <div className="flex items-center text-gray-400">+</div>
                                            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                                                <span className="block font-bold text-yellow-600">Pea</span>
                                                Lysine + BCAAs
                                            </div>
                                        </div>
                                        <p className="text-xs text-theme-sub pt-4">= Complete Protein Synthesis</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* 3. GLOSSARY */}
                <div className="mb-20">
                    <h2 className="font-heading text-2xl font-bold text-theme-text mb-8 border-b border-theme-border pb-4 uppercase">Ingredient Codex</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {glossary.map((item, i) => (
                            <div key={i} className="bg-theme-card p-6 rounded-2xl border border-theme-border hover:border-theme-text transition-colors group">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-theme-sub mt-0.5 group-hover:text-accent transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-sm text-theme-text uppercase tracking-wider mb-2">{item.term}</h4>
                                        <p className="text-xs text-theme-sub leading-relaxed">{item.def}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

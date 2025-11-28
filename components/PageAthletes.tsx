
import React, { useState } from 'react';
import { athleteUseCases } from '../data';
import { Button } from './Button';
import { Activity, ArrowRight, Scale, Ruler, Zap, Heart, TrendingUp, User } from 'lucide-react';

export const PageAthletes: React.FC = () => {
  const [activeTab, setActiveTab] = useState(athleteUseCases[0].id);
  const activeCase = athleteUseCases.find(c => c.id === activeTab) || athleteUseCases[0];

  // Calculator State
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [goal, setGoal] = useState('performance');
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getRecommendation = () => {
      const bmi = parseFloat(calculateBMI());
      let type = "Athletic";
      if (bmi < 18.5) type = "Lean";
      else if (bmi >= 25) type = "Power";

      // Recommendation Logic
      if (goal === 'recovery') {
          return {
              product: "Recovery+",
              desc: "Focus on rapid glycogen replenishment and inflammation reduction.",
              bundle: "Recovery Kit"
          };
      } else if (goal === 'energy') {
          return {
              product: "Energize^",
              desc: "Sustain cognitive drive without the crash during high output.",
              bundle: "Performance Pack"
          };
      } else if (goal === 'muscle') {
          return {
              product: "Fuel* + Recovery+",
              desc: "Maximize protein synthesis and calorie surplus for growth.",
              bundle: "Ultimate Stack"
          };
      } else {
          return {
              product: "The Ultimate Bundle",
              desc: "Complete coverage for high-performance demands.",
              bundle: "Ultimate Hi Yarndi Kit"
          };
      }
  };

  const rec = getRecommendation();
  const bmi = calculateBMI();

  return (
    <div className="bg-theme-bg min-h-screen pb-20 animate-fade-in">
        
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 text-center px-6">
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-4 text-theme-text">ATHLETE PROTOCOLS</h1>
            <p className="text-theme-sub text-sm md:text-lg max-w-2xl mx-auto">
                Different sports load your body differently. Find the stack that matches your physiology.
            </p>
        </div>

        {/* --- SECTION 1: SPORT USE CASES (EXISTING) --- */}
        <div className="container mx-auto px-6 mb-24 border-b border-theme-border pb-16">
            <div className="flex justify-start md:justify-center gap-4 mb-8 md:mb-12 overflow-x-auto pb-4 no-scrollbar px-1">
                {athleteUseCases.map(useCase => (
                    <button 
                        key={useCase.id}
                        onClick={() => setActiveTab(useCase.id)}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 shrink-0 ${activeTab === useCase.id ? 'bg-theme-text text-theme-bg shadow-lg scale-105' : 'bg-theme-card text-theme-sub hover:bg-theme-bg hover:scale-105 border border-theme-border'}`}
                    >
                        {useCase.title}
                    </button>
                ))}
            </div>

            <div key={activeTab} className="bg-theme-card border border-theme-border p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] max-w-4xl mx-auto animate-zoom-in shadow-xl relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

                <h2 className="text-xl md:text-3xl font-heading font-black mb-4 text-theme-text uppercase tracking-wide relative z-10">{activeCase.title}</h2>
                <p className="text-theme-sub mb-8 md:mb-10 text-sm md:text-base relative z-10 font-medium">{activeCase.description}</p>
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                    {activeCase.schedule.map((item, i) => (
                        <div key={i} className="bg-theme-bg p-4 md:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up border border-theme-border" style={{animationDelay: `${i * 100}ms`}}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-theme-card border border-theme-border flex items-center justify-center font-bold text-xs text-theme-sub shrink-0">
                                    {item.time.split(' ')[0]}<br/>{item.time.split(' ')[1]}
                                </div>
                                <div>
                                    <span className="font-heading font-black text-lg text-theme-text block">{item.product}</span>
                                    <span className="text-xs text-accent font-bold uppercase tracking-widest">Protocol Step {i+1}</span>
                                </div>
                            </div>
                            <div className="text-xs md:text-sm text-theme-sub bg-theme-card/50 px-4 py-3 rounded-xl border border-theme-border/50 md:max-w-xs italic">
                                "{item.note}"
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- SECTION 2: BIOMETRIC STACK BUILDER (NEW) --- */}
        <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                        <Activity className="w-4 h-4" /> Interactive Tool
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 text-theme-text">STACK BUILDER</h2>
                    <p className="text-theme-sub text-lg max-w-xl mx-auto">
                        Analyze your biometrics to find your optimal performance protocol.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white dark:bg-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-theme-border">
                    
                    {/* Left: Controls */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-bold text-theme-text text-sm uppercase tracking-wider">
                                    <Ruler className="w-4 h-4 text-theme-sub" /> Height
                                </label>
                                <span className="bg-theme-bg px-3 py-1 rounded-lg border border-theme-border font-mono font-bold text-accent">{height} cm</span>
                            </div>
                            <input 
                                type="range" 
                                min="140" 
                                max="220" 
                                value={height} 
                                onChange={(e) => setHeight(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-off-black"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-bold text-theme-text text-sm uppercase tracking-wider">
                                    <Scale className="w-4 h-4 text-theme-sub" /> Weight
                                </label>
                                <span className="bg-theme-bg px-3 py-1 rounded-lg border border-theme-border font-mono font-bold text-accent">{weight} kg</span>
                            </div>
                            <input 
                                type="range" 
                                min="40" 
                                max="150" 
                                value={weight} 
                                onChange={(e) => setWeight(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-off-black"
                            />
                        </div>

                        <div>
                            <label className="flex items-center gap-2 font-bold text-theme-text text-sm uppercase tracking-wider mb-4">
                                <TrendingUp className="w-4 h-4 text-theme-sub" /> Primary Goal
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 'performance', label: 'Overall Perf.', icon: Zap },
                                    { id: 'recovery', label: 'Deep Recovery', icon: Heart },
                                    { id: 'energy', label: 'High Energy', icon: Activity },
                                    { id: 'muscle', label: 'Muscle Growth', icon: User }
                                ].map(g => (
                                    <button
                                        key={g.id}
                                        onClick={() => setGoal(g.id)}
                                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${goal === g.id ? 'border-theme-text bg-theme-text text-theme-bg shadow-md' : 'border-theme-border bg-theme-bg text-theme-sub hover:border-gray-300'}`}
                                    >
                                        <g.icon className="w-6 h-6 mb-2" />
                                        <span className="text-xs font-bold uppercase tracking-wide">{g.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button fullWidth size="lg" onClick={() => setShowResult(true)}>
                            Analyze Profile
                        </Button>
                    </div>

                    {/* Right: Results */}
                    <div className={`relative bg-theme-bg rounded-3xl border border-theme-border overflow-hidden transition-all duration-500 flex flex-col items-center justify-center text-center p-8 ${showResult ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                        {!showResult && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                                <span className="font-bold text-theme-sub text-sm uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm">Enter stats to view</span>
                            </div>
                        )}

                        <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                    className="text-gray-200"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                    strokeDasharray={440}
                                    strokeDashoffset={440 - (440 * (Math.min(parseFloat(bmi), 40) / 40))}
                                    className="text-accent transition-all duration-1000 ease-out"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-4xl font-black text-theme-text">{bmi}</span>
                                <span className="text-[10px] font-bold uppercase text-theme-sub tracking-widest">BMI Score</span>
                            </div>
                        </div>

                        <h3 className="font-heading font-bold text-xl text-theme-text mb-2 uppercase">Recommended Protocol</h3>
                        <div className="bg-theme-card w-full p-4 rounded-xl border border-theme-border mb-6">
                            <span className="text-2xl font-black text-theme-text block mb-1">{rec.product}</span>
                            <span className="text-xs text-theme-sub font-medium">{rec.desc}</span>
                        </div>

                        <Button className="group">
                            Shop {rec.bundle} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>

    </div>
  );
};

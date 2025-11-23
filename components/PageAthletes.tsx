import React, { useState } from 'react';
import { athleteUseCases } from '../data';

export const PageAthletes: React.FC = () => {
  const [activeTab, setActiveTab] = useState(athleteUseCases[0].id);
  const activeCase = athleteUseCases.find(c => c.id === activeTab) || athleteUseCases[0];

  return (
    <div className="bg-white min-h-screen py-20 animate-fade-in">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="font-heading text-5xl font-black mb-4">YOUR SPORT. YOUR STACK.</h1>
                <p className="text-gray-600">Different sports load your body differently. Here is how Hi Yarndi slots into your week.</p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap animate-fade-in-up delay-100">
                {athleteUseCases.map(useCase => (
                    <button 
                        key={useCase.id}
                        onClick={() => setActiveTab(useCase.id)}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === useCase.id ? 'bg-primary text-white shadow-glow scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:scale-105'}`}
                    >
                        {useCase.title}
                    </button>
                ))}
            </div>

            <div key={activeTab} className="bg-off-white p-8 md:p-12 rounded-[3rem] max-w-4xl mx-auto animate-zoom-in">
                <h2 className="text-2xl font-bold mb-4">{activeCase.title}</h2>
                <p className="text-gray-600 mb-10">{activeCase.description}</p>
                
                <div className="space-y-6">
                    {activeCase.schedule.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                            <div>
                                <span className="text-xs font-bold uppercase text-gray-400 block mb-1">{item.time}</span>
                                <span className="font-bold text-lg text-off-black">{item.product}</span>
                            </div>
                            <div className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                                {item.note}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
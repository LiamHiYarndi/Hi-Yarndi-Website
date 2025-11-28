
import React from 'react';
import { Button } from './Button';
import { PageView } from '../types';

interface Props {
    onNavigate: (page: PageView) => void;
}

export const PageRanges: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-theme-bg min-h-screen">
        <section className="py-12 md:py-20 bg-theme-card text-center px-6 transition-colors duration-300">
            <h1 className="font-tropiland text-3xl md:text-6xl mb-4 md:mb-6 text-theme-text animate-fade-in-up">FOUR RANGES. <br/> ONE GOAL.</h1>
            <p className="text-sm md:text-lg text-theme-sub max-w-2xl mx-auto animate-fade-in-up delay-100">
                From pre-session energy to post-session recovery, each Hi Yarndi range is engineered to support a specific phase of your training day.
            </p>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-6 md:py-12 space-y-8 md:space-y-12 overflow-hidden">
            {/* Recovery+ */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-3xl md:rounded-[3rem] p-6 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-left">
                <div className="order-2 md:order-1">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-theme-card text-teal-600 font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4 md:mb-6">Post-Session</span>
                    <h2 className="font-tropiland text-2xl md:text-5xl text-teal-700 dark:text-teal-400 mb-4 md:mb-6">RECOVERY+</h2>
                    <p className="text-sm md:text-xl font-medium text-teal-900 dark:text-teal-200 mb-6 md:mb-8">Plant-based recovery hydration made for the bounce-back.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Recovery+</Button>
                </div>
                <div className="order-1 md:order-2 aspect-square bg-teal-100 dark:bg-teal-800/40 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
            </div>

            {/* Energize^ */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-3xl md:rounded-[3rem] p-6 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-right">
                <div className="aspect-square bg-yellow-100 dark:bg-yellow-800/40 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
                <div>
                    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-theme-card text-yellow-600 font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4 md:mb-6">Pre-Workout</span>
                    <h2 className="font-tropiland text-2xl md:text-5xl text-yellow-700 dark:text-yellow-400 mb-4 md:mb-6">ENERGIZE^</h2>
                    <p className="text-sm md:text-xl font-medium text-yellow-900 dark:text-yellow-200 mb-6 md:mb-8">Pre-session energy and focus support for when you need to switch on.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Energize^</Button>
                </div>
            </div>

            {/* Drip */}
            <div className="bg-sky-50 dark:bg-sky-900/20 rounded-3xl md:rounded-[3rem] p-6 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-left">
                 <div className="order-2 md:order-1">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-theme-card text-blue-600 font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4 md:mb-6">Daily Hydration</span>
                    <h2 className="font-tropiland text-2xl md:text-5xl text-blue-700 dark:text-blue-400 mb-4 md:mb-6">DRIP°</h2>
                    <p className="text-sm md:text-xl font-medium text-sky-900 dark:text-sky-200 mb-6 md:mb-8">Daily hydration and functional support for busy, active days.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Drip°</Button>
                </div>
                <div className="order-1 md:order-2 aspect-square bg-sky-100 dark:bg-sky-800/40 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
            </div>

            {/* Fuel* */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-3xl md:rounded-[3rem] p-6 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-right">
                <div className="aspect-square bg-orange-100 dark:bg-orange-800/40 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
                <div>
                    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-theme-card text-orange-600 font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4 md:mb-6">Plant Protein</span>
                    <h2 className="font-tropiland text-2xl md:text-5xl text-orange-700 dark:text-orange-400 mb-4 md:mb-6">FUEL*</h2>
                    <p className="text-sm md:text-xl font-medium text-orange-900 dark:text-orange-200 mb-6 md:mb-8">Whole food hemp protein bites for sustained nutrition.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Fuel*</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

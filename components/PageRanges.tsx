
import React from 'react';
import { Button } from './Button';
import { PageView } from '../types';

interface Props {
    onNavigate: (page: PageView) => void;
}

export const PageRanges: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-off-white min-h-screen">
        <section className="py-16 md:py-20 bg-white text-center px-6">
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 text-off-black animate-fade-in-up">FOUR RANGES. <br/> ONE GOAL.</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
                From pre-session energy to post-session recovery, each Hi Yarndi range is engineered to support a specific phase of your training day.
            </p>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-6 md:space-y-12 overflow-hidden">
            {/* Recovery+ */}
            <div className="bg-teal-50 rounded-3xl md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-left">
                <div className="order-2 md:order-1">
                    <span className="inline-block px-4 py-2 rounded-full bg-white text-teal-600 font-bold uppercase tracking-wider text-xs mb-6">Post-Session</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-teal-700 mb-6">RECOVERY+</h2>
                    <p className="text-base md:text-xl font-medium text-teal-900 mb-8">Plant-based recovery hydration made for the bounce-back.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Recovery+</Button>
                </div>
                <div className="order-1 md:order-2 aspect-square bg-teal-100 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
            </div>

            {/* Energize^ */}
            <div className="bg-yellow-50 rounded-3xl md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-right">
                <div className="aspect-square bg-yellow-100 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
                <div>
                    <span className="inline-block px-4 py-2 rounded-full bg-white text-yellow-600 font-bold uppercase tracking-wider text-xs mb-6">Pre-Workout</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-yellow-700 mb-6">ENERGIZE^</h2>
                    <p className="text-base md:text-xl font-medium text-yellow-900 mb-8">Pre-session energy and focus support for when you need to switch on.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Energize^</Button>
                </div>
            </div>

            {/* Drip */}
            <div className="bg-sky-50 rounded-3xl md:rounded-[3rem] p-8 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-slide-in-left">
                 <div className="order-2 md:order-1">
                    <span className="inline-block px-4 py-2 rounded-full bg-white text-blue-600 font-bold uppercase tracking-wider text-xs mb-6">Daily Hydration</span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-blue-700 mb-6">DRIP°</h2>
                    <p className="text-base md:text-xl font-medium text-sky-900 mb-8">Daily hydration and functional support for busy, active days.</p>
                    <Button onClick={() => onNavigate('shop')}>Shop Drip°</Button>
                </div>
                <div className="order-1 md:order-2 aspect-square bg-sky-100 rounded-2xl md:rounded-3xl animate-zoom-in delay-200"></div>
            </div>
        </div>
    </div>
  );
};


import React from 'react';
import { comparisons } from '../data';
import { Check, X, Leaf, Zap, Shield, Droplets, Brain, Dumbbell } from 'lucide-react';

interface ComparisonSectionProps {
    productId: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ productId }) => {
    // Basic mapping logic to find relevant comparison
    let comparisonId = 'recovery';
    if (productId.includes('energize')) comparisonId = 'energize';
    if (productId.includes('drip')) comparisonId = 'drip';
    if (productId.includes('fuel')) comparisonId = 'fuel';

    const comparison = comparisons.find(c => c.id === comparisonId);

    if (!comparison) return null;

    const renderIcon = (type: string) => {
        switch(type) {
            case 'leaf': return <Leaf className="w-5 h-5" />;
            case 'zap': return <Zap className="w-5 h-5" />;
            case 'shield': return <Shield className="w-5 h-5" />;
            case 'droplet': return <Droplets className="w-5 h-5" />;
            case 'brain': return <Brain className="w-5 h-5" />;
            case 'muscle': return <Dumbbell className="w-5 h-5" />;
            default: return <Leaf className="w-5 h-5" />;
        }
    }

    return (
        <div className="py-16 bg-off-white rounded-3xl mt-16 px-6 md:px-12 border border-gray-100">
            <div className="text-center mb-10">
                <h2 className="font-heading text-3xl font-black text-off-black">THE HI YARNDI DIFFERENCE</h2>
                <p className="text-gray-500 mt-2">Why athletes are making the switch.</p>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[600px] grid grid-cols-3 gap-6 items-center">
                    
                    {/* Header Row */}
                    <div className="col-span-1"></div>
                    <div className="col-span-1 text-center bg-off-black text-white py-3 rounded-t-xl font-bold uppercase tracking-widest text-xs">
                        {comparison.title}
                    </div>
                    <div className="col-span-1 text-center bg-gray-200 text-gray-500 py-3 rounded-t-xl font-bold uppercase tracking-widest text-xs">
                        {comparison.competitorLabel}
                    </div>

                    {/* Comparison Points */}
                    {comparison.points.map((point, idx) => (
                        <React.Fragment key={idx}>
                            <div className="col-span-1 flex items-center gap-3 font-bold text-off-black text-sm md:text-base">
                                <div className="p-2 bg-white rounded-full shadow-sm text-accent">
                                    {renderIcon(point.icon)}
                                </div>
                                {point.feature}
                            </div>
                            
                            {/* Us */}
                            <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 justify-center text-center h-full">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span className="font-bold text-sm text-off-black">{point.us}</span>
                            </div>

                            {/* Them */}
                            <div className="col-span-1 bg-gray-100 p-4 rounded-xl flex items-center gap-2 justify-center text-center opacity-60 h-full">
                                <X className="w-4 h-4 text-red-400 shrink-0" />
                                <span className="font-medium text-sm text-gray-500">{point.them}</span>
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </div>
    );
};

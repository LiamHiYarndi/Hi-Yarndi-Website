
import React from 'react';

interface MarqueeProps {
    items?: string[];
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

const DEFAULT_ITEMS = [
    "THE UNFAIR ADVANTAGE",
    "FREE SHIPPING OVER $100",
    "AFTERPAY AVAILABLE",
    "0% THC • 100% FOCUS",
    "ILLEGALLY GOOD",
    "MADE IN MELBOURNE",
    "SHOP THE DROP",
    "RECOVERY EVOLVED",
    "LIMITED STOCK",
    "JOIN THE CLUB"
];

export const Marquee: React.FC<MarqueeProps> = ({ 
    items = DEFAULT_ITEMS, 
    direction = 'left', 
    speed = 25,
    className = ''
}) => {
  return (
    <div className={`w-full bg-[#0D1F16] text-[#F9F9F6] overflow-hidden py-3.5 border-y border-white/10 relative z-20 select-none ${className}`}>
        {/* 
            Seamless Loop Logic:
            The 'animate-infinite-scroll' class translates the container -50%.
            If direction is 'right', we reverse the animation.
        */}
        <div 
            className="flex whitespace-nowrap animate-infinite-scroll w-max" 
            style={{ 
                animationDuration: `${speed}s`,
                animationDirection: direction === 'right' ? 'reverse' : 'normal'
            }}
        >
            {/* Render 4 sets to ensure seamless loop on wide screens */}
            {[1, 2, 3, 4].map((setNum) => (
                <div key={`set-${setNum}`} className="flex shrink-0">
                    {items.map((text, i) => (
                        <div key={`${setNum}-${i}`} className="flex items-center">
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] px-8">
                                {text}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C25E00]"></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
};

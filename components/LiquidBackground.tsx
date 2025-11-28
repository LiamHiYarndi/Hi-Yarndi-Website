
import React from 'react';

interface LiquidBackgroundProps {
    className?: string;
    variant?: 'light' | 'dark' | 'neon' | 'forest';
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({ className = '', variant = 'forest' }) => {
    
    // Wave style implementation with increased opacity for better definition
    return (
        <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
             <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
                <defs>
                    <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style={{stopColor:'#4A5D23', stopOpacity:0.3}} />
                         <stop offset="100%" style={{stopColor:'#4A5D23', stopOpacity:0.7}} />
                    </linearGradient>
                    <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style={{stopColor:'#2F3E1B', stopOpacity:0.4}} />
                         <stop offset="100%" style={{stopColor:'#2F3E1B', stopOpacity:0.8}} />
                    </linearGradient>
                    <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style={{stopColor:'#0D1F16', stopOpacity:0.5}} />
                         <stop offset="100%" style={{stopColor:'#0D1F16', stopOpacity:0.9}} />
                    </linearGradient>
                </defs>
                
                {/* Layer 1 (Back - Tallest) - Muted Sage */}
                <path fill="url(#wave-grad-1)" d="M0,220 L48,236 C96,252,192,284,288,290 C384,296,480,276,576,250 C672,224,768,192,864,198 C960,204,1056,248,1152,264 C1248,280,1344,268,1392,262 L1440,256 L1440,800 L1392,800 C1344,800,1248,800,1152,800 C1056,800,960,800,864,800 C768,800,672,800,576,800 C480,800,384,800,288,800 C192,800,96,800,48,800 L0,800 Z"></path>
                
                {/* Layer 2 (Middle) - Deep Hemp */}
                <path fill="url(#wave-grad-2)" d="M0,380 L48,394 C96,408,192,436,288,426 C384,416,480,368,576,352 C672,336,768,352,864,378 C960,404,1056,440,1152,442 C1248,444,1344,412,1392,396 L1440,380 L1440,800 L1392,800 C1344,800,1248,800,1152,800 C1056,800,960,800,864,800 C768,800,672,800,576,800 C480,800,384,800,288,800 C192,800,96,800,48,800 L0,800 Z"></path>
                
                {/* Layer 3 (Front - Shortest) - Forest Green */}
                <path fill="url(#wave-grad-3)" d="M0,540 L48,554 C96,568,192,596,288,586 C384,576,480,528,576,512 C672,496,768,512,864,538 C960,564,1056,600,1152,602 C1248,604,1344,572,1392,556 L1440,540 L1440,800 L1392,800 C1344,800,1248,800,1152,800 C1056,800,960,800,864,800 C768,800,672,800,576,800 C480,800,384,800,288,800 C192,800,96,800,48,800 L0,800 Z"></path>
            </svg>
        </div>
    );
};

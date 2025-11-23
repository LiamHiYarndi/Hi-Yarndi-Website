
import React from 'react';

interface Props {
    className?: string;
}

export const SmileyIcon: React.FC<Props> = ({ className = "w-8 h-8" }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Face Shadow/Depth */}
        <circle cx="50" cy="52" r="45" fill="#d97706" />
        
        {/* Main Face */}
        <circle cx="50" cy="50" r="45" fill="#fbbf24" />
        
        {/* Glasses Frame */}
        <path d="M10 38 C10 32 15 30 20 30 L42 30 C44 30 46 32 48 34 L50 36 L52 34 C54 32 56 30 58 30 L80 30 C85 30 90 32 90 38 L92 42 L88 55 C86 60 80 62 75 60 L60 55 C58 54 55 50 55 45 L50 40 L45 45 C45 50 42 54 40 55 L25 60 C20 62 14 60 12 55 L8 42 L10 38 Z" fill="#0f172a" />
        
        {/* Lenses Reflection */}
        <path d="M15 35 L40 35 L38 50 C36 53 20 54 15 50 Z" fill="#1e293b" />
        <path d="M60 35 L85 35 L83 50 C81 53 65 54 60 50 Z" fill="#1e293b" />
        
        {/* Lens Glare */}
        <path d="M20 38 L35 38 L25 45 Z" fill="white" opacity="0.3" />
        <path d="M65 38 L80 38 L70 45 Z" fill="white" opacity="0.3" />

        {/* Smile */}
        <path d="M30 70 Q50 85 70 70" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

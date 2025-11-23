
import React from 'react';

interface LiquidBackgroundProps {
    className?: string;
    variant?: 'light' | 'dark' | 'neon';
}

export const LiquidBackground: React.FC<LiquidBackgroundProps> = ({ className = '', variant = 'light' }) => {
    
    const colors = {
        light: {
            blob1: 'bg-yarndi-green/30',
            blob2: 'bg-blue-300/30',
            blob3: 'bg-yellow-200/40',
        },
        dark: {
            blob1: 'bg-primary/40',
            blob2: 'bg-emerald-900/40',
            blob3: 'bg-green-800/30',
        },
        neon: {
            blob1: 'bg-accent/40',
            blob2: 'bg-purple-500/30',
            blob3: 'bg-pink-500/30',
        }
    };

    const currentColors = colors[variant];

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
             <div className="absolute inset-0 filter-goo opacity-80 w-full h-full transform translate-z-0">
                {/* Blob 1 */}
                <div className={`absolute top-[10%] left-[20%] w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob ${currentColors.blob1}`}></div>
                {/* Blob 2 */}
                <div className={`absolute top-[20%] right-[20%] w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob ${currentColors.blob2}`} style={{ animationDelay: '2s' }}></div>
                {/* Blob 3 */}
                <div className={`absolute -bottom-32 left-[30%] w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob ${currentColors.blob3}`} style={{ animationDelay: '4s' }}></div>
                
                {/* Extra blobs for more liquid feel */}
                 <div className={`hidden md:block absolute bottom-[20%] right-[30%] w-48 h-48 rounded-full mix-blend-multiply filter blur-xl animate-blob ${currentColors.blob1}`} style={{ animationDelay: '6s' }}></div>
             </div>
        </div>
    );
};

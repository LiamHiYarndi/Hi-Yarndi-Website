
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  
  // Base styles: Pill shape, uppercase sans-serif, wide tracking
  const baseStyles = "inline-flex items-center justify-center font-sans font-bold uppercase tracking-editorial rounded-full transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variant specific styles (Luxury Minimalist)
  const variantStyles = {
    // Solid Theme Text / Theme BG (Inverts based on mode)
    primary: "bg-theme-text text-theme-bg hover:opacity-90 hover:scale-[1.02]",
    // Subtle Accent
    secondary: "bg-accent text-white hover:bg-opacity-90 hover:scale-[1.02]",
    // Thin Border
    outline: "bg-transparent border border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg",
    // Ghost
    ghost: "bg-transparent text-theme-text hover:text-theme-sub"
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};